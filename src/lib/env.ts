/**
 * Shared environment variable helpers.
 * All site-level URLs must be read dynamically from CURRENT_SITE_DOMAIN
 * to prevent hard-coded domain leaks across pSEO sites.
 */

export const getBaseUrl = () => {
  const domain = process.env.CURRENT_SITE_DOMAIN || 'bosquepopularelprado.com';
  return `https://${domain}`;
};

export const getAdsenseClientId = () => {
  return process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-XXXXXXXXXX';
};
