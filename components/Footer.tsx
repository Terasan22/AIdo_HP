import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">AIdo</h3>
          <p className="text-gray-400">東京大学 AI・データサイエンスサークル</p>
        </div>
        <div className="flex gap-6 items-center">
          <a href="https://instagram.com/utokyo_aido" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-lg">Instagram</a>
          <a href="https://github.com/utokyo-aido" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-lg">GitHub</a>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400 text-sm">
        &copy; 2024 AIdo. All rights reserved.
      </div>
    </footer>
  );
} 