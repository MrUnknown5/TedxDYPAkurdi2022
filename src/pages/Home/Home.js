import React, {useState} from 'react';

import "./Home.css";
import Header from "../../components/Header/Header";
import Sidedrawer from '../../components/SideDrawer/SideDrawer';
import Footer from "../../components/Footer/Footer";
import imageAddress1 from "../../assets/speakers/elon_musk.png";
import imageAddress2 from "../../assets/speakers/elon_musk.png";
import imageAddress3 from "../../assets/speakers/elon_musk.png";
import imageAddress4 from "../../assets/speakers/elon_musk.png";
import imageAddress5 from "../../assets/speakers/elon_musk.png";


const speakersDB = [
    {
        id: 1,
        name: 'Speaker1',
        image: imageAddress1,
        topic: 'Topic of the talk 1',
        synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus at exercitationem aut quia! Distinctio, laboriosam corporis culpa vel accusamus commodi possimus officia error necessitatibus explicabo harum'
    },
    {
        id: 2,
        name: 'Speaker2',
        image: imageAddress2,
        topic: 'Topic of the talk 2',
        synopsis: 'Obcaecati minima? Veniam doloribus impedit eligendi maiores quisquam qui ut, reprehenderit repellat nulla sapiente, necessitatibus corrupti dolore soluta? Fugiat, doloribus. Optio repellat tenetur qui provident'
    },
    {
        id: 3,
        name: 'Speaker3',
        image: imageAddress3,
        topic: 'Topic of the talk 3',
        synopsis: 'Facilis reiciendis expedita consectetur exercitationem. Vel aliquid culpa quo consequatur voluptatem velit modi veniam quas doloremque distinctio tenetur voluptatibus similique aperiam quam ab id laboriosam.'
    },
    {
        id: 4,
        name: 'Speaker4',
        image: imageAddress4,
        topic: 'Topic of the talk 4',
        synopsis: 'Ipsum recusandae inventore. Exercitationem, quidem. Autem provident quia voluptates nemo. Nobis facilis quis a eligendi perferendis magnam tempora aperiam, corrupti placeat possimus accusamus, error nisi'
    },
    {
        id: 5,
        name: 'Speaker5',
        image: imageAddress5,
        topic: 'Topic of the talk 5',
        synopsis: 'Ab inventore quibusdam similique officia dolorum neque! Hic obcaecati, error quos id fugit soluta porro enim aliquid. Blanditiis et quasi ad illum exercitationem esse voluptates.'
    }
];

