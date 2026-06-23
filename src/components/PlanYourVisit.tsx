'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function PlanYourVisit() {
  const t = useTranslations('planYourVisit');
  const messages = useMessages() as any;
  const tips = (messages?.planYourVisit?.tips || []) as string[];

  return (
    <section id="plan-your-visit" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <InfoCard title={t('hoursTitle')} content={t('hours')} />
          <InfoCard title={t('ticketsTitle')} content={t('tickets')} />
          <InfoCard title={t('transportTitle')} content={t('transport')} />
        </div>

        <div
          className="rounded-xl p-6 sm:p-8"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
            {t('tipsTitle')}
          </h3>
          <ul className="space-y-3">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                <span style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
                  {tip}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, content }: { title: string; content: string }) {
  return (
    <div
      className="rounded-xl p-6 transition-transform hover:-translate-y-1 hover:shadow-md h-full flex flex-col"
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
    >
      <h3 className="font-display text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h3>
      <p className="text-sm whitespace-pre-line leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {content}
      </p>
    </div>
  );
}
