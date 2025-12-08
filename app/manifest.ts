import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rizky Rafi Azhara | Full Stack Developer',
    short_name: 'Rizky Rafi',
    description: 'Portfolio of Rizky Rafi Azhara, a full stack developer specializing in modern web technologies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
