'use client'

import Button from '@/app/_components/button/Button'
import { useRouter } from 'next/navigation'
import { PaymentMethods } from './constants'

export default function SelectMethod() {
  const router = useRouter()

  function handleClick(method: PaymentMethods) {
    switch (method) {
      case PaymentMethods.DEBIT:
        return router.push('wait-for-card')
      case PaymentMethods.CREDIT:
        throw new Error('BOOOOOOOOOOM')
    }
  }

  return (
    <section className="flex flex-col gap-y-5">
      <Button
        label="Cartão de débito"
        onClick={() => handleClick(PaymentMethods.DEBIT)}
      />
      <Button
        label="Cartão de crédito"
        onClick={() => handleClick(PaymentMethods.CREDIT)}
      />
    </section>
  )
}
