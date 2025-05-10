import React from "react";

export default function Join() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-blue-50 via-blue-100 to-white min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">AIdoに参加する</h1>
      <p className="text-lg text-blue-900 mb-8 text-center max-w-xl">
        AIdoに興味を持っていただきありがとうございます！<br />
        下記フォームまたはSNSからお気軽にご連絡・ご参加ください。
      </p>
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">参加フォーム</h2>
        <form className="flex flex-col gap-6">
          <label className="font-semibold text-blue-700">
            お名前
            <input type="text" className="mt-1 w-full px-3 py-2 rounded border border-blue-200 bg-blue-50 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="お名前" />
          </label>
          <label className="font-semibold text-blue-700">
            メールアドレス
            <input type="email" className="mt-1 w-full px-3 py-2 rounded border border-blue-200 bg-blue-50 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="your@email.com" />
          </label>
          <label className="font-semibold text-blue-700">
            志望動機・メッセージ
            <textarea className="mt-1 w-full px-3 py-2 rounded border border-blue-200 bg-blue-50 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4} placeholder="AIdoでやりたいことや自己紹介など"></textarea>
          </label>
          <button type="submit" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all mt-2">
            送信
          </button>
        </form>
      </div>
      <div className="w-full max-w-xl bg-blue-50 dark:bg-blue-900/40 rounded-2xl p-6 flex flex-col items-center">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">SNSでも参加・質問受付中！</h3>
        <div className="flex gap-6">
          <a href="#" className="text-blue-600 hover:underline text-lg">Twitter</a>
          <a href="#" className="text-blue-600 hover:underline text-lg">GitHub</a>
        </div>
      </div>
    </section>
  );
}
