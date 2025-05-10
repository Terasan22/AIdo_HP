import React from "react";

const aiExamples = [
  {
    title: "スマートフォンの音声アシスタント",
    description: "SiriやGoogleアシスタントなど、日常的に使う音声認識や翻訳機能はAI技術によって支えられています。",
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
    ),
  },
  {
    title: "レコメンドシステム",
    description: "YouTubeやNetflix、Amazonなどで表示されるおすすめコンテンツはAIによるパーソナライズが活用されています。",
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
    ),
  },
  {
    title: "医療分野での活用",
    description: "画像診断や新薬開発、健康管理アプリなど、医療現場でもAIが幅広く使われています。",
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
    ),
  },
  {
    title: "自動運転・交通システム",
    description: "自動運転車や渋滞予測、ナビゲーションアプリなど、交通分野でもAIが活躍しています。",
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="6" rx="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M7 11V7a5 5 0 0110 0v4" /></svg>
    ),
  },
];

export default function AboutAI() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-blue-50 via-blue-100 to-white min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">AIは身近な場所で活躍しています</h1>
      <p className="text-lg text-blue-900 mb-12 text-center max-w-2xl">
        AI（人工知能）は、私たちの生活のあらゆる場面で使われています。<br />
        実はあなたの身の回りにも、たくさんのAI技術が溶け込んでいます。
      </p>
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-4xl mb-16">
        {aiExamples.map((ex, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition-all border-l-4 border-blue-400">
            <div className="mb-4">{ex.icon}</div>
            <h2 className="text-xl font-bold text-blue-700 mb-2">{ex.title}</h2>
            <p className="text-gray-700 text-center text-lg">{ex.description}</p>
          </div>
        ))}
      </div>
      <div className="max-w-2xl bg-blue-50 dark:bg-blue-900/40 rounded-2xl p-8 flex flex-col items-center mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">AIdoでAIの最前線を体験しよう！</h2>
        <p className="text-blue-900 text-lg text-center mb-4">
          AIは今や社会の基盤技術。AIdoでは、最先端のAI技術を学び、実践し、仲間と共に成長できます。<br />
          未来を創る力を、AIdoで一緒に身につけませんか？
        </p>
        <a href="/join" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all text-lg mt-2">
          AIdoに参加する
        </a>
      </div>
    </section>
  );
}
