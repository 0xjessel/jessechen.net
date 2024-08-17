export default function cloudinaryLoader({ src, width, quality, dpr }) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`, `dpr_${dpr || 1}`]
  return `https://res.cloudinary.com/jessel/${params.join(',')}/${src}`
}