'use client'

import { useCallback, useEffect, useState } from 'react'
import FourSegmentPassword from './_components/4-segment-password'
import SixSegmentPassword from './_components/6-segment-password'
import { useRouter } from 'next/navigation'

const BACKSPACE_CODE = 'Backspace'
const DIGIT_PREPEND = 'Digit'
const SPACE_CODE = 'Space'
const DEFAULT_DIGIT = '.'
const CORRECT_PASSWORD = '1445'

export default function InsertPassword() {
  const [password, setPassword] = useState('....')
  const [cursorPos, setCursorPos] = useState(0)
  const router = useRouter()

  const isFourSegmentPassword = true
  const maxLength = isFourSegmentPassword ? 4 : 6

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      console.log(event)
      let currentPassword = password.split('')

      if (event.code === SPACE_CODE && password === CORRECT_PASSWORD) {
        router.push('validate-payment')
      }

      if (event.code === BACKSPACE_CODE && password.length > 0) {
        currentPassword[cursorPos - 1] = DEFAULT_DIGIT

        setPassword(currentPassword.join(''))
        setCursorPos(cursorPos - 1)
      }

      if (cursorPos >= maxLength) return
      if (!event.code.startsWith(DIGIT_PREPEND)) return

      currentPassword[cursorPos] = event.key

      setPassword(currentPassword.join(''))
      setCursorPos(cursorPos + 1)
    }

    addEventListener('keydown', handleKeyDown)
    return () => removeEventListener('keydown', handleKeyDown)
  })

  return (
    <section>
      {isFourSegmentPassword ? (
        <FourSegmentPassword password={password} />
      ) : (
        <SixSegmentPassword password={password} />
      )}
    </section>
  )
}
