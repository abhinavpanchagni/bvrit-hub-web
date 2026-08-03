import Link from "next/link";
import { MessageCircle, Camera } from "lucide-react";

export default function FeedPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <h1 className="text-5xl font-extrabold">
            Community
          </h1>
        </div>

        {/* Join Us Section */}
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <Link href="https://chat.whatsapp.com/LNaLDjzcxg895BXr3RfkQz" target="_blank" className="bg-white rounded-2xl p-6 shadow-sm border border-border/10 flex items-center justify-between group hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-text-primary">WhatsApp Community</h3>
                <p className="text-sm font-medium text-text-secondary mt-1">Connect with peers</p>
              </div>
            </div>
            <span className="bg-surface-yellow px-4 py-1.5 rounded-full text-xs font-bold shadow-sm border border-border/10">Join Us</span>
          </Link>

          <Link href="https://www.instagram.com/bvrithub?utm_source=qr&igsh=dHNpZXc4YmVkcm1q" target="_blank" className="bg-white rounded-2xl p-6 shadow-sm border border-border/10 flex items-center justify-between group hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center">
                <Camera size={24} />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-text-primary">Instagram</h3>
                <p className="text-sm font-medium text-text-secondary mt-1">Follow for updates</p>
              </div>
            </div>
            <span className="bg-surface-yellow px-4 py-1.5 rounded-full text-xs font-bold shadow-sm border border-border/10">Join Us</span>
          </Link>
        </div>

      </div>
    </main>
  );
}
