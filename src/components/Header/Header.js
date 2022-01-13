import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {

    const handleOpenNav = () => {
        let element = document.getElementById('NaviationSideDrawer');
        element.classList.add('openNavbar');
    }
    
    const [headerBackground, setHeaderBackground] = useState(false);
    const handleHeaderBackground = () => {
        if(window.scrollY >= 100)
            setHeaderBackground(true); 
        else
            setHeaderBackground(false); 
    }
    window.addEventListener('scroll', handleHeaderBackground);

    return (
        <header className={headerBackground?'scrollingOn':' '}>
            <div className="container">
                <div className="header_grid">
                    <Link to="/">
                        <div className="header_logo"></div>
                    </Link>
                    <div className='header_buttons'>
                        <button className="btn btn_primary hide-720px">Grab a Ticket</button>
                        <button onClick={handleOpenNav} id='menu_icon' className='menu_icon'>
                            <i className="fa fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;