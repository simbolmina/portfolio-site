import React from 'react';

const achievementsList = [
  {
    metric: 'Projects',
    value: '100',
    postfix: '+',
  },
  {
    prefix: '~',
    metric: 'Users',
    value: '100,000',
  },
  {
    metric: 'Awards',
    value: '7',
  },
  {
    metric: 'Years',
    value: '5',
  },
];

const ArchivementsSection = () => {
  return (
    <section className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((arch, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <h2 className="text-white text-4xl font-bold">
                {arch.prefix}
                {arch.value}
                {arch.postfix}
              </h2>
              <p className="text-[#adb7be] text-base">{arch.metric}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ArchivementsSection;

// 'use client';
// import React from 'react';
// import dynamic from 'next/dynamic';

// const AnimatedNumbers = dynamic(
//   async () => {
//     const module = await import('react-animated-numbers');
//     return module.default;
//   },
//   { ssr: false }
// );

// const achievementsList = [
//   {
//     metric: 'Projects',
//     value: 100,
//     postfix: '+',
//   },
//   {
//     prefix: '~',
//     metric: 'Users',
//     value: 100.0,
//   },
//   {
//     metric: 'Awards',
//     value: 7,
//   },
//   {
//     metric: 'Years',
//     value: 5,
//   },
// ];

// const ArchivementsSection = () => {
//   return (
//     <section className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//       <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
//         {achievementsList.map((arch, index) => {
//           return (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center"
//             >
//               <h2 className="text-white text-4xl font-bold flex">
//                 {arch.prefix}
//                 <AnimatedNumbers
//                   includeComma
//                   animateToNumber={arch.value}
//                   locale="en-US"
//                   configs={(_, index) => {
//                     return {
//                       mass: 1,
//                       friction: 100,
//                       tension: 140 * (index + 1),
//                     };
//                   }}
//                 />
//                 {arch.postfix}
//               </h2>
//               <p className="text-[#adb7be] text-base">{arch.metric}</p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default ArchivementsSection;
