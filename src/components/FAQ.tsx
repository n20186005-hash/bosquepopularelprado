'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function FAQ() {
  const t = useTranslations('faq');
  const faqItems = t.raw('items') as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, index }: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: 'var(--bg-tertiary)',
        border: '1px solid var(--border-color)',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 sm:px-8 sm:py-5 text-left flex items-center justify-between gap-4 hover:opacity-80 transition-opacity"
        style={{ cursor: 'pointer' }}
      >
        <h3
          className="font-display text-lg sm:text-xl font-semibold pr-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {question}
        </h3>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={`flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          style={{ color: 'var(--accent)' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div
          className="px-6 pb-4 sm:px-8 sm:pb-5 pt-0"
          style={{ color: 'var(--text-secondary)' }}
        >
          <p className="leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
