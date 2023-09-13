interface IHeader {
  owner: string
  currentPage: string
  batteryPercentage: number
}

function Header(props: IHeader) {
  return (
    <header className="flex flex-row justify-between">
      <h2 className="w-1/3">{props.owner}</h2>
      <nav className="w-1/3 text-center font-bold">{props.currentPage}</nav>
      <h5 className="w-1/3 text-right">{props.batteryPercentage}%</h5>
    </header>
  )
}

export default Header
