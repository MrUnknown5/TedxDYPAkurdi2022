import React from 'react';
import "./Landing.css";

const Landing = ({heading, bgi}) => {

    return (
        <article className="Landing" style={{backgroundImage: `url(${bgi})`}}>
            <div className="container">
                <div className="landing_heading">{heading}</div>
            </div>
        </article>
    );
}

export default Landing;