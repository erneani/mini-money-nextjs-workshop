'use client'

import { useRouter } from 'next/navigation'
import BigText from './_components/big-text/BigText'

export default function Root() {
  const router = useRouter()

  router.push('home')

  return <BigText label="Carregando..." />
}
