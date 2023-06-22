import React from "react";

const AboutPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Chef Hunter
            </h1>
            <div className="mt-6">
                <p className="text-xl text-gray-500">
                    Chef Hunter is a website dedicated to showcasing the culinary talents
                    of chefs from around the world. Whether you're looking for traditional
                    recipes from your favorite cuisine or innovative dishes that push the
                    boundaries, you'll find it all here.
                </p>
                <p className="text-xl text-gray-500 mt-4">
                    Our mission is to celebrate the artistry and creativity of chefs and
                    help food enthusiasts discover new flavors and techniques. We believe
                    that food has the power to bring people together, and we're proud to
                    play a small part in that.
                </p>
                <p className="text-xl text-gray-500 mt-4">
                    Thank you for visiting Chef Hunter. We hope you enjoy exploring our
                    collection of recipes and discovering the amazing chefs behind them.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
