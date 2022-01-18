import React, { Fragment } from 'react';
import "./Speakers.css";

import bgi from "../../assets/images/tedx_landing_background_2.jpeg";

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Landing from '../../components/Landing/Landing';
import Sidedrawer from '../../components/SideDrawer/SideDrawer';

const Speakers = () => {
    return (
        <Fragment>
            <Header/>
            <Sidedrawer/>
            <Landing  heading="Our Speakers" bgi={bgi} />
            <Footer/>
        </Fragment>
    );
}

export default Speakers;