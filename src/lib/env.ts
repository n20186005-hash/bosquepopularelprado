/**
 * Shared environment variable helpers.
 * All site-level URLs must be read dynamically from NEXT_PUBLIC_SITE_URL
 * to prevent hard-coded domain leaks across pSEO sites.
 *
 * NOTE: There is NO hardcoded fallback domain. Every site MUST set
 * NEXT_PUBLIC_SITE_URL in its deployment environment.
 */

export const getBaseUrl = () => {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (!url || url.trim() === '') {
    // In development, allow localhost without env var
    if (process.env.NODE_ENV === 'development') return 'http://localhost:3000';
    // Vercel auto-injects VERCEL_URL – use it as last-resort fallback
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    // In production, loudly fail so the missing env var gets noticed
    console.error(
      '[FATAL] NEXT_PUBLIC_SITE_URL is not set. ' +
      'Set this environment variable in your deployment platform.'
    );
    throw new Error('NEXT_PUBLIC_SITE_URL is required but not set.');
  }
  return url.replace(/\/+$/, '');
};

export const getAdsenseClientId = () => {
  return process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-XXXXXXXXXX';
};
