import React from 'react';
import './Gallary.css';
import glr1 from '../../../images/pic-9.png';
import glr2 from '../../../images/pic-10.png';
import glr3 from '../../../images/pic-11.png';
const Gallary = () => {
    return (
        <div>
        <section id="gallery_part">
            <div className="box-container ">
                <div className="box">
                    <img src={glr1} alt="gallery_image" />
                </div>
                <div className="box">
                    <img src={glr2} alt="gallery_image" />
                </div>
                <div className="box">
                    <img src={glr3} alt="gallery_image" />
                </div>
            </div>
            <hr />
        </section>
        </div>
      

    );
};

export default Gallary;