import React from 'react';
import { PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const TopSection = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 min-h-[50vh] pt-10 rounded-lg  bg-[url('https://img.freepik.com/free-vector/digital-technology-background-with-abstract-wave-border_53876-117508.jpg?w=2000')] bg-cover bg-no-repeat ">
                <div className="lg:flex flex-row-reverce">
                    <div className='w-full flex justify-end lg:order-2 order-1'>

                        <PhotoView src="https://medeor.ae/abu-dhabi/wp-content/uploads/sites/2/2022/06/Amaar-Adam-Mohamed-Adam.png">
                            <img className='hover:translate-x-2  duration-300' src="https://medeor.ae/abu-dhabi/wp-content/uploads/sites/2/2022/06/Amaar-Adam-Mohamed-Adam.png" alt="" />
                        </PhotoView>
                    </div>
                    <div className='flex flex-col  justify-center w-full mt-10 '>
                        <h3 className='text-4xl text-gray-600 font-bold mb-3 '>Dr. Muhammad Aminul (MBBS)</h3>
                        <h3 className='text-lg mb-3'>Dr. Muhammad Aminul (MBBS) is a Neurosurgeon in Comilla. His qualification is MBBS, MS (Neurosurgery). He is a Head in the Department of Neurosurgery at Central Medical College & Hospital, Comilla. He regularly provides treatment to his patients at Gomati Hospital, Comilla. Practicing hour of Dr. Muhammad Zainul Aminul Sohag at Gomati Hospital, Comilla is 9am to 5pm (Only Friday).</h3>
                        <div className="flex gap-6 mb-6">
                            <button className="py-2 w-44 list-none px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300 text-lg font-bold">
                                <Link to={'/blog'}>Read More</Link></button>
                            <button className="py-2 w-44 list-none px-3 bg-[#C3FFFC] hover:bg-green-300 text-yellow-900 hover:text-blue-500 rounded transition duration-300 text-lg font-bold"><Link to={'/services'}>Services</Link></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TopSection;