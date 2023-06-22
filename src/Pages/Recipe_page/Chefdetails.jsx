import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Recipe from './Recipe';
import LazyLoad from 'react-lazy-load';
const Chefdetails = () => {
    const data = useLoaderData()
    const [click, setClick] = useState(false);
    const { name, experience, number_of_recipes, likes, description, image, recipes } = data;
    return (
        <>
            <div className='mt-20'>
                <h1 className='text-3xl font-bold mb-10'>Chef Details</h1>
                <LazyLoad height={462} offset={100} >
                    <img
                        className="object-cover w-75 rounded-t-lg h-[450px] lg:h-[550px]  md:rounded-none md:rounded-l-lg"
                        src={image}
                        alt=""
                    />
                </LazyLoad>
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <p className="mb-2 text-gray-700 dark:text-gray-400 font-semibold">Experience: {experience} year</p>
                    <p className="mb-2 font-semibold text-gray-700 dark:text-gray-400">Recipes: {number_of_recipes}</p>
                    <p className="mb-2 font-semibold  text-xl dark:text-gray-400 text-gray-500"> {description}</p>
                    <p className="mb-2 font-semibold text-gray-700 dark:text-gray-400 flex gap-3 items-center"> <span onClick={() => setClick(true)} className={click ? 'text-red-500 opacity-50 cursor-not-allowed ' : ''}><FaHeart /></span>{likes}</p>
                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Hire me
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>


            </div>
            <div>
                <h3 className='text-3xl font-bold mt-10 mb-10'>Popular Recipe</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        recipes.map((rp, idx) => <Recipe
                            key={idx}
                            recipes={rp}
                        >

                        </Recipe>)
                    }
                </div>
            </div>
        </>
    );
};

export default Chefdetails;