"use client";

import { useState, useEffect, useCallback } from 'react';

// Custom event to trigger re-renders across tabs/components
const TRACKER_EVENT = 'bvrithub_tracker_update';

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
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [progress, setProgress] = useState<string[]>([]);
  const [recent, setRecent] = useState<RecentItem | null>(null);
  const [mounted, setMounted] = useState(false);

  const loadState = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const b = localStorage.getItem('bvrithub_bookmarks');
      if (b) setBookmarks(JSON.parse(b));

      const p = localStorage.getItem('bvrithub_progress');
      if (p) setProgress(JSON.parse(p));

      const r = localStorage.getItem('bvrithub_recent');
      if (r) setRecent(JSON.parse(r));
    } catch (e) {
      console.error('Failed to load tracker state', e);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    loadState();
    
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key && e.key.startsWith('bvrithub_')) {
        loadState();
      }
    };

    const handleCustomEvent = () => loadState();

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener(TRACKER_EVENT, handleCustomEvent);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener(TRACKER_EVENT, handleCustomEvent);
    };
  }, [loadState]);

  const dispatchUpdate = () => {
    window.dispatchEvent(new Event(TRACKER_EVENT));
  };

  const toggleBookmark = (item: Bookmark) => {
    const isBookmarked = bookmarks.some(b => b.id === item.id);
    let newBookmarks;
    if (isBookmarked) {
      newBookmarks = bookmarks.filter(b => b.id !== item.id);
    } else {
      newBookmarks = [...bookmarks, item];
    }
    localStorage.setItem('bvrithub_bookmarks', JSON.stringify(newBookmarks));
    setBookmarks(newBookmarks);
    dispatchUpdate();
  };

  const markProgress = (itemId: string) => {
    if (!progress.includes(itemId)) {
      const newProgress = [...progress, itemId];
      localStorage.setItem('bvrithub_progress', JSON.stringify(newProgress));
      setProgress(newProgress);
      dispatchUpdate();
    }
  };

  const setRecentItem = (item: RecentItem) => {
    localStorage.setItem('bvrithub_recent', JSON.stringify(item));
    setRecent(item);
    dispatchUpdate();
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
