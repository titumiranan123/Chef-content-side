import React, { useContext, useEffect, useState } from 'react';
import Chefcard from './Chefcard';
import { useLocation } from 'react-router-dom';
import { Authcontext } from '../../../Provider/Authprovider';

const Chefdata = () => {
    const [loaddata, setLoaddata] = useState([]);
    const { loadding, setLoading } = useContext(Authcontext);
    const location = useLocation()

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-titumiranan123.vercel.app/data')
            .then(res => res.json())
            .then(data => setLoaddata(data))
        setLoading(false)
    }, [])
    return (
        <>
            <h1 className='mt-5 mb-5 text-3xl font-bold'>Popular Chef</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                {
                    loaddata.map(c => <Chefcard key={c.id} chefData={c}>
                    </Chefcard>)
                }
            </div>
        </>
    );
};

export default Chefdata;