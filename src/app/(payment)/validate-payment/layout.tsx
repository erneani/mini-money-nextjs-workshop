import { ILayout } from '@/app/_models/layout.type'
import { Suspense } from 'react'
import Loading from './loading'

export default function ValidatePaymentLayout(props: ILayout) {
  return (
    <div>
      <Suspense fallback={<Loading />}>{props.children}</Suspense>
    </div>
  )
}
