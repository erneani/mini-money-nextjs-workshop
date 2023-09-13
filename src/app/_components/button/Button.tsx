interface IButton {
  label: string
  onClick: () => void
}

export default function Button(props: IButton) {
  return (
    <button
      className="text-center font-bold bg-black text-white py-5 px-3 text-xl rounded-xl w-full"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
}
