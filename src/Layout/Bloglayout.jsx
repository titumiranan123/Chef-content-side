import React from 'react';
import Navbar from '../Pages/Home/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Footer/Footer';

const Bloglayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Bloglayout;