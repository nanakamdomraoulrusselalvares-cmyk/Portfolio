export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://nkraoul.vercel.app/sitemap.xml',
  }
}