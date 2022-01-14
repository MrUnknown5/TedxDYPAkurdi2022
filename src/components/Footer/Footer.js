import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_upper_grid">
                    <Link to="/"><div className="footer_upper_grid_logo"></div></Link>
                    <div className="footer_upper_grid_button">
                        <a href="#Home_Landing"><i className="fa fa-arrow-up"></i></a>
                    </div>
                </div>
                <div className="footer_social_media">
                    <div><a href="https://www.instagram.com/tedxdypakurdi/"><i className="fa fa-instagram"></i></a></div>
                    <div><a href="https://www.linkedin.com/company/tedxdypakurdi/"><i className="fa fa-linkedin"></i></a></div>
                    <div><a href="https://www.facebook.com/tedxdypakurdi/"><i className="fa fa-facebook"></i></a></div>
                    <div><a href="https://www.youtube.com"><i className="fa fa-youtube-play"></i></a></div>
                </div>
                <div className="footer_info_grid">
                    <div className="footer_info_grid_contact_us">
                        <h1>CONTACT US</h1>
                        <ul>
                            <li><a href="mailto:tedxdypakurdi@gmail.com"><i className="fa fa-envelope-o"></i> tedxdypakurdi@gmail.com</a></li>
                            <li><a href="https://goo.gl/maps/dCTEdHY9svPqbSSx6"><i className="fa fa-map-marker"></i> D. Y. Patil Educational Complex, Sector 29, Nigidi Pradhikaran, Akurdi, Pune 411044.</a></li>
                            <li><a href="tel:+919960304336"><i className="fa fa-phone"></i> Abhishek Sharma (Organiser)</a></li>
                        </ul>
                    </div>
                    <div className="footer_info_grid_partenr_with_us">
                        <h1>PARTNER WITH US</h1>
                        <ul>
                            <li><a href="tel:+919960304336"><i className="fa fa-phone"></i>  Abhishek Sharma (Organiser)</a></li>
                            <li><a href="tel:+918849407882"><i className="fa fa-phone"></i> Poojan Naik (Co-Organiser)</a></li>
                            <li><a href="tel:+918446135153"><i className="fa fa-phone"></i> Anagha Nair (Club Advisor)</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_copyright">
                    <p>This independent TEDx event is operated under license from TED.</p>
                    <p>TEDxDYP Akurdi ©  2021-2022 . All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
