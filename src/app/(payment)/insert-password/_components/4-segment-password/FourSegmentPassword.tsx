export default function FourSegmentPassword(props: IPasswordSegment) {
  return (
    <section className="flex flex-row justify-between mx-5">
      {props.password.split('').map((digit, index) => (
        <div
          className={`w-10 h-10 border-2 rounded-sm bg-${
            digit === '.' ? 'white' : 'black'
          } border-black`}
          key={index}
        ></div>
      ))}
    </section>
  )
}
