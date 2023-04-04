import { Player } from '@lottiefiles/react-lottie-player';
import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className='h-screen w-full flex flex-col justify-center items-center'>
                <Player
                    src='https://assets1.lottiefiles.com/packages/lf20_bhw1ul4g.json'
                    className="player"
                    loop
                    autoplay
                    style={{ height: '600px', width: '600px' }}
                />
                <Link to='/home'
                ><Button className='flex justify-center mx-auto mt-4 mb-20'>Home</Button></Link>
            </div>

        </div>
    );
};

export default Error;