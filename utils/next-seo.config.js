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
        url: "https://Dhinesh-SE.net/images/hero.jpg",
      },
    ],
  },
};

const ADDITIONAL_LINK_TAGS_LIGHT = [
  {
    rel: "icon",
    href: "/favicon-16x16-light.png",
    sizes: "16x16",
  },
  {
    rel: "icon",
    href: "/favicon-32x32-light.png",
    sizes: "32x32",
  },
  {
    rel: "icon",
    href: "/favicon-light.ico",
    sizes: "48x48",
  },
  {
    rel: "icon",
    href: "/apple-touch-icon-light.png",
    sizes: "180x180",
  },
  {
    rel: "icon",
    href: "/android-chrome-192x192-light.png",
    sizes: "192x192",
  },
  {
    rel: "icon",
    href: "/android-chrome-512x512-light.png",
    sizes: "512x512",
  },
  {
    rel: "apple-touch-icon",
    href: "/apple-touch-icon-light.png",
    sizes: "180x180",
  },
];

const ADDITIONAL_LINK_TAGS_DARK = [
  {
    rel: "icon",
    href: "/favicon-16x16-dark.png",
    sizes: "16x16",
  },
  {
    rel: "icon",
    href: "/favicon-32x32-dark.png",
    sizes: "32x32",
  },
  {
    rel: "icon",
    href: "/favicon-dark.ico",
    sizes: "48x48",
  },
  {
    rel: "icon",
    href: "/apple-touch-icon-dark.png",
    sizes: "180x180",
  },
  {
    rel: "icon",
    href: "/android-chrome-192x192-dark.png",
    sizes: "192x192",
  },
  {
    rel: "icon",
    href: "/android-chrome-512x512-dark.png",
    sizes: "512x512",
  },
  {
    rel: "apple-touch-icon",
    href: "/apple-touch-icon-dark.png",
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
