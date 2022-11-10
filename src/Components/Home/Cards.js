import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Cards = ({ services, index }) => {
    // console.log(services);
    return (
        <>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">

                <PhotoProvider>
                    <div className="foo">
                        <PhotoView key={index} src={services?.img}>
                            <img className='h-52 w-full' src={services?.img} alt="" />
                        </PhotoView>
                    </div>
                </PhotoProvider>
                {/* ----------------phot zoom ent--------------- */}

                <div className="card-body">
                    <div className="justify-between flex">
                        <h2 className="card-title text-3xl"> {services?.title} </h2>
                        <div className="badge badge-secondary ml-2">{services?.rating}</div>
                    </div>
                    <p>{services?.details.slice(0, 100) + "..."}</p>
                    <div className="card-actions justify-between">
                        <h1 className="text-1xl text-success"> Price: {services?.price}</h1>
                        <Link to={`/card_details/${services?._id}`} > <button           type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-sky-400 dark:text-gray-900">Details.</button> </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;