import React, { Fragment } from 'react';
import "./Team.css";

import bgi from "../../assets/images/tedx_landing_background_2.jpeg";

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Landing from '../../components/Landing/Landing';
import Sidedrawer from '../../components/SideDrawer/SideDrawer';

const Team = () => {
    return (
        <Fragment>
            <Header/>
            <Sidedrawer/>
            <Landing  heading="Our Team" bgi={bgi} />
            <Footer/>
        </Fragment>
    );
}

export default Team;