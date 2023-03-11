import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <Player
                src='https://assets5.lottiefiles.com/packages/lf20_usmfx6bp.json'
                className="player"
                loop
                autoplay
                style={{ height: '600px', width: '600px' }}
            />
        </div>
    );
};

export default Loading;