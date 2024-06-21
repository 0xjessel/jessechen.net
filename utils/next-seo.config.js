const SEO_CONFIG_BASE = {
  defaultTitle: "Dhinesh-SE",
  titleTemplate: "%s | Dhinesh-SE",
  description: "Software Engineer. Personal website of Dhinesh-SE.",
  twitter: {
    cardType: "summary_large_image",
    site: "@DhineshDamon",
    handle: "@DhineshDamon",
  },
  openGraph: {
    type: "website",
    site_name: "Dhinesh_SE",
    profile: {
      firstName: "Dhinesh",
      lastName: "VD",
      username: "Dhinesh-Se",
      gender: "male",
    },
    images: [
      {
        url: "https://res.cloudinary.com/dhineshse/images/upload/v1688964717/hero.jpg",
      },
    ],
  },
};

const ADDITIONAL_LINK_TAGS_LIGHT = [
  {
    rel: "icon",
    href: "/favicon-16x16.png",
    sizes: "16x16",
  },
  {
    rel: "icon",
    href: "/favicon-32x32.png",
    sizes: "32x32",
  },
  {
    rel: "icon",
    href: "/favicon.ico",
    sizes: "48x48",
  },
  {
    rel: "icon",
    href: "/apple-touch-icon.png",
    sizes: "180x180",
  },
  {
    rel: "icon",
    href: "/android-chrome-192x192.png",
    sizes: "192x192",
  },
  {
    rel: "icon",
    href: "/android-chrome-512x512.png",
    sizes: "512x512",
  },
  {
    rel: "apple-touch-icon",
    href: "/apple-touch-icon.png",
    sizes: "180x180",
  },
];

const ADDITIONAL_LINK_TAGS_DARK = [
  {
    rel: "icon",
    href: "/favicon-16x16.png",
    sizes: "16x16",
  },
  {
    rel: "icon",
    href: "/favicon-32x32.png",
    sizes: "32x32",
  },
  {
    rel: "icon",
    href: "/favicon.ico",
    sizes: "48x48",
  },
  {
    rel: "icon",
    href: "/apple-touch-icon.png",
    sizes: "180x180",
  },
  {
    rel: "icon",
    href: "/android-chrome-192x192.png",
    sizes: "192x192",
  },
  {
    rel: "icon",
    href: "/android-chrome-192x192.png",
    sizes: "512x512",
  },
  {
    rel: "apple-touch-icon",
    href: "/apple-touch-icon.png",
    sizes: "180x180",
  },
];

export const SEO_CONFIG_LIGHT = {
  ...SEO_CONFIG_BASE,
  additionalLinkTags: ADDITIONAL_LINK_TAGS_LIGHT,
};

export const SEO_CONFIG_DARK = {
  ...SEO_CONFIG_BASE,
  additionalLinkTags: ADDITIONAL_LINK_TAGS_DARK,
};
