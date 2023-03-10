import React, { useContext, useState } from 'react';
import { Card, Input, Button, Typography, } from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { getAuth, updateProfile } from "firebase/auth";


const SignUp = () => {

    const auth = getAuth();
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            setError("Password did not match");
            toast.error(`"Password did not match !"`)
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        setError("")
                        toast.success("Sign up successful")
                        navigate('/login')
                    })
                    .catch((err) => {
                        setError(err);
                        console.log(err);

                    })
            })
            .catch((err) => {
                console.log(err.message)
            });
    }

    return (
        <div className='flex justify-center mt-20 flex-col items-center md:flex-row'>
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Sign Up to get full access
                </Typography>
                <form onSubmit={handleOnSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input name='name' size="lg" label="Name" />
                        <Input name='email' size="lg" label="Email" />
                        <Input name='password' type="password" size="lg" label="Password" />
                        <Input name='confirmPassword' type="password" size="lg" label="Confirm Password" />
                    </div>

                    <Button type='submit' className="mt-6" fullWidth>
                        Sign up
                    </Button>

                    <Typography color="Red" className="mt-4 text-center text-red-600 font-normal">
                        {error}
                    </Typography>

                    <Link to="/login">
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <a
                                href="/"
                                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                            >
                                Login
                            </a>
                        </Typography>
                    </Link>
                </form>
            </Card>
            <div className='md:ml-20'>
                <Player
                    src='https://assets5.lottiefiles.com/packages/lf20_0mohmgca.json'
                    className="player"
                    loop
                    autoplay
                    style={{ height: '400px', width: '400px' }}
                />
            </div>
        </div>

    );
};

export default SignUp;