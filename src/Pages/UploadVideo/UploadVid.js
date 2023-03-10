import { Button, Input, Textarea } from '@material-tailwind/react';
import React from 'react';
import Dropzone from 'react-dropzone';
import { ImUpload } from 'react-icons/im'

const UploadVid = () => {

    const onDrop = (files) => {
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }

        formData.append("file", files[0])
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
                                    <input {...getInputProps()} />
                                    <div className='flex justify-center h-full text-gray-600 items-center text-4xl'><ImUpload /></div>
                                </div>
                            </section>
                        )}
                    </Dropzone>

                    <div className='mt-3 max-w-3xl'>
                        <Input name='email' size="lg" label="Title" />
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