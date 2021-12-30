import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";

function Header() {
  return (
    <header>
      <ul>
        <Link to="/"><li>FLIP CART</li></Link>
        <Link to="/cart"><li>cart</li></Link>
        <Link to="/SignUp"><li>login/signup</li></Link>
      </ul>
    </header>
  );
}

export default Header;
