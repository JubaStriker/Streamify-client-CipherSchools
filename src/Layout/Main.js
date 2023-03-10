import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Navbar/NavigationBar';

const Main = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />
        </div>
    );
};

export default Main;