import React, { MouseEventHandler, ReactNode, useState } from "react"

function Dropdown ({title, children, type, onClick}: {
  title: string | undefined,
  children?: ReactNode,
  type?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
}) {
  const [isOpen, setOpen] = useState<Boolean>(false);

  return <div className={`button ${type ?? ""}`}>
    { title && <button onClick={onClick}>{ title }</button> }
    <button onClick={() => { setOpen(!isOpen) }}>...</button>
    { isOpen && <ul className="dropdown">{ React.Children.toArray(children).map((x) => <li className="dropdown__item">{x}</li>) }</ul> }
  </div>
}

export default Dropdown;
