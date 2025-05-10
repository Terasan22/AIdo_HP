import React from "react";

const members = [
  {
    name: "山田 太郎",
    role: "代表",
    description: "AIとデータサイエンスが大好きな東大生。最先端技術の研究と実装が得意。",
    image: "/members/yamada.jpg",
    twitter: "https://twitter.com/xxxx",
  },
  {
    name: "佐藤 花子",
    role: "副代表",
    description: "データ分析と機械学習の応用に情熱を持つ。勉強会の企画担当。",
    image: "/members/sato.jpg",
    twitter: "https://twitter.com/xxxx",
  },
  {
    name: "鈴木 一郎",
    role: "広報",
    description: "AIの社会実装に興味あり。イベントやSNS運営を担当。",
    image: "/members/suzuki.jpg",
    twitter: "https://twitter.com/xxxx",
  },
];

export default function Members() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-blue-50 via-blue-100 to-white min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-12">メンバー紹介</h1>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
        {members.map((member, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-all">
            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-blue-200" />
            <h2 className="text-xl font-bold text-blue-700 mb-1">{member.name}</h2>
            <p className="text-blue-500 mb-2 font-semibold">{member.role}</p>
            <p className="text-gray-700 text-center mb-3">{member.description}</p>
            {member.twitter && (
              <a href={member.twitter} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
