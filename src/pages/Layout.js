import React from 'react'
import { useSpring, animated } from 'react-spring'
import Header from '../components/Header'
import UtilityRow from '../components/UtilityRow'

const Layout = ({ children }) => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })
  return (
    <animated.div style={fade}>
      <UtilityRow></UtilityRow>
      <Header />
      <main>{children}</main>
    </animated.div>
  )
}

export default Layout
