import { useRouter } from 'next/router'

export default function Posts() {
  let router = useRouter();
  let slug = router.query.slug;
  return (
    <>
      <h1>{slug || 'Posts'}</h1>
    </>
  )
}