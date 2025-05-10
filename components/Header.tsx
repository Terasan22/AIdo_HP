import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/IMG_9937.jpg" alt="AIdo Logo" width={48} height={32} className="rounded" />
          <span className="text-2xl font-bold tracking-tight">AIdo</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
          <Link href="/activity" className="hover:text-blue-200 transition-colors">活動内容</Link>
          <Link href="/members" className="hover:text-blue-200 transition-colors">メンバー紹介</Link>
          <Link href="/news" className="hover:text-blue-200 transition-colors">お知らせ</Link>
          <Link href="/FAQ" className="hover:text-blue-200 transition-colors">FAQ</Link>
          <Link href="/join" className="hover:text-blue-200 transition-colors">参加</Link>
          <Link href="/contact" className="hover:text-blue-200 transition-colors">お問い合わせ</Link>
        </nav>
      </div>
    </header>
  );
} 