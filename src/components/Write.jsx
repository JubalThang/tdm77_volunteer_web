import React from 'react'

export default function Write() {
    return (
        <div className=" w-full h-[calc(100vh-80px)] flex ">
            <div className='lg:w-60 border-r-2 h-full p-4 flex flex-col justify-between'>
                <div>
                    <h1 className=" text-primary font-bold text-xl">Books</h1>
                    <ol className='mt-4 pl-2 space-y-8'>
                        <li className=' border-b-2 pb-2 whitespace-nowrap'>Name of the book</li>
                        <li className=' border-b-2 pb-2'>Name of the book</li>
                        <li className=' border-b-2 pb-2'>Name of the book</li>
                        <li className=' border-b-2 pb-2'>Name of the book</li>
                    </ol>
                </div>
                <button className='primary-btn min-w-min whitespace-nowrap'>Add Book</button>
            </div>
            <div className='p-4 overflow-hidden w-full h-full flex flex-col justify-between'>
                <div className='h-32'>
                    <h1 className=" text-primary font-bold text-xl">Chapters:</h1>
                    <div className='p-4 overflow-y-hidden flex space-x-8 w-full'>
                        <div className="bg-primary text-white font-bold p-2 w-12 h-auto flex justify-center rounded-md">1</div>
                    </div>
                </div>
                <div className='textarea-height bg-green-300'>
                    <textarea className=" h-full w-full border p-5 " placeholder="Start typing verse here..." />
                  
                </div>
                <div className='flex justify-end items-center h-32'>
                    <button className='primary-btn'>Save</button>
                </div>
            </div>
        </div>
    )
}
