import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts')

/**
 * 
 * @returns an array of filepaths to all MDX files e.g.
 * [ 
 *   '2012/playing-the-student-card.mdx',
 *   '2012/post-hoc-analysis-of-instawifis-launch.mdx',
 *   '2012/protip-bash-autocomplete-for-android-adb.mdx',
 *   '2012/protip-how-to-be-a-good-boss.mdx',
 *   '2013/personal-finance-for-young-professionals.mdx',
 *   '2013/year-2012-in-review.mdx'
 * ]
 */
export function getAllMDXPosts() {
  const yearDirectories = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => fs.lstatSync(POSTS_PATH + '/' + path).isDirectory());
  let mdxFiles = [];

  yearDirectories.forEach((yearDirectory) => {
    mdxFiles = mdxFiles.concat(fs
      .readdirSync(POSTS_PATH + '/' + yearDirectory)
      .filter((path) => /\.mdx?$/.test(path))
      .map((path) => yearDirectory + '/' + path)
    )
  })

 return mdxFiles
}

export function getAllMDXPostsWithMetadata(sorted = true, includeUnpublished = false) {
  const posts = getAllMDXPosts().map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    if (!data.isPublished && !includeUnpublished) {
      return {}
    }

    data.readingTime = require('reading-time')(content)

    return {
      content,
      data,
      filePath,
    }
  }).filter((post) => Object.keys(post).length !== 0)

  return sorted 
    ? posts.sort((postA, postB) => postA.data.date < postB.data.date ? 1 : -1)
    : posts
}