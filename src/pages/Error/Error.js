import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

import "./Error.css";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidedrawer from '../../components/SideDrawer/SideDrawer';

const Error = () => {
    return (
        <Fragment>
            <Header/>
            <Sidedrawer/>
            <article className="Error_Landing">
                <div>
                    <div className="error_image"></div>
                    <div className="error_link">
                        <Link to='/'> <i className='fa fa-chevron-right'></i> Back to Home</Link>
                    </div>
                </div>
            </article>
            <Footer/>
        </Fragment>
    );
}

export default Error;