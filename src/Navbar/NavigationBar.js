import React, { useContext } from 'react';
import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import logo from '../Assets/Logo/1-removebg-preview.png'
const NavigationBar = () => {

    const [openNav, setOpenNav] = useState(false);
    const { user, logout } = useContext(AuthContext);
    console.log(user)
    let photo
    if (user?.photoURL) {
        photo = user.photoURL
    }
    else if (user) {
        photo = 'https://cdn-icons-png.flaticon.com/512/1057/1057231.png'
    }
    else (
        photo = ''
    )
    const navigate = useNavigate()

    const handleLogOut = () => {
        logout()
            .then(() => {
                navigate('/login')
            })
            .catch(err => {

            })
    }

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to='/home'>
                    <a href="/" className="flex items-center">
                        Home
                    </a>
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to='/uploadvideo'>
                    <a href="/" className="flex items-center">
                        Upload
                    </a>
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="/" className="flex items-center">
                    Trending
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="/" className="flex items-center">
                    About
                </a>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="border-b z-40 border-gray-200 shadow-md navbar sticky top-0   backdrop-filter backdrop-blur-lg bg-opacity-75 mx-auto max-w-full py-2 px-4 lg:px-8 lg:py-2">
            <div className="container max-w-6xl mx-auto flex items-center justify-between text-blue-gray-900">
                <Link to='/'>
                    <Typography
                        as="a"
                        variant="small"
                        className="mr-4 cursor-pointer font-normal"
                    >
                        <span className='font-mono font-semibold text-xl'>
                            <img className='h-[52px] w-[100px]' src={logo} alt="logo" />
                        </span>
                    </Typography>
                </Link>
                <div className="hidden lg:block">{navList}</div>
                <div className='flex justify-center gap-2'>
                    {user ?
                        <Button onClick={handleLogOut} variant="gradient" size="sm" className="hidden lg:inline-block">
                            <span>log out</span>
                        </Button>
                        :
                        <Link to='/login'>
                            <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                                <span>Login</span>
                            </Button>
                        </Link>}
                    {user ? <img src={photo} alt="" className='h-8 w-8 rounded-full hidden lg:block' />
                        : <></>}
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />

                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}

                    {user ? <img src={photo} alt="" className='h-8 w-8 mb-2 rounded-full ml-2' /> : <></>}


                    {user ?
                        <Button onClick={handleLogOut} variant="gradient" size="sm" fullWidth className="mb-2">
                            <span>log out</span>
                        </Button>
                        :
                        <Link to='/login'>
                            <Button variant="gradient" size="sm" fullWidth className="mb-2">
                                <span>Login</span>
                            </Button>
                        </Link>}
                </div>
            </MobileNav>
        </Navbar>
    );
};

export default NavigationBar;