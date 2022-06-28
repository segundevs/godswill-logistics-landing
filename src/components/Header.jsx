import React from "react";
import { CgCloseO, CgMenu } from 'react-icons/cg';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom'

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
                        <Link className="nav_item" to="/#home" onClick={menuToggler}>
                            Home
                        </Link>
                        <Link className="nav_item" to="/#services" onClick={menuToggler}>
                            Services
                        </Link>
                        <Link className="nav_item" to="/#faqs" onClick={menuToggler}>
                            FAQ
                        </Link>
                        <Link className="nav_item" to="/#contact" onClick={ menuToggler}>
                            Contact us
                        </Link>
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