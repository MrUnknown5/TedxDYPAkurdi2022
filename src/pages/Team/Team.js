import React, { Fragment } from 'react';
import "./Team.css";

import bgi from "../../assets/images/tedx_landing_background_2.jpeg";

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Landing from '../../components/Landing/Landing';
import Sidedrawer from '../../components/SideDrawer/SideDrawer';

import teamMemberDummy from "../../assets/team/team_member_dummy.png";

const Team = () => {
    return (
        <Fragment>
            <Header/>
            <Sidedrawer/>
            <Landing  heading="Our Team" bgi={bgi} />
            <article className="Team">
                <div className="container">
                    <section>
                        <div className="section_heading">Organising Committee</div>
                        <div className="team_flex">

                            <div className="team_card_template">
                                <div className="team_card_template_upper">
                                    <figure className="member_image">
                                        <img src={teamMemberDummy} alt=""/>
                                    </figure>
                                    <p className="member_name">Selmon Can</p>
                                    <p className="member_position">( Organiser )</p>
                                </div>
                                <div className="team_card_template_lower">
                                    <div className="qr_code"></div>
                                    <div className="member_social_media">
                                        <div><a href='#'><i className="fa fa-envelope-o"></i></a></div>
                                        <div><a href='#'><i className="fa fa-instagram"></i></a></div>
                                        <div><a href='#'><i className="fa fa-linkedin"></i></a></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section>
                        <div className="section_heading">Curation Team</div>
                        <div className="team_flex">
                            <div className="team_card_template"></div>
                        </div>
                    </section>
                    <section>
                        <div className="section_heading">Social Media and Marketing Team</div>
                        <div className="team_flex">
                            <div className="team_card_template"></div>
                        </div>
                    </section>
                    <section>
                        <div className="section_heading">Design and Production Team</div>
                        <div className="team_flex">
                            <div className="team_card_template"></div>
                        </div>
                    </section>
                    <section>
                        <div className="section_heading">Sponsorship and Budgeting Team</div>
                        <div className="team_flex">
                            <div className="team_card_template"></div>
                        </div>
                    </section>
                    <section>
                        <div className="section_heading">Event Management Team</div>
                        <div className="team_flex">
                            <div className="team_card_template"></div>
                        </div>
                    </section>
                    <section>
                        <div className="section_heading">Website and Technical Operations</div>
                        <div className="team_flex">
                            <div className="team_card_template"></div>
                        </div>
                    </section>
                </div>
            </article>
            <Footer/>
        </Fragment>
    );
}

export default Team;