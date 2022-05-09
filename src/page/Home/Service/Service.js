import React from 'react';
import './Service.css';
import pro1 from '../../../images/L1.png';
import pro2 from '../../../images/L2.png';
import pro3 from '../../../images/L3.png';
import logoimg1 from '../../../images/flogo3.png';
import logoimg2 from '../../../images/flogo2.png';
import logoimg3 from '../../../images/flogo4.png';
import logoimg4 from '../../../images/flogo1.png';



const Service = () => {
    return (
        <div>
            <div id="testimonials">
                <h2>What we
                    <br /> offer for you</h2>
                <div className="containere">
                    <div className="items">
                        <img src={pro1} alt="" />
                        <h3>EVENT  MANAGEMENT</h3>
                        <p>The services we provide will go beyond your expectations. Our business is bespoke event planning each client is unique to us as is each event.</p>
                    </div>
                    <div className="items">
                        <img src={pro2} alt="" />
                        <h3>Graphic Design</h3>
                        <p>Chaap Communications is a friendly Organization that provides lots of idea in Graphic Design, Printing.</p>
                    </div>
                    <div className="items">
                        <img src={pro3} alt="" />
                        <h3>PUBLIC SERVICE</h3>
                        <p>Our team professionals comprise industries veterans with combined experience in the field of public relations and communications.</p>
                    </div>
                </div>

                <h2>Makes The Difference</h2>
            </div>
            <div className="containere">
                    <div className="item">
                        <img src={logoimg1} alt="" />
                        <h3>We Listen</h3>
                       
                    </div>
                    <div className="item">
                    <img src={logoimg2} alt="" />
                        <h3>Creative Ideas</h3>
                       
                    </div>
                    <div className="item">
                    <img src={logoimg3} alt="" />
                        <h3>Experience</h3>
                       
                    </div>
                    <div className="item">
                    <img src={logoimg4} alt="" />
                        <h3>Great Support</h3>
                        
                    </div>
                </div>
        </div>

    );
};

export default Service;