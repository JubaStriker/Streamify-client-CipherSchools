import { Button, Input, Textarea } from '@material-tailwind/react';
import axios from 'axios';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { toast } from 'react-hot-toast';
import { ImUpload } from 'react-icons/im'

const UploadVid = () => {

    const [fileName, setFileName] = useState("");
    const [file, setFile] = useState([]);

    const onDrop = (files) => {
        setFile(files[0])
        setFileName(files[0].name)


    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        formData.append("file", file)
        formData.append("title", title)
        formData.append("description", description)
        console.log(formData)

        axios.post(`http://localhost:5000/api/v1/media/create`, formData)
            .then(success => {
                alert('submitted')
            })
            .catch(err => {
                console.log(err)
                alert('error creating file upload')
            })
    }


    return (
        <div className='md:mx-10 md:px-10 mt-10 mx-2'>
            <h1 className='my-4 text-4xl font-semibold'>Upload video</h1>
            <form onSubmit={handleOnSubmit}>
                <div className='flex justify-center flex-col'>
                    <Dropzone onDrop={onDrop}
                        multiple={false}
                        maxSize={800000000}>
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div className='w-[300px] h-[240px] border-2 border-gray-300 border-dashed hover:border-blue-500' {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <div className='flex flex-col justify-center h-full text-gray-600 items-center text-4xl'>
                                        <ImUpload />
                                        {file ? <p className='text-sm'>{fileName}</p> : <p className='text-sm'>Drag and drop files here</p>}
                                    </div>

                                </div>
                            </section>
                        )}
                    </Dropzone>

                    <div className='mt-3 max-w-3xl'>
                        <Input name='title' size="lg" label="Title" required />
                    </div>
                    <div className='mt-3 max-w-3xl'>
                        <Textarea name="description" variant="outlined" label="description" />
                    </div>
                    <div>
                        <Button type='submit' variant="gradient" size="sm" className="">
                            <span>Upload</span>
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UploadVid;