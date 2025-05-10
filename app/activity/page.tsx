import React from "react";

const activities = [
  {
    image: "/activity/ml-study.jpg",
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v7m0 0H7m5 0h5" /></svg>
    ),
    title: "機械学習勉強会",
    description: "週1回のペースで、機械学習の基礎から応用まで学びます。理論と実装の両方を重視し、初心者も安心して参加できます。",
  },
  {
    image: "/activity/hackathon.jpg",
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h3m-7 6v2a4 4 0 004 4h3m-7-6H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4" /></svg>
    ),
    title: "ハッカソン参加",
    description: "定期的にハッカソンに参加し、実践的な開発経験を積みます。チームでの協力や新しい技術の習得ができます。",
  },
  {
    image: "/activity/company-collab.jpg",
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0H3" /></svg>
    ),
    title: "企業連携・共同研究",
    description: "企業との共同研究やイベントを通じて、実社会でのAI活用やネットワークを広げています。",
  },
  {
    image: "/activity/lt-meetup.jpg",
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4-4 4 4m0 0V3m0 14H4" /></svg>
    ),
    title: "勉強会・LT大会",
    description: "メンバーによるLT（ライトニングトーク）や勉強会で、知識や経験を共有し合います。",
  },
];

export default function Activity() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-blue-50 via-blue-100 to-white min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-12">活動内容</h1>
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
        {activities.map((activity, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition-all border-l-4 border-blue-400">
            {activity.image && (
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-48 object-cover rounded-xl mb-4 border"
              />
            )}
            <div className="mb-4">{activity.icon}</div>
            <h2 className="text-2xl font-bold text-blue-700 mb-2">{activity.title}</h2>
            <p className="text-gray-700 text-center text-lg">{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
