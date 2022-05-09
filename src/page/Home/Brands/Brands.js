import React from 'react';
import './Brands.css';
import brand1 from '../../../images/Logo-6.png';
import brand2 from '../../../images/Logo-7.png';



const Brands = () => {
    return (
        <div className="brands"> 
            <div className="small-comtainer">
                <div className="row">
                    <div className="col-5">
                        <img src={brand1} alt="" />
                    </div>
                    <div className="col-5">
                        <img src={brand2} alt="" />
                    </div>
                    <div className="col-5">
                        <img src={brand1} alt="" />
                    </div>
                    <div className="col-5">
                        <img src={brand2} alt="" />
                    </div>
                    <div className="col-5">
                        <img src={brand1} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Brands;