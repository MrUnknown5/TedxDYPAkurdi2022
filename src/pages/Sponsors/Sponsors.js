import React, { Fragment } from 'react';

import bgi from "../../assets/images/tedx_landing_background_2.jpeg";

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Landing from '../../components/Landing/Landing';
import Sidedrawer from '../../components/SideDrawer/SideDrawer';

const Sponsors = () => {
    return (
        <Fragment>
            <Header/>
            <Sidedrawer/>
            <Landing heading="Our Sponsors" bgi={bgi}/>
            <article className="Sponsors">
                <div className="container">
                    <div className="sponsors_grid">
                        <div className="sponsors_grid_template_card">

                        </div>
                    </div>
                </div>
            </article>
            <Footer/>
        </Fragment>
    );
}

export default Sponsors;
