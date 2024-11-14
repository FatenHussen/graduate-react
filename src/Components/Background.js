import React, { useEffect, useState } from 'react';

const Background = () => {

    const [particles, setParticles] = useState([]);

  useEffect(() => {
    const frame = () => {
      updateParticles();
      requestAnimationFrame(frame);
    };
    frame();
  }, []);

  const addParticle = () => {
    setParticles((prevParticles) => [
      ...prevParticles,
      {
        x: Math.random(),
        y: Math.random(),
        xVel: (Math.random() - 0.5) * 0.2,
        yVel: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 50 + 50,
      },
    ]);
  };

  const updateParticles = () => {
    setParticles((prevParticles) =>
      prevParticles
        .map((p) => ({
          ...p,
          x: p.x + p.xVel / 35,
          y: p.y + p.yVel / 35,
        }))
        .filter((p) => p.x > -0.2 && p.x < 1.2 && p.y > -0.2 && p.y < 1.2)
    );

    if (particles.length < 5 && Math.random() < 0.05) {
      addParticle();
    }
  };

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
            backgroundColor: '#0960d0',
            top: `${particle.y * window.innerHeight}px`,
            left: `${particle.x * window.innerWidth}px`,
            filter: 'url(#goo)',
          }}
        ></div>
      ))}
    </div>
  );
};

export default Background