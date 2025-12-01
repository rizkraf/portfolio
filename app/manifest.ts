import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rizky Rafi Azhara | Software Engineer',
    short_name: 'Rizky Rafi',
    description: 'Portfolio of Rizky Rafi Azhara, a software engineer specializing in bold and experimental web experiences.',
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
