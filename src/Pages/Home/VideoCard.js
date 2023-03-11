import axios from 'axios';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import React, { useState } from 'react';

const VideoCard = () => {

    const [videos, setVideos] = useState([])
    axios.get('http://localhost:5000/videos')
        .then(function (response) {
            // handle success
            setVideos(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 md:mx-10'>
            {videos.map(vid =>
                <Card key={vid._id} className="max-w-[24rem] mx-auto mt-4 overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <video className="w-full h-auto max-w-3xl border border-gray-200 rounded-lg dark:border-gray-700" controls>
                            <source src={vid.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray">
                            {vid.title}
                        </Typography>
                        <p className="mt-3 text-sm font-normal">
                            {vid.description}
                        </p>
                    </CardBody>
                    {/* <CardFooter className="flex items-center justify-between">
                        <div className="flex items-center -space-x-3">
                            <Tooltip content="Natali Craig">
                                <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="natali craig"
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                    className="border-2 border-white hover:z-10"
                                />
                            </Tooltip>
                            <Tooltip content="Candice Wu">
                                <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="candice wu"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                    className="border-2 border-white hover:z-10"
                                />
                            </Tooltip>
                        </div>
                        <Typography className="font-normal">January 10</Typography>
                    </CardFooter> */}
                </Card>)}
        </div>
    );
};

export default VideoCard;