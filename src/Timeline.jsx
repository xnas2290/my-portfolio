// import React from 'react';
// import TimelineItem from './TimelineItem';

// const Timeline = ({ items }) => {
//   return (
//     <div className="container mx-auto w-full h-full">
//       <div className="relative wrap overflow-hidden p-10 h-full">
//         <div className="sm:border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
//         {items.map((item, index) => (
//           <TimelineItem key={index} item={item} index={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Timeline;






import React from 'react';
import TimelineItem from './TimelineItem';

const Timeline = ({ items }) => {
  return (
    <div className="container mx-auto w-full h-full px-4 sm:px-0">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border sm:left-1/2 sm:-translate-x-1/2"></div>
        {items.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;

