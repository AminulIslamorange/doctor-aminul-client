import React from 'react';

const Extra1 = () => {
    return (
        <div className=" bg-[url('https://angfuzsoft.com/html/gesund/demo/assets/img/bg/cta-bg-1-1.png')]">
            <div className="lg:max-w-7xl mx-auto px-4  py-20  ">
                <div className="lg:flex">
                    <h3 className='lg:w-2/4 text-center lg:text-4xl text-2xl mb-3 font-extrabold text-white'>We’re welcoming new patients and can’t wait to meet you!</h3>
                    <div className="flex lg:w-2/4 items-center justify-center gap-6 ">
                        <button className='px-8 py-3 rounded-lg border-white border text-lg text-white font-bold hover:bg-white hover:text-gray-900 duration-300'>Register</button>
                        <button className='px-8 py-3 rounded-lg border-orange-500 border text-lg text-white font-bold hover:bg-orange-500 hover:text-gray-900 duration-300'>Services</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra1;