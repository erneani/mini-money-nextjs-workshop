import { Suspense } from 'react'

async function getUser(userId: number) {
  const res: Response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return res.json()
}

async function getUserTodos(userId: number) {
  const res: Response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/todos`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  await new Promise((resolve) => setTimeout(resolve, 3000))

  return res.json()
}

async function Todos({ todos }: { todos: any }) {
  const lessTodos = todos.slice(0, 4)

  return (
    <ul>
      {lessTodos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

async function UserLookup({ userId }: { userId: number }) {
  const userData = await getUser(userId)
  const todosData = await getUserTodos(userId)

  const [user, todos] = await Promise.all([userData, todosData])

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {user.name}/{user.email}
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Todos todos={todos} />
      </Suspense>
    </>
  )
}

export default async function Page() {
  const userId = 1

  return (
    <>
      <h1>Looking the todos for the user {userId}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UserLookup userId={userId} />
      </Suspense>
    </>
  )
}
