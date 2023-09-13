type dataT = {
  userId: number
  id: number
  title: string
  completed: boolean
}

async function getData() {
  const res: Response = await fetch(
    'https://jsonplaceholder.typicode.com/todos/1'
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data: dataT = await getData()

  return <main>{data.title}</main>
}
