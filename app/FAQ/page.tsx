import React from "react";

const faqs = [
  {
    question: "AIdoには誰でも入れますか？",
    answer: "現在は東京大学の学生のみを対象としていますが、東京大学内での活動が安定した後には、全国の学生が参加できるよう活動範囲を広げていく予定です！私たちは日本一のサークルを目指して日々努力しています！",
  },
  {
    question: "プログラミング経験がなくても大丈夫ですか？",
    answer: "はい、未経験者向けの勉強会やサポート体制も充実しています。基礎から一緒に学びましょう。",
  },
  {
    question: "活動頻度や内容は？",
    answer: "週1回の勉強会や、定期的なハッカソン・プロジェクト活動・企業連携イベントなど多彩な活動を行っています。",
  },
  {
    question: "他大学の学生も参加できますか？",
    answer: "申し訳ありませんが、現在は東京大学の学生のみを対象としています。",
  },
  {
    question: "入会方法を教えてください。",
    answer: "入会希望の方はお問い合わせフォームまたはSNSからご連絡ください。詳細をご案内します。",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-blue-50 via-blue-100 to-white min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-12">よくある質問</h1>
      <div className="w-full max-w-2xl flex flex-col gap-8">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-400">
            <div className="text-lg font-semibold text-blue-700 mb-2">Q. {faq.question}</div>
            <div className="text-gray-700 text-base pl-2">A. {faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
