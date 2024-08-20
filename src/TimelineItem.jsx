import React from 'react';

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`mb-8 flex justify-between ${isEven ? 'flex-row-reverse' : 'items-center'} w-full`}>
      <div className="order-1 w-3/12"></div>
      <div className={` flex items-center order-1 bg-gray-800 shadow-xl px-5 h-8 rounded-full ${isEven ? 'm-10' : ''}`}>
        <h1 className="mx-auto font-semibold text-lg text-white ">{item.date}</h1>
      </div>
      <div className={`order-1 ${isEven ? 'mr-auto' : 'ml-auto'} bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4`}>
        <h3 className="mb-3 font-bold text-gray-800 text-xl">{item.title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{item.description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
