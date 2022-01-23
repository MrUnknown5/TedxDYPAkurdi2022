import React from 'react';
import  "./Archive.css";

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Landing from '../../components/Landing/Landing';
import Sidedrawer from '../../components/SideDrawer/SideDrawer';
import bgi from "../../assets/images/tedx_landing_background.jpeg";
import bgi1 from "../../assets/images/bgi1.jpg";
import { Fragment } from 'react/cjs/react.production.min';

const Archive = () => {
    return (
        <Fragment>
            <Header/>
            <Sidedrawer/>
            <Landing heading = "Transcending boundaries" bgi = {bgi} />
            <Landing heading = "Transcending boundaries" bgi = {bgi1} />

            <article className="Speakers">
                <div className="container">
                    <div className="speakers_grid">
                        <section>
                            <h3>Our Speakers</h3>
                        </section>
                        <div className="speakers_template_card">
                            <div className="speakers_template_card_info_box speakers_template_card_regular">
                                <div>
                                    <div className="speakers_template_card_info_box_speaker_name">Elon Musk</div>
                                    <div className="speakers_template_card_info_box_speaker_title">entrepreneur</div>
                                    <div className="speakers_template_card_info_box_speaker_summary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur magnam sit quis, quod alias doloremque impedit dolore at veritatis adipisci sint molestias fugiat! Facilis doloribus, deserunt inventore numquam saepe vel est repellendus earum fugiat excepturi autem alias! Excepturi quasi nihil in dolores saepe autem, culpa numquam nam magnam eius iusto labore voluptate perferendis aliquid quis, fugiat facere vitae. Animi libero sunt provident. Neque nihil doloribus et, quam eligendi ducimus iure ad culpa fugit, minima, accusamus quas ipsam beatae? Magni ea hic aperiam aliquid officia soluta impedit laborum perferendis eaque eos debitis sapiente maxime eum accusantium enim, totam unde placeat quas.</div>
                                </div>
                            </div>
                            <div className="speakers_template_card_image_box speakers_template_card_image_box_right">
                                <div className="speakers_template_card_image_box_circle"></div>
                                <div className="speakers_template_card_image_box_background_image speakers_template_card_image_box_background_image_1"></div>
                            </div>
                        </div>

                        <div className="speakers_template_card speakers_template_card_reverse">
                            <div className="speakers_template_card_info_box">
                                <div>
                                    <div className="speakers_template_card_info_box_speaker_name">Elon </div>
                                    <div className="speakers_template_card_info_box_speaker_title">entrepreneur</div>
                                    <div className="speakers_template_card_info_box_speaker_summary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur magnam sit quis, quod alias doloremque impedit dolore at veritatis adipisci sint molestias fugiat! Facilis doloribus, deserunt inventore numquam saepe vel est repellendus earum fugiat excepturi autem alias! Excepturi quasi nihil in dolores saepe autem, culpa numquam nam magnam eius iusto labore voluptate perferendis aliquid quis, fugiat facere vitae. Animi libero sunt provident. Neque nihil doloribus et, quam eligendi ducimus iure ad culpa fugit, minima, accusamus quas ipsam beatae? Magni ea hic aperiam aliquid officia soluta impedit laborum perferendis eaque eos debitis sapiente maxime eum accusantium enim, totam unde placeat quas.</div>
                                </div>
                            </div>
                            <div className="speakers_template_card_image_box speakers_template_card_image_box_left">
                                <div className="speakers_template_card_image_box_circle"></div>
                                <div className="speakers_template_card_image_box_background_image speakers_template_card_image_box_background_image_1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <article className="Speakers">
                <div className="container">
                    <div className="speakers_grid">
                        <section>
                            <h3>Our Team</h3>
                        </section>
                        <div className="speakers_template_card">
                            <div className="speakers_template_card_image_box speakers_template_card_image_box_right">
                                <div className="speakers_template_card_image_box_circle"></div>
                                <div className="speakers_template_card_image_box_background_image speakers_template_card_image_box_background_image_1"></div>
                            </div>
                            <div className="speakers_template_card_image_box speakers_template_card_image_box_right">
                                <div className="speakers_template_card_image_box_circle"></div>
                                <div className="speakers_template_card_image_box_background_image speakers_template_card_image_box_background_image_1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Footer/>          
        </Fragment>
    );
}

export default Archive;
