import BigText from '@/app/_components/big-text/BigText'

async function performPaymentValidation() {
  const isValidationOk = true

  await new Promise((resolve) => setTimeout(resolve, 4000))
  return { isValidationOk }
}

export default async function ValidatePayment() {
  const { isValidationOk } = await performPaymentValidation()

  if (isValidationOk) return <BigText label="Pagamento efetuado!" />

  return <BigText label="Não foi possível efetuar o pagamento" />
}
