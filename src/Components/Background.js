// import React, { useEffect, useState } from 'react';

// const Background = () => {

//     const [particles, setParticles] = useState([]);

//   useEffect(() => {
//     const frame = () => {
//       updateParticles();
//       requestAnimationFrame(frame);
//     };
//     frame();
//   }, []);

//   const addParticle = () => {
//     setParticles((prevParticles) => [
//       ...prevParticles,
//       {
//         x: Math.random(),
//         y: Math.random(),
//         xVel: (Math.random() - 0.5) * 0.2,
//         yVel: (Math.random() - 0.5) * 0.2,
//         size: Math.random() * 50 + 50,
//       },
//     ]);
//   };

//   const updateParticles = () => {
//     setParticles((prevParticles) =>
//       prevParticles
//         .map((p) => ({
//           ...p,
//           x: p.x + p.xVel / 35,
//           y: p.y + p.yVel / 35,
//         }))
//         .filter((p) => p.x > -0.2 && p.x < 1.2 && p.y > -0.2 && p.y < 1.2)
//     );

//     if (particles.length < 5 && Math.random() < 0.05) {
//       addParticle();
//     }
//   };

//   return (
//     <div
//       id="container"
//       className="fixed inset-0 z-0 bg-white overflow-hidden blur-xl"
//       style={{ filter: 'url(#goo)' }}
//     >
//       <svg>
//         <filter id="goo">
//           <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
//           <feColorMatrix
//             in="blur"
//             mode="matrix"
//             values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
//             result="goo"
//           />
//           <feBlend in="SourceGraphic" in2="goo" />
//         </filter> 
//       </svg>
//       {particles.map((particle, index) => (
//         <div
//           key={index}
//           className="absolute rounded-full"
//           style={{
//             width: `${particle.size}px`,
//             height: `${particle.size}px`,
//             backgroundColor: '#0960d0',
//             top: `${particle.y * window.innerHeight}px`,
//             left: `${particle.x * window.innerWidth}px`,
//             filter: 'url(#goo)',
//           }}
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default Background

import React, { useEffect, useState } from 'react';

const Background = () => {
  const [particles, setParticles] = useState([{
  size: 99.36037601635509,
  x: 0.8546142443111888 ,
  y : 0.7555477819091381
  },

  {
    x: 0.9454208965684752,
    y: 0.44342169184872104, 
    size: 84.96447914584829
  },
  {x: 0.07264754761257741, y: 0.6735852366703639, size: 85.59469601240289},
  {x: 0.4555615634783492, y: 0.8898598891862821, size: 64.72833073299053},
  {x: 0.7755615634783492, y: 0.4098598891862821, size: 64.72833073299053},
  {x: 0.4555615634, y: 0.889859889186, size: 64.72833073299053},
  {x: 0.4555615634783492, y: 0.2098598891862821, size: 64.72833073299053},
  {x: 0.1055615634783492, y: 0.2098598891862821, size: 64.72833073299053},
  {x: 0.2555615634783492, y: 0.3298598891862821, size: 64.72833073299053},
  {x: 0.4955615634783492, y: 0.5098598891862821, size: 64.72833073299053}

]);

  // useEffect(() => {
  //   // Remove the animation frame logic since we don't need updates
  //   addParticle(); // Create initial particles
  // }, []);

  const addParticle = () => {
    setParticles((prevParticles) => [
      ...prevParticles,
      {
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 50 + 50,
      },
    ]);
  };

  console.log('pp', particles)

  return (
    <div
      id="container"
      className="fixed inset-0 z-0 bg-white overflow-hidden blur-xl"
      style={{ filter: 'url(#goo)' }}
    >
      <svg>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: '#0693be83',
            top: `${particle.y * window.innerHeight}px`,
            left: `${particle.x * window.innerWidth}px`,
            filter: 'url(#goo)',
          }}
        ></div>
      ))}
    </div>
  );
};

export default Background;