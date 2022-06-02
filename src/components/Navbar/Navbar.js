import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

 
const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false)


    return(
        <div>
            <nav className="navbar">
                <h3 className="logo">ELUX</h3>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick= {() => setIsMobile(false)}>
                    <Link to="/" className="home">
                        <li>HOME</li>
                    </Link>
                    <Link to="/about" className="about">
                        <li>ABOUT</li>
                    </Link>
                    <Link to="/contact" className="contact">
                        <li>CONTACT</li>
                    </Link>
                    <Link to="/signup" className="signup">
                        <li>SIGN-UP</li>
                    </Link>
                </ul>
                <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? (<i className="fa fa-times icon"></i>) : (<i className="fa fa-bars icon"></i>)}
                </button>
            </nav>
        </div>
        )
}

export default Navbar