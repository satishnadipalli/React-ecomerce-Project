import React from 'react'
import { Link } from 'react-router-dom'
const CarouselImg = ({ title, img }) => {
    return (
        <div className='relative flex justify-evenly items-center px-4 text-center bg-white w-full h-[170px] md:h-[280px] rounded border-[1px] border-gray-300 overflow-hidden'>
            <div className='z-0 absolute -left-10 -top-10 bg-pink-500 w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full border-1 blur-md bg-opacity-40'></div>
            <div className='z-0 absolute -bottom-10 -right-10 bg-green-500 w-[100px] h-[100px] md:w-[240px] md:h-[240px] rounded-full border-1 blur-md bg-opacity-40'></div>
            <div className='z-0 absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-[75%] bg-yellow-300 w-[150px] md:w-[80%] h-[30px] rounded-full border-1 blur-md bg-opacity-40'></div>
            <div className='z-0 absolute -bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-[75%] bg-yellow-300 w-[150px] md:w-[70%] h-[30px] rounded-full border-1 blur-md bg-opacity-40'></div>

            {title && <div className='md:ml-12'><div className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] overflow-hidden'><img className='w-full h-full object-contain' src={img} alt='img' /></div> </div>}
            <div className='w-[50%] z-10 break-all'>
                <p className={`${title ? "font-semibold text-[12px] md:text-base" : "animate-pulse bg-gray-400 w-full h-[8px] md:h-[10px] rounded-md"}`}>{title}</p>
                {title ?
                    <Link to={`/category/men's clothing`} className="text-black font-semibold underline rounded-md text-xs md:text-sm mt-2">Explore all &gt;</Link>
                    :
                    <p className="mt-2 mx-auto animate-pulse bg-gray-400 w-[80px] md:w-[200px] h-[8px] md:h-[10px] rounded-md"></p>

                }
            </div>
        </div>
    )
}

export default CarouselImg