import React, { useContext, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { Authcontext } from '../../../Provider/Authprovider';
import { toast } from 'react-toastify';
import LazyLoad from 'react-lazy-load';

const Chefcard = ({ chefData }) => {
    const [click, setClick] = useState(false);
    const { name, experience, number_of_recipes, likes, image } = chefData;
    const { user, loading } = useContext(Authcontext);
    // const location = useLocation();
    if (loading) {
        return (<div>
            <div role="status">
                <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>)
    }
    const addtoFavourit = () => {
        setClick(true);
        toast("Added to Favourite")
    }
    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
            <LazyLoad height={262} offset={100}>
                <img className="rounded-lg p-5" src={image} alt="" />
            </LazyLoad>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className="mb-2 text-gray-700 dark:text-gray-400 font-semibold">Experience: {experience} year</p>
                <p className="mb-2 font-semibold text-gray-700 dark:text-gray-400">Recipes: {number_of_recipes}</p>
                <p className="mb-2 font-semibold text-gray-700 dark:text-gray-400 flex gap-3 items-center"> <span onClick={addtoFavourit} className={click ? 'text-red-500 opacity-50 cursor-not-allowed ' : ''}><FaHeart /></span>{likes}</p>
                <Link to={user ? `/recipe/${name}` : '/login'} state={{ from: `/recipe/${name}` }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View Recipe
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
        </div>

    );
};

export default Chefcard;