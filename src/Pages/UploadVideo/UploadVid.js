import { Player } from '@lottiefiles/react-lottie-player';
import { Button, Input, Textarea } from '@material-tailwind/react';
import React, { useContext, useState } from 'react';
import Dropzone from 'react-dropzone';
import { toast } from 'react-hot-toast';
import { ImUpload } from 'react-icons/im'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const UploadVid = () => {

    const [fileName, setFileName] = useState("Drag and drop files here");
    const [file, setFile] = useState([]);
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(false);
    const onDrop = (files) => {
        setFile(files[0])
        setFileName(files[0].name)

        console.log(file)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        // const video = form.video.files[0]
        let formData = new FormData();
        const title = form.title.value;
        const description = form.description.value;
        formData.append("filename", file)
        setLoading(true)

        fetch('http://localhost:5000/uploadVideo', {

            method: 'POST',
            body: formData,

        })
            .then(res => res.json())
            .then(result => {
                const post = {
                    title: title,
                    description: description,
                    authorName: user.displayName,
                    video: result.url,
                    authorEmail: user.email
                }

                console.log("post", post)
                fetch('http://localhost:5000/saveVideo', {

                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(post)

                })
                    .then(res => res.json())
                    .then(result => {
                        console.log("result", result)
                        setLoading(false)
                        form.reset()
                        setFileName("")
                        toast.success("Video posted successfully")
                    })


            })


    }


    return (
        <div className='md:mx-10 md:px-10 mt-10 mx-2'>
            <h1 className='my-4 text-4xl font-semibold'>Upload video</h1>
            <div className='flex flex-col justify-center items-center md:flex-row'>
                <div>
                    <form onSubmit={handleOnSubmit}>
                        <div className='flex justify-center flex-col'>
                            <Dropzone onDrop={onDrop}
                                multiple={false}
                                maxSize={800000000}>
                                {({ getRootProps, getInputProps }) => (
                                    <section>
                                        <div className='w-[300px] h-[240px] border-2 border-gray-300 border-dashed hover:border-blue-500' {...getRootProps()}>
                                            <input {...getInputProps()} name='file' />
                                            <div className='flex flex-col justify-center h-full text-gray-600 items-center text-4xl'>
                                                <ImUpload />
                                                {file ? <p className='text-sm'>{fileName}</p> : <p className='text-sm'>Drag and drop files here</p>}
                                            </div>

                                        </div>
                                    </section>
                                )}
                            </Dropzone>

                            {/* <div className='mt-3 max-w-3xl'>
                        <Input name='video' size="lg" label="Video" type='file' required />
                    </div> */}
                            <div className='mt-3 max-w-3xl'>
                                <Input name='title' size="lg" label="Title" required />
                            </div>
                            <div className='mt-3 max-w-3xl'>
                                <Textarea name="description" variant="outlined" label="description" />
                            </div>
                            <div>
                                <Button type='submit' variant="gradient" size="sm" className="">
                                    {loading ? <span>Uploading....</span>
                                        : <span>Upload</span>}
                                </Button>
                            </div>
                        </div>
                    </form>

                </div>
                <div>
                    {loading ? <Player
                        src='https://assets5.lottiefiles.com/packages/lf20_usmfx6bp.json'
                        className="player"
                        loop
                        autoplay
                        style={{ height: '300px', width: '300px' }}
                    /> : <></>}
                </div>
            </div>
        </div>
    );
};

export default UploadVid;