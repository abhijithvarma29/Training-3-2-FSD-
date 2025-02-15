import React from 'react'
import Logo from './Logo'
import Menulinks from './Menulinks'
import Styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div>
      <section id={Styles.navBlock}>
        <article>
          <Logo/>
          <Menulinks/>
        </article>
      </section>
    </div>
  )
}

export default Navbar