import React from 'react';
import Navbar from '../Pages/Home/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default LoginLayout;