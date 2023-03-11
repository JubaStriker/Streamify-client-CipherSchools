import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavigationBar from '../Navbar/NavigationBar';

const Main = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;