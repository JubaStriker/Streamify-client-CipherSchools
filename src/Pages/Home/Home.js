import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const Home = () => {
    return (
        <div className='flex-col flex'>
            <div className='flex flex-col md:flex-row mx-auto justify-start items-center w-auto'>
                <div>
                    Welcome to streamify
                </div>
                <div>
                    <Player
                        src='https://assets2.lottiefiles.com/packages/lf20_rsgxuwx0.json'
                        className="player"
                        loop
                        autoplay
                        style={{ height: '400px', width: '400px' }}
                    />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <video class="w-full h-auto max-w-4xl border border-gray-200 rounded-lg dark:border-gray-700" controls>
                    <source src="https://firebasestorage.googleapis.com/v0/b/streamify-eb7bf.appspot.com/o/bandicam%202023-03-12%2000-27-51-455.mp4?alt=media&token=0ab1f042-c62a-4766-a2cd-059942b82d58" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video class="w-full h-auto max-w-4xl border border-gray-200 rounded-lg dark:border-gray-700" controls>
                    <source src="https://firebasestorage.googleapis.com/v0/b/streamify-eb7bf.appspot.com/o/bandicam%202023-03-12%2000-27-51-455.mp4?alt=media&token=0ab1f042-c62a-4766-a2cd-059942b82d58" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video class="w-full h-auto max-w-4xl border border-gray-200 rounded-lg dark:border-gray-700" controls>
                    <source src="https://firebasestorage.googleapis.com/v0/b/streamify-eb7bf.appspot.com/o/bandicam%202023-03-12%2000-27-51-455.mp4?alt=media&token=0ab1f042-c62a-4766-a2cd-059942b82d58" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Home;