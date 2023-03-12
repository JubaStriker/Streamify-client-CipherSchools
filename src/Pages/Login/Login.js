import React, { useContext, useState } from 'react';
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { loginUser, providerLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [errors, setErrors] = useState("");
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user
                const notification = {
                    type: 'welcome',
                    message: `Hello ${user.displayName} welcome to streamify.`,
                    email: user.email
                }
                console.log(notification)
                fetch('http://localhost:5000/notification', {

                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(notification)

                })
                    .then(res => res.json())
                    .then(result => {
                        console.log("Provider", result)
                    })

                navigate(from, { replace: true });
            })
            .catch(error => console.log(error.message))
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                const notification = {
                    type: 'welcome',
                    message: `Hello ${user.displayName} welcome to streamify.`,
                    email: user.email
                }
                fetch('http://localhost:5000/notification', {

                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(notification)

                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                    })

                navigate(from, { replace: true });
            })
            .catch(err => setErrors(err.code)
            )
    };

    return (
        <div className='flex justify-center mt-20 flex-col items-center md:flex-row'>
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Login
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your email and password to login
                </Typography>
                <form onSubmit={handleOnSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input name='email' size="lg" label="Email" />
                        <Input name='password' type="password" size="lg" label="Password" />
                    </div>
                    {/* <Checkbox
                        label={
                            (
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    I agree the
                                    <a
                                        href="/"
                                        className="font-medium transition-colors hover:text-blue-500"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                </Typography>
                            )
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    /> */}
                    <Button type='submit' className="mt-6" fullWidth>
                        Login
                    </Button>

                    <Button onClick={handleGoogleLogin} className="mt-6" fullWidth color="red">
                        Login with google
                    </Button>

                    <Typography color="Red" className="mt-4 text-center text-red-600 font-normal">
                        {errors}
                    </Typography>

                    <Link to="/signup">
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Don't have an account?{" "}
                            <a
                                href="/"
                                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                            >
                                Sign Up
                            </a>
                        </Typography>
                    </Link>
                </form>
            </Card>
            <div className='md:ml-20'>
                <Player
                    src='https://assets7.lottiefiles.com/packages/lf20_jcikwtux.json'
                    className="player"
                    loop
                    autoplay
                    style={{ height: '400px', width: '400px' }}
                />
            </div>
        </div>
    );
};

export default Login;