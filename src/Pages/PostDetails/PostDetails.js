import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {

    const data = useLoaderData()
    console.log(data)

    return (
        <div>
            <video className="w-full mt-2 mx-2 md:mx-auto  h-auto max-w-7xl lg:mx-auto border border-gray-200 rounded-lg dark:border-gray-700" controls>
                <source src={data.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className='max-w-7xl mx-2 md:mx-auto mt-4 text-3xl font-semibold'>
                {data.title}
            </div>

            <div className='max-w-7xl mx-2 md:mx-auto mt-2 text-xl'>
                {data.description}
            </div>
            <div className='max-w-7xl mx-2 md:mx-auto mt-2 flex items-center gap-4'>
                <div><img src={data.authorImg} alt="" className='h-20 w-20 rounded-full' /></div>
                <div className='flex flex-col'>
                    <div className='text-sm font-thin'>Uploaded by</div>
                    <div className='text-xl font-medium'>{data.authorName}</div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;