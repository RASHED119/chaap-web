import React from 'react';
import Header from '../Header/Header';
import Bannar from '../Bannar/Bannar';
import Service from '../Service/Service';
import Services from '../Services/Services';
import Testimonia from './../Testimonia/Testimonia';
import Gallary from './../Gallary/Gallary';
import Brands from '../Brands/Brands';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Bannar></Bannar>
            <Service></Service>
            <Services></Services>
            <Testimonia></Testimonia>
            <Gallary></Gallary>
            <Brands></Brands>
        </div>
    );
};

export default Home;