const Home = () => {

    const [count, setCount] = useState(0);
        
    const handleCount = (direction) => {
        if(direction) {
            if(count==4)
                setCount(0);
            else
                setCount(count+1);
        }
        else {
            if(count==0)
                setCount(4);
            else
                setCount(count-1);
        }
    }

    return (
        <React.Fragment>
            
            <Header></Header>
            <Sidedrawer></Sidedrawer>

            <article id="Home_Landing" className="Home_Landing">
                <div className="landing_background"></div>
                <div className="landing_container">
                    <div className='landing_container_image'></div>
                    <div className='landing_container_info'>
                        <h1>Univocal</h1>
                        <p>Event Coming Soon...</p>
                    </div>
                </div>
            </article>

            <article className="Home_Speaker">
                <div className="container">
                    <div className="speakers_grid">
                        <div className="speakers_grid_info">
                            <h1>OUR SPEAKERS</h1>
                        </div>
                        <div className="speakers_grid_image" style={
                            { 
                                backgroundImage: `url(${speakersDB[count].image})`
                            }
                        }></div>
                        <div className="speakers_grid_info">
                            <h3>{speakersDB[count].topic}</h3>
                            <sub>By -  {speakersDB[count].name}</sub>
                            <p>{speakersDB[count].synopsis}</p>
                        </div>
                    </div>
                    <div className="speakers_carousel_button speakers_carousel_button_left">
                        <button onClick={() => handleCount(false)}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                    </div>
                    <div className="speakers_carousel_button speakers_carousel_button_right">
                        <button onClick={() => handleCount(true)}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </div>
                </div>
            </article>
            
            {/* <article className="Home_Speaker">
                <div className="container">
                    <div className="speakers_grid">
                        <div className="speakers_grid_info">
                            <h1>OUR SPEAKERS</h1>
                        </div>
                        <div className="speakers_grid_image" style={
                            { 
                                backgroundImage: `url(${imageAddress})`
                            }
                        }></div>
                        <div className="speakers_grid_info">
                            <h3>Topic of the talk</h3>
                            <sub>By -  Speakers Name</sub>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta quibusdam a dolorem architecto incidunt cum suscipit voluptatem explicabo illo.</p>
                        </div>
                    </div>
                    <div className="speakers_carousel_button speakers_carousel_button_left"><button><i className="fa fa-arrow-left" aria-hidden="true"></i></button></div>
                    <div className="speakers_carousel_button speakers_carousel_button_right"><button><i className="fa fa-arrow-right" aria-hidden="true"></i></button></div>
                </div>
            </article> */}

            <article className="Home_Banner">
                <div className="container">
                    <div className="banner_grid">
                        <div className="banner_grid_quote">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, eaque?</div>
                        <div className="banner_grid_image"></div>
                    </div>
                </div>
            </article>

            <article className="Home_About">
                <div className="container">
                    <section>
                        <h3>ABOUT TED</h3>
                        <p>TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks (18 minutes or less). TED is a global community, welcoming people from every discipline and culture who seek a deeper understanding of the world. We believe passionately in the power of ideas to change attitudes, lives and, ultimately, the world.</p>
                        <div className="about_image about_image_about_ted"></div>
                    </section>
                    <section>
                        <h3>ABOUT TEDx</h3>
                        <p>In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxDYPAkurdi, where x = independently organized TED event. At our TEDxDYPAkurdi event, TEDTalks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.</p>
                        <div className="about_image about_image_about_tedx"></div>
                    </section>
                    <section>
                        <h3>UNIVOCAL</h3>
                        <p>The contrariety that lurks around our mind with flamboyant wings can only be nullified by a univocal approach. In a world full of ambiguous connotations, the incongruous battle between our rationale versus our sensation makes it difficult to focus on a specific conclusion. A definitive language thus gradually becomes the need of the hour. To chase away the dichotomy of the universe, we opt for an unambiguous philosophy that leads our way. Our dubious proposition relies on the univocality of our action for a befitting aftermath. For creating a world of unquestionable opportunity, we have to adhere to a particular belief system. A particular set of etiquettes is a prerequisite for reaching a discrete objective. In the arena owned by the implicit territory, only the explicit can prevail through its unrestrained force and rule like a sovereign.</p>
                        <div className="about_image about_image_univocal"></div>
                    </section>
                </div>
            </article>

            <article className="Home_Sponsors">
                <div className="container">
                    <h1>OUR SPONSORS</h1>
                    <div className="sponsors_grid autoplay">
                        <div className="sponsors_grid_each sponsors_grid_1 font_facebook">facebook</div>
                        <div className="sponsors_grid_each sponsors_grid_2 font_google">Google</div>
                        <div className="sponsors_grid_each sponsors_grid_3 font_tesla">Tesla</div>
                        <div className="sponsors_grid_each sponsors_grid_4 font_microsoft">Microsoft</div>
                        <div className="sponsors_grid_each sponsors_grid_5 font_amazon">Amazon</div>
                    </div>
                </div>
            </article>

            <article className="Home_Venue">
                <div className="container">
                    <div className="venue_grid">
                        <div className="venue_grid_info">
                            <h1>VENUE</h1>
                            <p>D. Y. Patil Educational Complex, Sector 29, Nigidi Pradhikaran, Akurdi, Pune 411044.</p>
                            <div className="button_container"><button className="btn btn_primary">LOCATE</button></div>
                        </div>
                        <div className="venue_grid_map_embedded">
                            <iframe title="google maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15121.631403099624!2d73.7512569!3d18.6456854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9ef588fffff%3A0xed7869959e7d6300!2sDr.%20D.Y.%20Patil%20Institute%20of%20Engineering%2C%20Management%20and%20Research!5e0!3m2!1sen!2sin!4v1641211077076!5m2!1sen!2sin" allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </article>

            <article className="Home_Connect_With_Us">
                <div className="container">

                </div>
            </article>

            <Footer></Footer>

        </React.Fragment>
    );
}

export default Home;