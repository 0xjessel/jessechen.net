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
      {
        source: '/blog/personal-finance-for-young-professionals',
        destination: '/posts/2013/personal-finance-for-young-professionals',
        permanent: true,
      },
      {
        source: '/blog/year-2012-in-review',
        destination: '/posts/2013/year-2012-in-review',
        permanent: true,
      },
      {
        source: '/blog/post-hoc-analysis-of-instawifis-launch',
        destination: '/posts/2012/post-hoc-analysis-of-instawifis-launch',
        permanent: true,
      },
      {
        source: '/blog/freeing-your-online-graduation-pictures',
        destination: '/posts/2012/freeing-your-online-graduation-pictures',
        permanent: true,
      },
      {
        source: '/blog/protip-how-to-be-a-good-boss',
        destination: '/posts/2012/protip-how-to-be-a-good-boss',
        permanent: true,
      },
      {
        source: '/blog/playing-the-student-card',
        destination: '/posts/2012/playing-the-student-card',
        permanent: true,
      },
      {
        source: '/blog/protip-bash-autocomplete-for-android-adb',
        destination: '/posts/2012/protip-bash-autocomplete-for-android-adb',
        permanent: true,
      },
      {
        source: '/blog/getting-out-of-the-consumer-mindset',
        destination: '/posts/2012/getting-out-of-the-consumer-mindset',
        permanent: true,
      },
      {
        source: '/blog/looking-back-on-how-to-nfc-on-the-android-platform',
        destination: '/posts/2011/looking-back-on-how-to-nfc-on-the-android-platform',
        permanent: true,
      },
      {
        source: '/blog/how-to-nfc-on-the-android-platform',
        destination: '/posts/2011/how-to-nfc-on-the-android-platform',
        permanent: true,
      },
      {
        source: '/blog/how-does-google-plus-instant-upload-work',
        destination: '/posts/2011/how-does-google-plus-instant-upload-work',
        permanent: true,
      },
      {
        source: '/blog/facebook-messenger-why-you-should-use-it',
        destination: '/posts/2011/facebook-messenger-why-you-should-use-it',
        permanent: true,
      },
      {
        source: '/blog/summer-of-2011-google-io-and-facebook',
        destination: '/posts/2011/summer-of-2011-google-io-and-facebook',
        permanent: true,
      },
      {
        source: '/blog/google-io-bound',
        destination: '/posts/2011/google-io-bound',
        permanent: true,
      },
      {
        source: '/blog/debugging-your-android-app-wirelessly-on-an-android-smartphone',
        destination: '/posts/2011/debugging-your-android-app-wirelessly-on-an-android-smartphone',
        permanent: true,
      },
      {
        source: '/blog/my-experiment-on-the-powerful-impact-of-social-networking',
        destination: '/posts/2011/my-experiment-on-the-powerful-impact-of-social-networking',
        permanent: true,
      },
      {
        source: '/blog/how-google-voice-saved-my-interview',
        destination: '/posts/2011/how-google-voice-saved-my-interview',
        permanent: true,
      },
      {
        source: '/blog/january-27-2016',
        destination: '/posts/2011/january-27-2016',
        permanent: true,
      },
      {
        source: '/blog/how-to-maximize-battery-life-and-phone-responsiveness',
        destination: '/posts/2010/how-to-maximize-battery-life-and-phone-responsiveness',
        permanent: true,
      },
      {
        source: '/blog/the-future-of-cloud-computing',
        destination: '/posts/2010/the-future-of-cloud-computing',
        permanent: true,
      },
      {
        source: '/blog/going-google',
        destination: '/posts/2010/going-google',
        permanent: true,
      },
      {
        source: '/blog/boot-manager-failed-to-find-os-loader-0x490',
        destination: '/posts/2010/boot-manager-failed-to-find-os-loader-0x490',
        permanent: true,
      },
      {
        source: '/blog/college-so-far',
        destination: '/posts/2010/college-so-far',
        permanent: true,
      },
      {
        source: '/blog/getting-rich-on-youtube',
        destination: '/posts/2010/getting-rich-on-youtube',
        permanent: true,
      },
      {
        source: '/blog/motorola-droid-vs-droid-x-benchmark-tests',
        destination: '/posts/2010/motorola-droid-vs-droid-x-benchmark-tests',
        permanent: true,
      },
      {
        source: '/blog/swype-on-the-motorola-droid-x',
        destination: '/posts/2010/swype-on-the-motorola-droid-x',
        permanent: true,
      },
      {
        source: '/blog/droid-x-review',
        destination: '/posts/2010/droid-x-review',
        permanent: true,
      },
      {
        source: '/blog/got-my-droid-x',
        destination: '/posts/2010/got-my-droid-x',
        permanent: true,
      },
      {
        source: '/blog/an-update-on-jessechen-net',
        destination: '/posts/2010/an-update-on-jessechen-net',
        permanent: true,
      },
      {
        source: '/blog/noob-me',
        destination: '/posts/2010/noob-me',
        permanent: true,
      },
      {
        source: '/blog/hello-world',
        destination: '/posts/2010/hello-world',
        permanent: true,
      },
    ]
  },
}