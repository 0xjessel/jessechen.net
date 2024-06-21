module.exports = {
  images: {
    loader: 'imgix',
    path: 'https://res.cloudinary.com/dhineshse/',
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      import('./scripts/generate-sitemap.mjs')
    }

    return config
  },
  async redirects() {
    return [
      {
        source: '/articles',
        destination: '/posts/',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/posts/',
        permanent: true,
      },
    ]
  },
}