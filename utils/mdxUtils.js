import fs from 'fs'
import path from 'path'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts')

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