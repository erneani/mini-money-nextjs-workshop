'use client'

import BigText from '@/app/_components/big-text/BigText'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect } from 'react'

const SPACE_CODE = 'space'

export default function WaitForCard() {
  const router = useRouter()

  const cachedKeyDown = useCallback(
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code.toLowerCase() === SPACE_CODE) {
        router.push('insert-password')
      }
    },
    [router]
  )

  useEffect(() => {
    addEventListener('keydown', cachedKeyDown)

    return () => {
      removeEventListener('keydown', cachedKeyDown)
    }
  }, [cachedKeyDown])

  return (
    <BigText
      label="Aguardando o cartão..."
      aditionalText="Insira ou aproxime o cartão"
    />
  )
}
