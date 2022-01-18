import React from 'react';
import "./SideDrawer.css";
import { Link } from 'react-router-dom';

const Sidedrawer = () => {

    const handleCloseNav = () => {
        let element = document.getElementById('NaviationSideDrawer');
        element.classList.remove('openNavbar');
    }

    return (
        <nav id='NaviationSideDrawer' className=''>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/speakers'>Speakers</Link></li>
                <li><Link to='/sponsors'>Sponsors</Link></li>
                <li><Link to='/archive'>Archive</Link></li>
                <li><Link to='/team'>Our Team</Link></li>
                <li><Link to='/terms-and-condition'>Terms and Condtions</Link></li>
                <li><a href="https://razorpay.com/" className="btn btn_primary show_720px">Grab a Ticket</a></li>
            </ul>
            <button onClick={handleCloseNav} className='close_btn'>
                <i className="fa fa-times"></i>
            </button>
        </nav>
    );
}

export default Sidedrawer;