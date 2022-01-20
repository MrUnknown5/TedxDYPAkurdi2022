import React, { Fragment } from 'react';
import "./Speakers.css";

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Landing from '../../components/Landing/Landing';
import Sidedrawer from '../../components/SideDrawer/SideDrawer';

import bgi from "../../assets/images/tedx_landing_background_2.jpeg";
import imageAddress1 from "../../assets/speakers/elon_musk.png";
import imageAddress2 from "../../assets/speakers/elon_musk.png";
import imageAddress3 from "../../assets/speakers/elon_musk.png";
import imageAddress4 from "../../assets/speakers/elon_musk.png";
import imageAddress5 from "../../assets/speakers/elon_musk.png";

const speakersDB = [
    {
        id: 0,
        name: 'Speaker1',
        image: imageAddress1,
        topic: 'Topic of the talk 1',
        about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ea veritatis, obcaecati ullam dolore corrupti eveniet dolores quisquam nostrum cupiditate",
        synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus at exercitationem aut quia! Distinctio, laboriosam corporis culpa vel accusamus commodi possimus officia error necessitatibus explicabo harum'
    },
    {
        id: 1,
        name: 'Speaker2',
        image: imageAddress2,
        topic: 'Topic of the talk 2',
        about: "Labore nesciunt modi placeat consequatur praesentium magni sunt pariatur. Libero, dolore consectetur labore voluptatem cupiditate corrupti minima itaque dicta deleniti.",
        synopsis: 'Obcaecati minima? Veniam doloribus impedit eligendi maiores quisquam qui ut, reprehenderit repellat nulla sapiente, necessitatibus corrupti dolore soluta? Fugiat, doloribus. Optio repellat tenetur qui provident'
    },
    {
        id: 2,
        name: 'Speaker3',
        image: imageAddress3,
        topic: 'Topic of the talk 3',
        about: "Deserunt facilis, assumenda voluptates consequuntur architecto quisquam expedita quasi ad nobis officia recusandae asperiores? Inventore provident ipsum distinctio, iste amet.",
        synopsis: 'Facilis reiciendis expedita consectetur exercitationem. Vel aliquid culpa quo consequatur voluptatem velit modi veniam quas doloremque distinctio tenetur voluptatibus similique aperiam quam ab id laboriosam.'
    },
    {
        id: 3,
        name: 'Speaker4',
        image: imageAddress4,
        topic: 'Topic of the talk 4',
        about: "Obcaecati dolorum culpa magni cumque laborum est sapiente commodi! Enim dolorem beatae ut quia est explicabo, totam sed commodi similique",
        synopsis: 'Ipsum recusandae inventore. Exercitationem, quidem. Autem provident quia voluptates nemo. Nobis facilis quis a eligendi perferendis magnam tempora aperiam, corrupti placeat possimus accusamus, error nisi'
    },
    {
        id: 4,
        name: 'Speaker5',
        image: imageAddress5,
        topic: 'Topic of the talk 5',
        about: "Aliquam maxime. Dignissimos, placeat, magnam veritatis voluptate nostrum debitis molestiae in aperiam qui quia reiciendis doloremque eum sunt animi quas.",
        synopsis: 'Ab inventore quibusdam similique officia dolorum neque! Hic obcaecati, error quos id fugit soluta porro enim aliquid. Blanditiis et quasi ad illum exercitationem esse voluptates.'
    }
];

const Speakers = () => {

    return (
        <Fragment>
            <Header/>
            <Sidedrawer/>
            <Landing  heading="Our Speakers" bgi={bgi} />
            <article className="Speakers">
                <div className="container">
                    <div className="speakers_grid">
                        <div className="speakers_tempalte_card">
                            <div className="speakers_tempalte_card_info_box">
                                <div>
                                    <div className="speakers_tempalte_card_info_box_speaker_name">Elon Musk</div>
                                    <div className="speakers_tempalte_card_info_box_speaker_title">entrepreneur</div>
                                    <div className="speakers_tempalte_card_info_box_speaker_summary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur magnam sit quis, quod alias doloremque impedit dolore at veritatis adipisci sint molestias fugiat! Facilis doloribus, deserunt inventore numquam saepe vel est repellendus earum fugiat excepturi autem alias! Excepturi quasi nihil in dolores saepe autem, culpa numquam nam magnam eius iusto labore voluptate perferendis aliquid quis, fugiat facere vitae. Animi libero sunt provident. Neque nihil doloribus et, quam eligendi ducimus iure ad culpa fugit, minima, accusamus quas ipsam beatae? Magni ea hic aperiam aliquid officia soluta impedit laborum perferendis eaque eos debitis sapiente maxime eum accusantium enim, totam unde placeat quas.</div>
                                </div>
                            </div>
                            <div className="speakers_tempalte_card_image_box">
                                <div className="speakers_tempalte_card_image_box_circle"></div>
                                <div className="speakers_tempalte_card_image_box_background_image speakers_tempalte_card_image_box_background_image_1"></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </article>
            <Footer/>
        </Fragment>
    );
}

export default Speakers;

// no-lone-blocks
{/* <div className="speaker_card_template">
    <div className="speaker_card_template_info">
        <div>
            <h1>Name of the Speaker</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reiciendis consequatur dolores tempore aliquid sequi. Temporibus quos ea suscipit labore. Omnis repellendus esse velit sequi necessitatibus quasi facilis ut nihil!</p>
        </div>
    </div>
    <figure>
        <img src={speaker1} alt=""/>
    </figure>
</div> */}