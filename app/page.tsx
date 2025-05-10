import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 opacity-95"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
          <Image
            src="/aido-logo.png"
            alt="AIdo Logo"
            width={220}
            height={100}
            className="mb-6"
            priority
          />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">AIdo</h1>
          <p className="text-2xl md:text-3xl mb-8 font-light">東京大学 AI・データサイエンスサークル</p>
          <p className="text-lg md:text-xl mb-12 text-blue-100">未来を創る、AIの最前線</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/activity"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              活動を見る
            </a>
            <a
              href="/join"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all transform hover:scale-105 flex items-center justify-center"
            >
              入部する
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Why Join AIdo?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/about_ai" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 group-hover:ring-2 group-hover:ring-blue-400">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">最先端の技術</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  最新のAI技術を学び、実践できる環境。研究から実装まで、幅広い経験が積めます。
                </p>
              </div>
            </a>
            <a href="/members" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 group-hover:ring-2 group-hover:ring-blue-400">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">充実した仲間</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  同じ志を持つ仲間と切磋琢磨。技術的な議論から、プロジェクトの共同開発まで。
                </p>
              </div>
            </a>
            <a href="/activity" className="block group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 group-hover:ring-2 group-hover:ring-blue-400">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">実践的な経験</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  企業との共同研究やハッカソン参加など、実践的な経験を積む機会が豊富。
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Our Activities
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">機械学習勉強会</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  週1回のペースで、機械学習の基礎から応用まで学んでいます。実践的なプロジェクトを通じて、理論と実装の両方を理解します。
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">TensorFlow</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">PyTorch</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">ハッカソン参加</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  定期的にハッカソンに参加し、実践的な開発経験を積んでいます。チーム開発の経験や、新しい技術の習得ができます。
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">チーム開発</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">プロトタイピング</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">プレゼン</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Join Our Community</h2>
          <p className="text-xl mb-12 text-blue-100">
            あなたの可能性を、AIの世界で広げませんか？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
              入部する
            </button>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all transform hover:scale-105 flex items-center justify-center"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">AIdo</h3>
              <p className="text-gray-400">
                東京大学 AI・データサイエンスサークル
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Activities</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="/members" className="text-gray-400 hover:text-white transition-colors">メンバー紹介</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: contact@aido.tokyo
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AIdo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
