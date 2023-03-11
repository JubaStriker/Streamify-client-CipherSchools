import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className='flex-col flex'>
            <div className='flex flex-col md:flex-row mx-auto justify-start items-center w-auto'>
                <div>
                    <span className='text-xl '>Welcome to streamify</span>
                    <h2 className=' text-6xl lg:text-8xl font-bold mt-8 mb-6 text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 via-blue-700 to-purple-500 pb-3'>A fun place to <span><Typewriter
                        options={{
                            strings: ['Stream', 'Share', 'Watch', 'Like', 'Comment'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></span> your videos</h2>
                </div>
                <div>
                    <Player
                        src='https://assets2.lottiefiles.com/packages/lf20_rsgxuwx0.json'
                        className="player"
                        loop
                        autoplay
                        style={{ height: '600px', width: '600px' }}
                    />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-8'>
                <video className="w-full h-auto max-w-3xl border border-gray-200 rounded-lg dark:border-gray-700" controls>
                    <source src="https://firebasestorage.googleapis.com/v0/b/streamify-eb7bf.appspot.com/o/bandicam%202023-03-12%2000-27-51-455.mp4?alt=media&token=0ab1f042-c62a-4766-a2cd-059942b82d58" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video className="w-full h-auto max-w-3xl border border-gray-200 rounded-lg dark:border-gray-700" controls>
                    <source src="https://firebasestorage.googleapis.com/v0/b/streamify-eb7bf.appspot.com/o/bandicam%202023-03-12%2000-27-51-455.mp4?alt=media&token=0ab1f042-c62a-4766-a2cd-059942b82d58" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video className="w-full h-auto max-w-3xl border border-gray-200 rounded-lg dark:border-gray-700" controls>
                    <source src="https://firebasestorage.googleapis.com/v0/b/streamify-eb7bf.appspot.com/o/bandicam%202023-03-12%2000-27-51-455.mp4?alt=media&token=0ab1f042-c62a-4766-a2cd-059942b82d58" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Home;