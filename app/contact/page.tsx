import React from "react";

export default function Contact() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto rounded-2xl shadow-2xl bg-white/80 dark:bg-gray-900/80 p-10 md:p-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-300 mb-4 text-center">Contact / お問い合わせ</h2>
        <p className="text-lg text-blue-900 dark:text-blue-100 mb-8 text-center">ご質問・ご相談・コラボ依頼など、お気軽にご連絡ください。</p>
        <div className="w-full flex flex-col gap-8 items-center">
          {/* Googleフォーム */}
          <a
            href="https://docs.google.com/forms/d/1hfq1n0P5PG9fwfIbISvdPpEJAfLMrYtA1E0qIOtW2Yk/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all text-lg"
          >
            Googleフォームでお問い合わせ
          </a>
          {/* メールアドレス */}
          <div className="bg-blue-50 dark:bg-blue-900/40 rounded-xl p-6 w-full flex flex-col items-center">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-200 mb-2">メール</h3>
            <a href="mailto:contact@aido.tokyo" className="text-blue-600 dark:text-blue-300 underline break-all text-lg">contact@aido.tokyo</a>
          </div>
          {/* SNS */}
          <div className="bg-blue-50 dark:bg-blue-900/40 rounded-xl p-6 w-full flex flex-col items-center">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-200 mb-2">SNS</h3>
            <div className="flex gap-6">
              <a href="#" className="text-blue-600 dark:text-blue-300 hover:underline text-lg">Twitter</a>
              <a href="#" className="text-blue-600 dark:text-blue-300 hover:underline text-lg">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}