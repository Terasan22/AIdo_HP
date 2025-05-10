import React from "react";

const newsList = [
  {
    date: "2024-06-01",
    title: "新歓イベント開催！",
    content: "6月15日にAIdo新歓イベントを開催します。AIに興味のある方はぜひご参加ください！",
  },
  {
    date: "2024-05-20",
    title: "ハッカソン参加者募集",
    content: "次回のAIハッカソンの参加者を募集しています。初心者も大歓迎！",
  },
  {
    date: "2024-05-10",
    title: "Webサイトリニューアル",
    content: "AIdoの公式HPが新しくなりました。今後も最新情報を発信していきます。",
  },
];

export default function News() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-blue-50 via-blue-100 to-white min-h-screen flex flex-col items-center">
      <div className="w-full max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8 text-center flex items-center gap-3 justify-center">
          <svg className="w-9 h-9 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
          お知らせ
        </h1>
        <div className="flex flex-col gap-6">
          {newsList.map((news, idx) => (
            <div key={idx} className="bg-white/90 border-l-4 border-blue-500 shadow-md rounded-lg p-6 flex flex-col md:flex-row md:items-center gap-4 hover:shadow-xl transition-all">
              <div className="flex-shrink-0 flex flex-col items-center md:items-start w-32">
                <span className="text-xs text-blue-600 font-semibold mb-1">{news.date}</span>
                <span className="text-lg font-bold text-blue-800 mb-2">{news.title}</span>
              </div>
              <div className="text-gray-700 text-base flex-1">
                {news.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
