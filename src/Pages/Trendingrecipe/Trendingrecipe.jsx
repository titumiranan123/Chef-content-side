import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { GiBoneKnife } from 'react-icons/gi';
import { MdOutlineWatchLater } from 'react-icons/md';

const Trendingrecipe = () => {
    return (
        <div className=''>
            <h2 className='text-bold text-3xl font-bold mt-5 mb-5'>Trending Recipe</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>

                <div >
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[550px] mb-4">
                        <img className="rounded-lg p-5 w-[100%] h-[300px]" src={"https://thesimpletravel.com/wp-content/uploads/2022/02/Foods-in-Bangladesh.jpg"} alt="" />
                        <div className="p-5 flex flex-col justify-center items-center text-center">
                            <div className='flex gap-5 '>
                                <p className='flex items-center gap-3'> <span className="text-red-400"><MdOutlineWatchLater /></span> 1 hour </p>
                                <p className='flex  items-center gap-3'> <span className="text-red-400"> <GiBoneKnife />  </span>Expert </p>
                            </div>
                            <p className="text-3xl font-bold">Fish Curry</p>
                            <p className='text-xl text-gray-500'>Bangladesh is the land of fish and rice. This dish is traditionally cooked with a freshwater fish called Rohu, which belongs to the carp family. .....</p>
                            <button className='flex items-center gap-2 border border-red-200 py-1 px-4 rounded'>Read me <FaArrowRight className='text-red-400' /></button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[550px] mb-4">
                        <img className="rounded-lg p-5 w-[100%] h-[300px]" src={"https://cdn.tasteatlas.com//images/dishes/85dca6a42c8948f6a861fba0a5442c8f.jpg?w=905&h=510"} alt="" />
                        <div className="p-5 flex flex-col justify-center items-center text-center">
                            <div className='flex gap-5 '>
                                <p className='flex items-center gap-3'> <span className="text-red-400"><MdOutlineWatchLater /></span> 1 hour  </p>
                                <p className='flex  items-center gap-3'> <span className="text-red-400"> <GiBoneKnife />  </span>Expert </p>
                            </div>
                            <p className="text-3xl font-bold">Jilapi</p>
                            <p className='text-xl text-gray-500'>Having a good curry recipe up your sleeve can be a lifesaver when you're looking to rustle up ......</p>
                            <button className='flex items-center gap-2 border border-red-200 py-1 px-4 rounded'>Read me <FaArrowRight className='text-red-400' /></button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[550px] mb-4">
                        <img className="rounded-lg p-5 w-[100%] h-[300px]" src={"https://media-cdn2.greatbritishchefs.com/media/icwldx0g/img16309.whqc_1426x713q90fpt463fpl544.webp"} alt="" />
                        <div className="p-5 flex flex-col justify-center items-center text-center">
                            <div className='flex gap-5 '>
                                <p className='flex items-center gap-3'> <span className="text-red-400"><MdOutlineWatchLater /></span> 1 hour  </p>
                                <p className='flex  items-center gap-3'> <span className="text-red-400"> <GiBoneKnife />  </span>Expert </p>
                            </div>
                            <p className="text-3xl font-bold">curry </p>
                            <p className='text-xl text-gray-500'>Having a good curry recipe up your sleeve can be a lifesaver when you're looking to rustle up something tasty, quick and easy at the last minute</p>
                            <button className='flex items-center gap-2 border border-red-200 py-1 px-4 rounded'>Read me <FaArrowRight className='text-red-400' /></button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[550px] mb-4">
                        <img className="rounded-lg p-5 w-[100%] h-[300px]" src={"https://cdn.tasteatlas.com//Images/Dishes/d613f21d50184b45a9a763dafc4f3e8b.jpg?w=905&h=510"} alt="" />
                        <div className="p-5 flex flex-col justify-center items-center text-center">
                            <div className='flex gap-5 '>
                                <p className='flex items-center gap-3'> <span className="text-red-400"><MdOutlineWatchLater /></span> 0.2 hour  </p>
                                <p className='flex  items-center gap-3'> <span className="text-red-400"> <GiBoneKnife />  </span>Expert </p>
                            </div>
                            <p className="text-3xl font-bold">Jhalmuri</p>
                            <p className='text-xl text-gray-500'>Having a good curry recipe up your sleeve can be a lifesaver when you're looking to rustle up something tasty, quick and easy at the last minute</p>
                            <button className='flex items-center gap-2 border border-red-200 py-1 px-4 rounded'>Read me <FaArrowRight className='text-red-400' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trendingrecipe;


