import React from 'react';
import './Testimonia.css';
import test1 from '../../../images/chap1.jpg';
import test2 from '../../../images/chap2.jpg';

const Testimonia = () => {
    return (
        
             <section id="about_part">
        <div class="container px-xl-0">
            <div class="row">
                <div class="col-xl-4 m-auto text-center common_header">
                    <h2>Printing  &#38; Design</h2>
                </div>
            </div>
        </div>
        <div class="container px-xl-0">
            <div class="row">
                <div class="about_area">
                    <div class="col-xl-8 m-auto text-center">
                        <p>“Chaap Communications” is a friendly Institution that provide lots of idea in Graphic
                            Designing,
                            Printing. We help our clients to promote their business. We believe in client satisfaction
                            and
                            quality. We provide best quality works for our clients’ marketing communications needs. We
                            help
                            our clients to be successful.</p>
                    </div>
                    <div class="col-xl-4 m-auto text-center">
                       <img src={test2} alt="" /> 
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="about_area">
                    <div class="col-xl-4 m-auto text-center ">
                    <img src={test1} alt="" /> 
                    </div>
                    <div class="col-xl-8 m-auto text-center">
                        <p> We believe in creating value for our customers who are looking for the highest quality of
                            printing
                            in Bangladesh. Our strong reputation is built on the successful delivery of all assignments,
                            no
                            matter how challenging the brief or how tight the timeframe is.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
       
    );
};

export default Testimonia;