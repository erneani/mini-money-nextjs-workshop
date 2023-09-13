import { Suspense } from 'react'

async function getUser() {
  const res: Response = await fetch(
    'https://jsonplaceholder.typicode.com/users/1'
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return res.json()
}

async function getPostByUserId(userId: number) {
  const res: Response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  await new Promise((resolve) => setTimeout(resolve, 3000))

  return res.json()
}

async function Post({ userId }: { userId: number }) {
  const posts = await getPostByUserId(userId)

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

export default async function Page() {
  const user = await getUser()

  return (
    <>
      {user.name}/{user.email}
      <Suspense fallback={<div>Loading...</div>}>
        <Post userId={user.id} />
      </Suspense>
    </>
  )
}
