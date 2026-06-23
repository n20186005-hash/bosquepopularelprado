'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 景点介绍 */}
          <div
            className="rounded-xl p-6 sm:p-8 transition-transform hover:-translate-y-1 hover:shadow-md"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('introTitle')}
            </h3>
            <p
              className="leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('introText')}
            </p>
          </div>

          {/* 管理信息 */}
          <div
            className="rounded-xl p-6 sm:p-8 transition-transform hover:-translate-y-1 hover:shadow-md"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('managementTitle')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-lg">🏛️</span>
                <div>
                  <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                    {t('managedBy')}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {t('managementOrg')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <div>
                  <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                    {t('location')}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {t('locationValue')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🌐</span>
                <div>
                  <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                    {t('officialInfo')}
                  </p>
                  <a
                    href={t('websiteUrl')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                    style={{ color: 'var(--accent)' }}
                  >
                    {t('websiteText')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 历史背景 */}
        <div
          className="mt-8 rounded-xl p-6 sm:p-8 transition-transform hover:-translate-y-1 hover:shadow-md"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          <h3
            className="font-display text-xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('historyTitle')}
          </h3>
          <p
            className="leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('historyText')}
          </p>
        </div>

        {/* 管理机构与权属说明 */}
        <div
          className="mt-8 rounded-xl p-6 sm:p-8 transition-transform hover:-translate-y-1 hover:shadow-md"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          <h3
            className="font-display text-xl font-semibold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('managementOwnershipTitle')}
          </h3>
          <p
            className="leading-relaxed mb-6"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('managementOwnershipText')}
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-lg">🏛️</span>
              <div>
                <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                  {t('managedBy')}
                </p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {t('managementOrgFull')}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg">📄</span>
              <div>
                <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                  {t('ownershipType')}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg">📞</span>
              <div>
                <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                  {t('managementContact')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
