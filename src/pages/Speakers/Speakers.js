import React, { Fragment } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Speakers.css";

import speaker1 from "../../assets/speakers/elon_musk.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
            <article class="Speakers">
                <div class="container">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div className="speaker_card_template">
                                <div className="speaker_card_template_info">
                                    <div>
                                        <h1>Name of the Speaker</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reiciendis consequatur dolores tempore aliquid sequi. Temporibus quos ea suscipit labore. Omnis repellendus esse velit sequi necessitatibus quasi facilis ut nihil!</p>
                                    </div>
                                </div>
                                <figure>
                                    <img src={speaker1} alt=""/>
                                </figure>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                    ...
                    </Swiper>
                </div>
            </article>
            <Footer/>
        </Fragment>
    );
}

export default Speakers;