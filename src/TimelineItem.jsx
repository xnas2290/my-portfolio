// import React from 'react';

// const TimelineItem = ({ item, index }) => {
//   const isEven = index % 2 === 0;

//   return (
//     <div className={`mb-8 flex justify-between ${isEven ? 'flex-row-reverse' : 'items-center'} w-full`}>
//       <div className="order-1 w-3/12"></div>
//       <div className={` flex items-center order-1 dark:bg-gray-600 bg-gray-800 shadow-xl px-5 h-8 rounded-full ${isEven ? 'm-10' : ''}`}>
//         <h1 className="mx-auto font-semibold text-lg text-white ">{item.date}</h1>
//       </div>
//       <div className={`order-1 ${isEven ? 'mr-auto' : 'ml-auto'} bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4`}>
//         <h3 className="mb-3 font-bold text-gray-800 text-xl">{item.title}</h3>
//         <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{item.description}</p>
//       </div>
//     </div>
//   );
// };

// export default TimelineItem;
import React from 'react';

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`mb-8 flex flex-col sm:flex-row justify-between ${isEven ? 'sm:flex-row-reverse' : 'items-center'} w-full`}>

      <div className={`order-2 sm:order-2 w-full sm:w-5/12 sm:${isEven ? 'mr-auto' : 'ml-auto'} bg-gray-400 rounded-lg shadow-xl px-6 py-4`}>
        <h3 className="mb-3 font-bold text-gray-800 text-xl">{item.title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{item.description}</p>
      </div>
      <div className={`order-1 sm:order-1 w-full sm:w-3/12 mb-2 sm:mb-0`}>
        <div className={`flex items-center dark:bg-gray-600 bg-gray-800 shadow-xl px-5 h-8 rounded-full `}>
          <h1 className="mx-auto font-semibold text-lg text-white">{item.date}</h1>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;



