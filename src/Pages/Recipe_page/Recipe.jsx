import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GiBoneKnife } from 'react-icons/gi';
import { MdOutlineWatchLater } from 'react-icons/md';
import LazyLoad from 'react-lazy-load';

const Recipe = ({ recipes }) => {

    const { recipeName, description, skillLevel, cookingTime, image } = recipes;
    return (
        <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[720px] mb-4">
                <LazyLoad>
                    <img className="rounded-lg p-5 w-[100%] h-[300px]" src={image} alt="" />
                </LazyLoad>
                <div className="p-5 flex flex-col justify-center items-center text-center">
                    <div className='flex gap-5 '>
                        <p className='flex items-center gap-3'> <span className="text-red-400"><MdOutlineWatchLater /></span> {cookingTime} </p>
                        <p className='flex  items-center gap-3'> <span className="text-red-400"> <GiBoneKnife /> </span>{skillLevel}  </p>
                    </div>
                    <p className="text-3xl font-bold">{recipeName}</p>
                    <p className='text-xl text-gray-500'>{description}</p>
                    <button className='flex items-center gap-2 border border-red-200 py-1 px-4 rounded'>Read me <FaArrowRight className='text-red-400' /></button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;