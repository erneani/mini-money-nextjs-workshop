export default function SixSegmentPassword(props: IPasswordSegment) {
  const endPassword = props.password.slice(0, 6)

  return (
    <section className="flex flex-row justify-between px-10">
      {endPassword.split('').map((digit, index) => (
        <div
          key={index}
          className={`w-6 h-6 bg-${
            digit === '.' ? 'white' : 'black'
          } border-2 border-black rounded-full`}
        ></div>
      ))}
    </section>
  )
}
