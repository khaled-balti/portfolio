import React, { useState, useEffect, useRef } from 'react';
import classes from './Skill.module.css';

const Skill = ({ children, percentage, name }) => {
  const [counter, setCounter] = useState(0);
  const [inView, setInView] = useState(false);
  const counterRef = useRef(counter);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
          setCounter(0);
          counterRef.current = 0;
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        if (counterRef.current < percentage) {
          setCounter(prev => prev + 1);
          counterRef.current = counterRef.current + 1;
        } else {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [inView, percentage]);

  return (
    <div ref={skillRef} className={`${classes['border-box']} d-flex flex-column align-items-center`}>
      <div className={`${classes.outer} mb-4`}>
        <div className={classes.inner}>
          {children}
        </div>
      </div>
      {inView && (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" style={{ '--dash-offset': 472 - 472 * percentage / 100 + 25, '--anim-duration': `${30 * percentage / 1000}s` }}>
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" strokeLinecap="round" />
        </svg>
      )}
      <p className='fs-2 fw-semibold mb-2' style={{ color: "#e8fc00" }}>{counter}%</p>
      <p className='fs-5' style={{ color: "#aaa" }}>{name}</p>
    </div>
  );
}

export default Skill;
