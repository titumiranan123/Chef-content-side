import React, { useEffect, useState } from 'react';
import Navbar from '../Pages/Home/Navbar/Navbar';
import Header from '../Pages/Home/Header/Header';
import Footer from '../Pages/Home/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Featuredrecipe from '../Pages/Featured_recipe/Featuredrecipe';
import Trendingrecipe from '../Pages/Trendingrecipe/Trendingrecipe';


const Main = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <Navbar />
                <Header />
                <Outlet />
                <Featuredrecipe />
                <Trendingrecipe />
                <Footer />
            </div>
        </div>
    );
};

export default Main;