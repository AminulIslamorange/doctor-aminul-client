import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router';
import ServiceCard from './Child/ServiceCard';

const Services = () => {
    const [datas, setDatas] = useState([])
    console.log(datas);
    useEffect(() => {
        fetch('http://localhost:5000/services').then(res => res.json()).then(data => setDatas(data?.data))
    }, [])

    return (
        <div className="min-h-screen ">
             <Helmet>
        <title>Services - Dr Muhammad Aminul</title>
      </Helmet>
            <div className="lg:max-w-7xl mx-auto px-4   ">
                {/* Coomon Top */}
                <div className='mb-6'>
                    <img className='-z-10 block' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXXycPdbrOKY3mWden26R5BFOZpjH8BLViP0Vxoyc7UuVZW956LVU6cePF-UYJ0SOeDI&usqp=CAU" alt="" />
                    <h3 className='absulate text-2xl font-bold z-10 ml-24 -mt-24 text-blue-500 '>Services</h3>
                </div>

                <div className='grid  lg:grid-cols-3 gap-6 justify-center mb-10'>
                    {
                        datas?.map(data => <ServiceCard key={data._id} data={data} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;