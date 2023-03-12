import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillLike, AiOutlineComment, AiOutlineShareAlt, AiOutlineLike } from 'react-icons/ai'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useQuery } from 'react-query';

const PostDetails = () => {

    const data = useLoaderData()
    console.log(data?.like?.length)
    const id = data._id
    const { user } = useContext(AuthContext);
    const like = { uid: user.uid }
    const likeArr = data.like;
    const found = likeArr.find(element => element.uid === like.uid);
    let react;
    const foundUid = found?.uid;


    const { data: posts = {}, isFetching, refetch } = useQuery({
        queryKey: ['posts', id],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/details/${id}`);
            const data = await res.json();
            return data;
        }
    });

    console.log("post", posts);



    const handleLike = (id) => {
        fetch(`http://localhost:5000/postlike?id=${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(like)
        })
            .then(res => res.json())
            .then(data => {
                console.log("data", data)
                refetch()
                if (data.acknowledged === "true") {
                }
                else {
                }
            })
    }

    const handleDisLike = (id) => {
        fetch(`http://localhost:5000/postdislike?id=${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(like)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log("data", data)

                if (data.acknowledged === "true") {

                }
                else {

                }
            })
    }

    if (foundUid === user?.uid) {
        react = <button onClick={() => handleDisLike(data._id)}>
            <div className='flex items-center gap-1'>
                <div className='flex items-center gap-1'>
                    <AiFillLike className='text-3xl text-blue-600' />
                    <div className='font-semibold'>{posts?.like?.length}</div>
                </div>
                <div>{ }</div>
            </div>
        </button>
    }
    else {
        react = <button onClick={() => handleLike(data._id)}>
            <div className='flex items-center gap-1'>
                <div className='flex items-center gap-1'>
                    <AiOutlineLike className='text-3xl text-blue-600' />
                    <div className='font-semibold'>{posts?.like?.length}</div>
                </div>
                <div>{ }</div>
            </div>
        </button>
    }





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
            <div className='max-w-7xl mx-2 md:mx-auto mt-2 flex justify-between items-center gap-4'>
                <div className='flex items-center gap-4'>
                    <div><img src={data.authorImg} alt="" className='h-20 w-20 rounded-full' /></div>
                    <div className='flex flex-col'>
                        <div className='text-sm font-thin'>Uploaded by</div>
                        <div className='text-xl font-medium'>{data.authorName}</div>
                    </div>
                </div>
                <div className='flex gap-0 items-center'>
                    {react}
                    <div><AiOutlineComment className='text-3xl ml-3' /></div>
                    <div><AiOutlineShareAlt className='text-3xl ml-3' /></div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;