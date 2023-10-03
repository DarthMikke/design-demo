import React, { MouseEventHandler, ReactNode, useState } from "react"

function Dropdown ({title, children, type, onClick}: {
  title: string | undefined,
  children?: ReactNode,
  type?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
}) {
  const [isOpen, setOpen] = useState<Boolean>(false);

  return <div className={`button dropdown ${type ?? ""}`}>
    { title && <button onClick={onClick}>{ title }</button> }
    <button onClick={() => { setOpen(!isOpen) } }>...
    { <ul className={`dropdown__list ${isOpen ? "open" : ""}`}>{ React.Children.toArray(children).map((x) => <li className="dropdown__item">{x}</li>) }</ul> }
    </button>
  </div>
}

export default Dropdown;
