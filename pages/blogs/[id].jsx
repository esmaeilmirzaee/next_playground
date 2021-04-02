import { useRouter } from 'next/router'
export default function Post() {
  const router = useRouter();
  let id = router.query.id;
  return (
    <>
      <h1>{id || 'Post'}</h1>
    </>
  )
}