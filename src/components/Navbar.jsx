import React from 'react'
import BurgerLogo from '../assets/burgerlogo.png';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import "../styles/style.css";

function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    console.log(showMenu)



    return (
        <div className='navbar'>
            <div className="main">
                <img src={BurgerLogo} alt="" />
                <i onClick={() => setShowMenu(true)} className="fa-solid fa-bars"></i>
                <div className={showMenu ? "mainC" : "mainLink"}>
                    <i onClick={() => setShowMenu(false)} className="fa-regular fa-circle-xmark menuClose"></i>


                    <NavLink to="/" onClick={() => setShowMenu(false)}>Home</NavLink>
                    <NavLink to="/menu" onClick={() => setShowMenu(false)}>Menu</NavLink>
                    <NavLink to="/about" onClick={() => setShowMenu(false)}>About</NavLink>
                    <NavLink to="/contact" onClick={() => setShowMenu(false)}>Contact</NavLink>

                </div>
            </div >
        </div >
    )
}

export default Navbar