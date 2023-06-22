import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Authcontext } from '../../../Provider/Authprovider';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
const Navbar = () => {
    const { logOut, user, loading, setLoading } = useContext(Authcontext);

    const singOut = () => {
        logOut()
            .then(res => {
                toast("sing out")
                window.location.reload()
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="navbar bg-base-100 px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li tabIndex={0}>
                            <NavLink to='/' className={({ isActive }) => isActive ? "text-sky-500 underline  font-semibold" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} aria-current="page" > Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog' className={({ isActive }) => isActive ? "text-sky-500 underline  font-semibold" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} > Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({ isActive }) => isActive ? "text-sky-500 underline  font-semibold" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} > About</NavLink>

                        </li>
                    </ul>
                </div>
                <Link to='/'>
                    <span className='text-red-500 text-3xl font-bold'>Kung </span><span className='text-yellow-400 text-3xl font-bold'>Food</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? "text-sky-500 underline  font-semibold" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 0 "}  > Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog' className={({ isActive }) => isActive ? "text-sky-500 underline  font-semibold" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} > Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => isActive ? "text-sky-500 underline  font-semibold" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} > About</NavLink>

                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <>
                    <img title={`${user.displayName}`} className='h-[45px] w-[45px] rounded-full' src={user.photoURL} alt="" />
                    <Link onClick={singOut} to='/login'><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ">Log Out</button></Link></> : <div className='flex items-center gap-3'>
                    <FaUser />
                    <Link to='/login'><button type="button" className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ">Login</button></Link>
                </div>}
            </div>
        </div>
    );
};

export default Navbar;