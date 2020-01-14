import React, { useState, useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

const ColorToggle = () => {
  const [isChecked, setIsChecked] = useState(localStorage.getItem('theme') === 'dark')
  const { setTheme } = useContext(AppContext)

  const toggle = e => {
    e.target.checked ? setTheme('dark') : setTheme('light')
    setIsChecked(e.target.checked)
  }
  return (
    <div className="color-toggle" aria-label="Toggle theme">
      <label className="switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={e => toggle(e)} checked={isChecked} />
        <div className="slider"></div>
        <div className="night"></div>
      </label>
    </div>
  )
}

export default ColorToggle
