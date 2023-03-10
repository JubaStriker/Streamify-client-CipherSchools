import React from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';


const SignUp = () => {
    return (
        <div className='flex justify-center mt-20 flex-col items-center md:flex-row'>
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Sign Up to get full access
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Name" />
                        <Input size="lg" label="Email" />
                        <Input type="password" size="lg" label="Password" />
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
                    <Button className="mt-6" fullWidth>
                        Login
                    </Button>
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