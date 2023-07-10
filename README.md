
Built with [Next.js](https://nextjs.org/), [Chakra](https://chakra-ui.com/), and [MDX](https://mdxjs.com/). Best frontend tech stack for yet-another-dev-website.

To build: `npm install`, `npm run dev`, and then go to http://localhost:3000/.

The website is pretty straightforward:

- `pages/` is where the various webpages are
- `posts/` is where my raw blog posts go (written in .mdx format)
- `components/` contains the various UI components seen across the site

## Dreamhost Scripts

The scripts to renew IG access token and fetch new media are hosted on Dreamhost.  To run the scripts locally:

1. ssh into your devserver
2. `cd cron_jobs/`
3. `source venv/bin/activate`
4. `python3 ./ig_fetch.py`

## IG API Integration

I hit the `/refresh_access_token` endpoint to renew my access token every month via the `ig_access_token.py` script.  The access token is stored as a secret environment variable on Vercel.  The access token also needs to be stored in the local environment variable file on Dreamhost for other scripts to use.

With a valid access token, a cron job runs daily at midnight to check for new IG posts.  The `ig_fetch.py` script fetches the last 9 photos from the `/{user_id}/media` endpoint and compares it to the 9 photos already uploaded to Cloudinary.  The script synchronizes the Cloudinary photos to mirror the last 9 photos on my IG profile.  

## Adding a new post

1. Export to markdown from Notion
2. Drop `.md` file into `posts/2022/title-here.mdx`
3. Drop images into `public/images/posts/2022/image-file.png`. Image markdown needs to be `![caption](/images/posts/2022/something-here.png)`
4. Add metadata to the top of file. Example:
```md
---
title: "The Most Overkill Instagram Photo Grid Ever"
description: "This is a a story of over-engineering at its finest — I just built the most overkill Instagram photo grid for fun."
date: "2022-02-27"
isPublished: true
tags:
  - web perf
coverImage: "/images/posts/2022/overkill-badge.png"
---
```
5. Save and reload localhost to preview
6. Push to deploy!
