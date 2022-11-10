import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <section className='flex items-center h-screen p-16  text-gray-900'>
            <Helmet>
        <title>Oops - Dr Muhammad Aminul</title>
      </Helmet>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <img src="https://cdn5.vectorstock.com/i/thumb-large/73/84/mad-doctor-with-syringe-pop-art-vector-19747384.jpg" alt="" />
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
                        <span className='sr-only'>Error</span>404
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        Sorry, we couldn't find this page.
                    </p>
                    <Link
                        to='/'
                        className='px-8 py-3 font-semibold rounded bg-blue-500 hover:bg-orange-500 text-gray-100'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage
