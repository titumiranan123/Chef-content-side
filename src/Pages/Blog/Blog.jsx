import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <p className="text-bold text-3xl" > <span className="text-bold text-red-500 text-3xl">Q1.</span>  Tell us the differences between uncontrolled and controlled components.</p>
                <div className='border p-5 bg-gray-200'>
                    <p>
                        A controlled component is bound to a value, and its changes will be handled in code by using event-based callbacks. Here, the input form element is handled by the react itself rather than the DOM. In this, the mutable state is kept in the state property and will be updated only with setState() method.

                        Controlled components have functions that govern the data passing into them on every onChange event occurs. This data is then saved to state and updated with setState() method. It makes component have better control over the form elements and data.
                    </p>
                    <p>
                        Uncontrol Component :
                        If you have gone through the above points and examples of the controlled component then you have already guessed how uncontrolled components work. Yes, they don’t use any states on input elements or any event handler. This type of component doesn’t care about an input element’s real-time value changes.

                        You might be wondering now, then how would we get the input element’s value?

                        Well, that’s where Refs comes to the rescue. For the uninitiated, Refs in React ecosystem works like pointers that give access to DOM nodes. In the uncontrolled components, we use Refs to access the values of input elements.
                    </p>
                </div>

            </div>
            <div>
                <p className="text-bold text-3xl" > <span className="text-bold text-red-500 text-3xl">Q2.</span>  What is a custom hook, and why will you create a custom hook?</p>
                <div className='border p-5 bg-gray-200'>

                    <p>
                        Reusability
                        Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                        Readability
                        Instead of using High-Order Components (HOCs), one can use custom hooks to improve the readability of the code. Complex codes can become hard to read if layers of providers surround the components, consumers, HOCs, render props, and other abstractions, generally known as wrapper hell.
                    </p>
                </div>

            </div>
            <div>
                <p className="text-bold text-3xl" > <span className="text-bold text-red-500 text-3xl">Q3.</span>  Tell us the difference between nodejs and express js.</p>
                <div className='border p-5 bg-gray-200'>

                    <p>
                        Node.js is a runtime environment for executing JavaScript code on the server, while Express.js is a web framework built on top of Node.js that provides additional tools and features for building web applications.
                        The main difference between Node.js and Express.js is that Node.js is a runtime environment for executing JavaScript on the server, while Express.js is a web framework that runs on top of Node.js. Node.js provides the platform for building server-side applications, while Express.js provides the tools and structure for building web applications on top of that platform.
                    </p>
                </div>

            </div>
            <div className='mb-2'>
                <p className="text-bold text-3xl" > <span className="text-bold text-red-500 text-3xl">Q4.</span>  How to validate React props using PropTypes</p>
                <div className='border p-5 bg-gray-200'>
                    <p>

                        React provides a way to validate props passed to a component using a library called PropTypes. PropTypes is a type-checking library that helps you ensure that the props passed to your components are of the expected type.

                        To use PropTypes in your React components, you need to import it from the 'prop-types' library and define the propTypes object for your component.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Blog;