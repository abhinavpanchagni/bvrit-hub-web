"use client";

import { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/utils/supabase/client';

export interface Bookmark {
  id: string; // e.g. "M&C", "PPS"
  title: string;
  type: string; // "subject", "resource"
  href: string;
}

export interface RecentItem {
  id: string;
  title: string;
  href: string;
}

export function useTracker() {
  const supabase = createClient();
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [progress, setProgress] = useState<string[]>([]);
  const [recent, setRecent] = useState<RecentItem | null>(null);
  const [mounted, setMounted] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const loadState = useCallback(async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setMounted(true);
        return;
      }
      setUserId(user.id);

      // Fetch bookmarks
      const { data: bData } = await supabase.from('user_bookmarks').select('*').eq('user_id', user.id);
      if (bData) {
        setBookmarks(bData.map(b => ({ id: b.item_id, title: b.title, type: b.type, href: b.href })));
      }

      // Fetch progress
      const { data: pData } = await supabase.from('user_progress').select('*').eq('user_id', user.id);
      if (pData) {
        setProgress(pData.map(p => p.item_id));
      }

      // Fetch recent activity
      const { data: rData } = await supabase.from('user_recent_activity').select('*').eq('user_id', user.id).maybeSingle();
      if (rData) {
        setRecent({ id: "recent", title: rData.title, href: rData.href });
      }
    } catch (e) {
      console.error('Failed to load tracker state from database', e);
    } finally {
      setMounted(true);
    }
  }, [supabase]);

  useEffect(() => {
    loadState();
  }, [loadState]);

  const toggleBookmark = async (item: Bookmark) => {
    if (!userId) return;
    const isBookmarked = bookmarks.some(b => b.id === item.id);
    if (isBookmarked) {
      setBookmarks(prev => prev.filter(b => b.id !== item.id));
      await supabase.from('user_bookmarks').delete().match({ user_id: userId, item_id: item.id });
    } else {
      setBookmarks(prev => [...prev, item]);
      await supabase.from('user_bookmarks').insert({
        user_id: userId,
        item_id: item.id,
        title: item.title,
        type: item.type,
        href: item.href
      });
    }
  };

  const markProgress = async (itemId: string) => {
    if (!userId || progress.includes(itemId)) return;
    setProgress(prev => [...prev, itemId]);
    await supabase.from('user_progress').insert({
      user_id: userId,
      item_id: itemId
    });
  };

  const setRecentItem = async (item: RecentItem) => {
    if (!userId) return;
    setRecent(item);
    await supabase.from('user_recent_activity').upsert({
      user_id: userId,
      title: item.title,
      href: item.href
    }, { onConflict: 'user_id' });
  };

  // Calculate a generic progress percentage (max 100%)
  // Assuming completing 20 resources is 100% for a semester.
  const progressPercentage = Math.min(Math.round((progress.length / 20) * 100), 100);

  return {
    mounted,
    bookmarks,
    toggleBookmark,
    isBookmarked: (id: string) => bookmarks.some(b => b.id === id),
    progress,
    markProgress,
    progressPercentage,
    recent,
    setRecentItem
  };
}
