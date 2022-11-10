// import React from 'react';
// import { PhotoProvider, PhotoView } from 'react-photo-view';
// import { FaTimes } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const AllCards = ({ services, index }) => {

//     return (
//         <>

//             <div className="card max-w-[300px]  dark:bg-gray-900 dark:text-gray-100 p-2 shadow-xl mt-3  ">

//                 <PhotoProvider>
//                     <div className="foo">
//                         <PhotoView key={index} src={services?.img}>
//                             <img className='h-52 w-full' src={services?.img} alt="" />
//                         </PhotoView>
//                     </div>
//                 </PhotoProvider>
                

//                 <div className="card-body">
//                     <div className="justify-between flex">
//                         <h2 className="card-title"> {services?.title} </h2>
//                         <div className="badge badge-secondary ml-2">{services?.rating}</div>
//                     </div>
//                     <p>{services?.details}</p>
//                     <div className="card-actions justify-between">
//                         <h1 className="text-3xl bold text-success">Price : {services?.price}</h1>
//                         <Link to={`/card_details/${services?._id}`} className=" px-8 py-[6px] btn-secondary rounded-lg text-black"><button           type="button"
//           className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-sky-400 dark:text-gray-900">Details.</button></Link>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AllCards;