import { Button, Input, Textarea } from '@material-tailwind/react';
import axios from 'axios';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { toast } from 'react-hot-toast';
import { ImUpload } from 'react-icons/im'

const UploadVid = () => {

    const [file, setFile] = useState("")
    const onDrop = (files) => {
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        console.log(files[0].name)
        formData.append("file", files[0])
        setFile(files[0].name)

    }
    return (
        <div className='md:mx-10 md:px-10 mt-10 mx-2'>
            <h1 className='my-4 text-4xl font-semibold'>Upload video</h1>
            <form>
                <div className='flex justify-center flex-col'>
                    <Dropzone onDrop={onDrop}
                        multiple={false}
                        maxSize={800000000}>
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div className='w-[300px] h-[240px] border-2 border-gray-300 border-dashed hover:border-blue-500' {...getRootProps()}>
                                    <input {...getInputProps()} accept=".mp4, .mkv" />
                                    <div className='flex flex-col justify-center h-full text-gray-600 items-center text-4xl'>
                                        <ImUpload />
                                        {file ? <p className='text-sm'>{file}</p> : <p className='text-sm'>Drag and drop files here</p>}
                                    </div>

                                </div>
                            </section>
                        )}
                    </Dropzone>

                    <div className='mt-3 max-w-3xl'>
                        <Input name='email' size="lg" label="Title" required />
                    </div>
                    <div className='mt-3 max-w-3xl'>
                        <Textarea variant="outlined" label="description" />
                    </div>
                    <div>
                        <Button variant="gradient" size="sm" className="">
                            <span>Upload</span>
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UploadVid;