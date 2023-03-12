import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import Typewriter from 'typewriter-effect';
import VideoCard from './VideoCard';

const Home = () => {
    return (
        <div className='flex-col flex'>
            <div className='flex flex-col md:flex-row mx-auto justify-start items-center w-auto'>
                <div className='md:mx-6'>
                    <span className='text-xl '>Welcome to streamify</span>
                    <h2 className='text-4xl md:text-6xl lg:text-8xl font-bold mt-8 mb-6 text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 via-blue-700 to-purple-500 pb-3'>A fun place to <span><Typewriter
                        options={{
                            strings: ['Stream', 'Share', 'Store', 'Watch', 'Like', 'Comment'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></span> your videos</h2>
                </div>
                <div>
                    <Player
                        src='https://assets2.lottiefiles.com/packages/lf20_rsgxuwx0.json'
                        className="player md:h-[400px] md:w-[400px] h-[250px] w-[250px] lg:h-[600px] lg:w-[600px]"
                        loop
                        autoplay
                    />
                </div>
            </div>
            <VideoCard></VideoCard>
        </div>
    );
};

export default Home;