import React from 'react';

const Header = () => {
    return (

        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://as2.ftcdn.net/v2/jpg/05/88/24/01/1000_F_588240152_4pXUbYHk7YUU8SNThJTKJzxNeRLP6eaC.jpg" className="w-full opacity-50" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute  md:top-48 lg:top-[330px] lg:left-[520px] top-16 left-10 md:left-52">
                    <p className=' text-center text-3xl mx-auto lg:text-6xl font-bold text-black'>Wellcome to Recipe <br /> Community</p>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://as2.ftcdn.net/v2/jpg/05/88/24/01/1000_F_588240152_4pXUbYHk7YUU8SNThJTKJzxNeRLP6eaC.jpg" className="w-full opacity-50" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute  md:top-48 lg:top-[330px] lg:left-[520px] top-16 left-10 md:left-52">
                    <p className=' text-center text-3xl mx-auto lg:text-6xl font-bold text-black'>Wellcome to Recipe <br /> Community</p>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://as2.ftcdn.net/v2/jpg/05/88/24/01/1000_F_588240152_4pXUbYHk7YUU8SNThJTKJzxNeRLP6eaC.jpg" className="w-full opacity-50" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute  top-48 left-52">
                    <p className=' text-center text-3xl mx-auto lg:text-6xl font-bold text-black'>Delicious Recipes <br /> Awaiting</p>
                </div>
            </div>

        </div>
    );
};

export default Header;