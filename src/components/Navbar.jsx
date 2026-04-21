import React, { useState } from 'react';
import github from "../assets/github.png";
import "../css/navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='navbar'>
            <a href='https://github.com/HeheAnanya' className='gh'>
                <img src={github} alt="GitHub Logo" />
            </a>

            <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <a href='https://github.com/HeheAnanya'>
                    <img src={github} alt="GitHub Logo" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;