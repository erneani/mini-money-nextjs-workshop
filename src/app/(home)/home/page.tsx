'use client'

import { useRouter } from 'next/navigation'
import Button from '../../_components/button/Button'

export default function Home() {
  const router = useRouter()

  function handleClick() {
    router.push('/select-payment-method')
  }

  return (
    <section>
      <Button label="Iniciar um pagamento" onClick={handleClick} />
    </section>
  )
}
