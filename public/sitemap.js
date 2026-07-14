export default function sitemap() {
  return [
    {
      url: 'https://nkraoul.vercel.app', // Remplacez par votre URL réelle
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Ajoutez vos autres pages ici
    {
      url: 'https://nkraoul.vercel.app/projets',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://nkraoul.vercel.app/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}