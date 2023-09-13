'use client'

import BigText from '@/app/_components/big-text/BigText'
import Button from '@/app/_components/button/Button'
import { IError } from '@/app/_models/error.type'

export default function Error(props: IError) {
  return (
    <section className="flex flex-col gap-y-5">
      <BigText
        label="Opa, parece que algo deu errado."
        aditionalText="Estamos tentando identificar o que ocorreu. Nesse meio tempo, que tal tomar um cafézinho?"
      />
      <Button label="Tentar novamente" onClick={props.reset} />
    </section>
  )
}
