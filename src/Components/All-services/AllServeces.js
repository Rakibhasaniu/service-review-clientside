import React, { useEffect, useState } from 'react';
import useTitle from '../../hook/useTitle';
import AllCards from './AllCards';

const AllServeces = () => {
    useTitle('All Service');
    const [services, setServices] = useState([]);
    const [loding, setLoder] = useState(true)

    useEffect(() => {
        fetch('https://door-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setLoder(false);
                setServices(data)
            })
            .catch(err => err.message)
    }, [services])
    if (loding) {
        // console.log("Loding runing");
        return <div className="flex items-center justify-center space-x-1 mt-[67px]">
            <progress className="progress h-1 progress-secondary"></progress>
        </div>
    }
    // console.log(services);
    return (
        <>
            <section className='banners mt-6'>
                <div className="header">
                    <h1 className='text-4xl text-white text-bold mt-10 text-center dark:bg-gray-800 py-2' >All Services</h1>
                    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-10 lg:px-40">

                        {
                            services.map((servicess, index) => <AllCards index={index} services={servicess} key={servicess._id}></AllCards>)
                        }

                    </div>
                </div>
            </section>
        </>
    );
};

export default AllServeces;