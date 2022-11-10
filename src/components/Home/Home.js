import React from 'react';
import { Helmet } from 'react-helmet-async';
import Extra1 from './Extra1';
import Extra2 from './Extra2';
import HomeServices from './HomeServices';
import TopSection from './TopSection';

const Home = () => {
    return (
        <div>
             <Helmet>
        <title>Home - Dr Muhammad Aminul</title>
      </Helmet>
            <TopSection />
            <HomeServices />
            <Extra2/>
            <Extra1 />
        </div>
    );
};

export default Home;