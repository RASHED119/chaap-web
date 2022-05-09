import React from 'react';
import './Services.css';
import mil from '../../../images/maillogo.png';
import { Link } from 'react-router-dom';

const Services = () => {
    return (

        <section id="contact_part">

            <div className="container px-xl-0">
                <div className="row">
                    <div className="col-xl-4 m-auto text-center common_header">
                        <h2>Let's Talk</h2>
                    </div>
                </div>
            </div>

            <div className="container px-xl-0">
                <div className="row">
                    <div className="col-xl-12 m-auto text-center">
                        <div className="contact_area">
                            <div className="row">
                                <div className="col-xl-4 m-auto text-center">
                                    <div className="contact_img">
                                        <img src={mil} alt="" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-3 m-auto text-center">
                                     <Link to="/#" className="area"> Contact&nbsp;now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default Services;