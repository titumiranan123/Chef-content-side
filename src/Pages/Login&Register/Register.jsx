import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Provider/Authprovider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [passwordError, setPasswordError] = useState(null);
    const [password, setPassword] = useState('')
    const { loginwithGoogle, userCreateWithEmailpassword, loginwithGithub, user } = useContext(Authcontext);
    const navigate = useNavigate();
    const handalpassword = (event) => {
        const form = event.target;
        const password = form.value;
        setPassword(password)

        if (password.length < 8) {
            setPasswordError('Password must be 8 character')
        }
        else if (!/^.+[A-Z].+/.test(password)) {
            setPasswordError('Password can contain Uppercase ,Lowercase ,letters, digits, and the specified special characters.');
        }
        else {
            setPasswordError(' ')
        }

    }
    const handalsubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(name, photo)
        userCreateWithEmailpassword(email, password)
            .then(res => {
                console.log(res.user)
                navigate('/login')
                form.reset();
                updatUserdata(res.user, name, photo)
            })
            .catch(err => {
                console.log(err)
                toast(`${err.message}`)
            })


    }

    const updatUserdata = (user, name, url) => {
        updateProfile(user, {
            displayName: name,
            photoURL: url
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
                toast(`${err.message}`)
            })
    }

    const loginWithgoogle = () => {
        loginwithGoogle()
            .then(res => {
                console.log(res.user)
                Navigate('/login')
            })
            .catch(err => {
                console.log(err)
            })
    }
    const loginWithGithub = () => {
        loginwithGithub()
            .then(res => {
                console.log(res.user)
                Navigate('/login')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <section className="bg-gray-50 mt-10 dark:bg-gray-900 relative z-0">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create and account
                        </h1>
                        <div className='flex gap-10 items-center'>
                            <button onClick={loginWithgoogle}
                                className='py-1 px-5 border border-sky-500 font-bold text-xl rounded-lg'>Login With Google</button>
                            <p className='text-xl '> or</p>
                            <button onClick={loginWithGithub}
                                className='py-1 px-5 border border-sky-500 font-bold text-xl rounded-lg'>Login With Github</button>
                        </div>
                        <form onSubmit={handalsubmit} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your name" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your PhotoUrl</label>
                                <input type="text" name="photo" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input onChange={handalpassword} type="password" value={password} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                <p className='text-red-500'>{passwordError}</p>
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;