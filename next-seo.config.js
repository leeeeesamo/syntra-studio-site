const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://syntrasolutions.digital';
const SITE_NAME = 'Syntra Digital Solutions';
const SITE_DESCRIPTION = 'Custom website design and development built for performance, clarity, and long-term reliability.';

module.exports = {
  titleTemplate: `%s | ${SITE_NAME}`,
  defaultTitle: SITE_NAME,
  description: SITE_DESCRIPTION,
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    site_name: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/brand-assets/og-image-2026.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || '@syntradigital',
    site: process.env.NEXT_PUBLIC_TWITTER_HANDLE || '@syntradigital',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
  ],
};
