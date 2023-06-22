import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Footer/Footer';
import Navbar from '../Pages/Home/Navbar/Navbar';

const Recipelayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Recipelayout;