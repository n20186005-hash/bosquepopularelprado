'use client';

import { useTranslations } from 'next-intl';

export default function CTASection() {
  const t = useTranslations('hero');

  return (
    <section className="py-16 px-4 sm:px-6" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/map-download"
            onClick={(e) => { e.preventDefault(); alert("Map download functionality coming soon!"); }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-transform hover:-translate-y-0.5 shadow-md"
            style={{ background: 'var(--accent)', color: 'white' }}
          >
            {t('downloadMap')}
          </a>
          <a
            href="#plan-your-visit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-transform hover:-translate-y-0.5 shadow-md"
            style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
          >
            {t('viewActivities')}
          </a>
        </div>
      </div>
    </section>
  );
}