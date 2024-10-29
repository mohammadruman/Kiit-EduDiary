import React from 'react'
import Navbar from '../components/Navbar'
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'


const PostDetails = () => {
  return (
    <div>
        <Navbar/>
        <div className='px-8 md:px-[200px] mt-8'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold text-black md:text-3xl'>
                Lets Learn about React and Redux
                </h1>
                <div className='flex items-center justify-center space-x-2'>
                    <p><BiEdit/></p>
                    <p><MdDelete/></p>

                </div>

            </div>
            <div className='flex items-center justify-between mt-2 md:mt-4'>
                <p>@mohammadruman</p>
                <div className='flex space-x-2'>
                    <p>28/11/2024</p>
                    <p>16:32</p>
                </div>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbnTZs4YLKIt3eAelwShiBMkZtyWELWzlDg&usqp=CAU" alt="" className="h-full w-full object-cover"/>
            <p className="mx-auto mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className='flex items-center mt-8 space-x-4 font-semibold'>
            <p>Categories:</p>
            <div className='flex justify-center items-center space-x-2'>
                <div className='bg-gray-300 rounded-lg px-3 py-1'>Tech</div>
                <div className='bg-gray-300 rounded-lg px-3 py-1'>Ai</div>
                <div className='bg-gray-300 rounded-lg px-3 py-1'>React</div>
            </div>
        </div>
        <div className='flex flex-col mt-4'>
        <h3 className='mt-6 mb-4 font-semibold'>Comments:</h3>
        {/* Comments */}
        <div className='px-2 py-2 bg-gray-200 rounded-lg my-2'>
            <div className='flex items-center justify-between'>
                <h3 className='font-bold text-gray-600'>@mohammadruman</h3>
            <div className='flex space-x-2'>
                 <p className='text-gray-500 text-sm'>28/11/2024</p>
                 <p className='text-gray-500 text-sm'>16:32</p>
                 <div className='flex items-center justify-center space-x-2'>
                    <p><BiEdit/></p>
                    <p><MdDelete/></p>

                </div>
            </div>
            </div>
            <p className=' px-4 mt-2'>Nice Information</p>

        </div>
         {/* Comments */}
         <div className='px-2 py-2 bg-gray-200 rounded-lg my-2'>
            <div className='flex items-center justify-between'>
                <h3 className='font-bold text-gray-600'>@mohammadruman</h3>
            <div className='flex space-x-2'>
                 <p className='text-gray-500 text-sm'>28/11/2024</p>
                 <p className='text-gray-500 text-sm'>16:32</p>
                 <div className='flex items-center justify-center space-x-2'>
                    <p><BiEdit/></p>
                    <p><MdDelete/></p>

                </div>
            </div>
            </div>
            <p className=' px-4 mt-2'>Nice Information</p>

        </div>
        </div>
    {/* write a comments */}
    <div className='w-full flex flex-col mt-4 md:flex-row' ></div>
        <input type='text' placeholder='Write a comment' className='md:w-[80%] outline-none px-4 mt-4 md:mt-0'></input>
       <button className='bg-black text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0'>Add comment</button>
        </div>
        

    </div>
  )
}

export default PostDetails