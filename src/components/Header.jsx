import React from "react";
import { CgCloseO, CgMenu } from 'react-icons/cg';
import logo from '../assets/logo.jpg';

const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const menuToggler = () => setMenuOpen((prev) => !prev);

    return (
        <div className="header">
            <div className="header_content">
                <div>
                    <div className="logo"> 
                    <img src={logo} alt="brand-logo"/>
                    <div>
                        <span>wills royalty</span>
                        <span>logistics</span>
                    </div>
                    </div>
                </div>
                <div>
                    <nav className={menuOpen ? 'nav-open nav' : 'nav'}>
                        <a className="nav_item" href="#home" onClick={menuToggler}>
                            Home
                        </a>
                        <a className="nav_item" href="#services" onClick={menuToggler}>
                            Services
                        </a>
                        <a className="nav_item" href="#faqs" onClick={menuToggler}>
                            FAQ
                        </a>
                        <a className="nav_item" href="#contact" onClick={ menuToggler}>
                            Contact us
                        </a>
                    </nav>
                </div>
                <div>
                    <button className="header_toggler" onClick={menuToggler}>
                        {!menuOpen ? <CgMenu /> : <CgCloseO />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;