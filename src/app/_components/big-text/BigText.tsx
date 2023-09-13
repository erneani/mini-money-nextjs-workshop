interface IBigText {
  label: string
  aditionalText?: string
}

function BigText(props: IBigText) {
  return (
    <div>
      <h2 className="text-xl font-bold text-center">{props.label}</h2>
      {props.aditionalText && (
        <p className="text-center mt-5 opacity-75">{props.aditionalText}</p>
      )}
    </div>
  )
}

export default BigText
