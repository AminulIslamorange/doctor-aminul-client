import React, { useContext } from 'react';
import { PhotoView } from 'react-photo-view';
import ReviewCard from './Child/ReviewCard';
import { AuthContext } from '../contexts/UserContext';
import AddReviewForm from './Child/AddReviewForm';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
const SingleService = () => {
    let { id } = useParams()
    const [data, setData] = useState({})
    const [reviews, setReviews] = useState([])
    const [refresh, setRefresh] = useState(false);
    let img = data?.mainimage
    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`).then(res => res.json()).then(data => setData(data?.data))
        img = data?.mainimage
        fetch(`http://localhost:5000/reviews/${id}`).then(res => res.json()).then(data => setReviews(data?.data))
        img = data?.mainimage
    }, [refresh])

    const { user, logout } = useContext(AuthContext)

    let ratings = []
    for (let i = 0; i < Number(data?.rating); i++) {
        ratings.push(i)
    }

    return (
        <div className="min-h-screen ">
           <Helmet>
        <title>Details - Dr Muhammad Aminul</title>
      </Helmet>
            <div className="lg:max-w-7xl mx-auto px-4   ">
                {/* Coomon Top */}
                <div className='mb-6'>
                    <img className='-z-10 block' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXXycPdbrOKY3mWden26R5BFOZpjH8BLViP0Vxoyc7UuVZW956LVU6cePF-UYJ0SOeDI&usqp=CAU" alt="" />
                    <h3 className=' text-2xl font-bold z-10 ml-24 -mt-24 text-blue-500 '>{data?.title}</h3>
                </div>

                <div className="md:flex gap-4 pt-10 ">
                    <div className="img md:w-2/4 ">
                        <PhotoView src={img}>
                            <img className='rounded-lg max-w-md shadow w-full h-[300px]  ' src={img} alt="" />
                        </PhotoView>

                    </div>
                    <div className="info p-2 md:w-3/4">
                        <h3 className='text-3xl font-bold text-gray-600 mb-3'>{data?.title}
                        </h3>

                        <div className='flex justify-between w-full mb-3'>
                            <p className='text-lg font-bold'>Price: ${data?.price}</p>
                            <div className='text-lg font-bold flex items-center gap-1'>
                                <h3>Reviews : </h3>
                                {
                                    ratings.map(r => <img key={r} className='w-5 h-5' src="https://freeiconshop.com/wp-content/uploads/edd/star-curved-flat.png" alt="" />)

                                }
                            </div>

                        </div>
                        {/* short des */}
                        <p className='px-2 py-2 bg-green-100 text-lg rounded-lg text-yellow-900 max-w-max'> <span className='font-bold'>Service Id:</span>  {id}</p>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque delectus ipsum quos! Quo exercitationem itaque totam recusandae placeat vepnaro? Natus totam ipsa ducimus voluptatibus inventore ab obcaecati harum accusantium animi recusandae aperiam quasi laboriosam pariatur laborum est eum quibusdam ipsam impedit quod, dolorem rem alias cumque placeat deserunt? Placeat ad dolor nobis in repellendus esse accusantium quos corrupti, architecto, impedit odit,  </p>
                    </div>
                </div>
                {/* Full Description */}
                <div className='p-2 md:p-0 mt-2'>
                    <p className='text-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rem ipsa exercitationem nesciunt, voluptas impedit. Nemo id culpa dolorum officia quaerat cum cupiditate illum temporibus suscipit totam voluptate a eaque consequuntur fuga incidunt veniam, provident libero dolores similique rerum corporis at tempore magni perspiciatis. Nobis debitis qui atque architecto. Harum, debitis reprehenderit. Id nulla harum libero molestiae, eos illum ducimus molestias suscipit ipsa possimus earum eum ullam accusamus a quis recusandae quo vitae, numquam assumenda veritatis maxime reiciendis. Voluptatum dolorum repudiandae velit commodi enim vitae iste libero, ea quas tempore, molestiae dignissimos voluptate sint! Quasi culpa consectetur quidem maiores temporibus, consequatur deleniti deserunt, sapiente quos asperiores, impedit est. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe doloremque totam nesciunt earum consequuntur quam ducimus sint, iusto quo cumque dolores delectus fugiat exercitationem dolor repudiandae quasi illum impedit minima placeat nemo molestias fuga aliquid! Facere aliquam necessitatibus quaerat corrupti inventore exercitationem eaque deserunt aliquid natus vitae provident tenetur itaque culpa ex, sunt id reprehenderit molestias odio temporibus totam beatae. Iure dolores rerum, nemo aspernatur sequi commodi voluptatum fugit voluptas eos similique totam! Suscipit officia distinctio, laboriosam molestiae dolores accusantium doloribus amet nesciunt at sint nobis ex veritatis minus? Dolor eaque eius, facilis deleniti rem officia sed veritatis accusantium numquam repudiandae id quos, voluptas sint, molestiae itaque? </p>
                </div>
                {/* reviews */}
                <div className='mt-6'>
                    <div>
                        <h3 className='text-2xl font-bold text-gray-500 my-3'>Reviews</h3>
                        {user?.email ? <AddReviewForm setRefresh={setRefresh} /> : <Link className='flex items-center gap-4  text-blue-500 text-lg  my-4 underline' to={'/login'}><img className='w-6 h-6' src='https://pngimg.com/uploads/plus/plus_PNG95.png' /> Please login to add a review</Link>}
                    </div>

                    {
                        reviews.map(r => <ReviewCard key={r._id} data={r}   />)
                    }
                </div>

            </div>
        </div>
    );
};

export default SingleService;