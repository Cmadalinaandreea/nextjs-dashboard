'use client';
// components/Home.tsx

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

const Home: React.FC = () => {
  const firstText = useRef<HTMLParagraphElement>(null);
  const secondText = useRef<HTMLParagraphElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (slider.current) {
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => (direction = e.direction * -1),
        },
        x: '-500px',
      });
    }

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    if (firstText.current) {
      gsap.set(firstText.current, { xPercent: xPercent });
    }

    if (secondText.current) {
      gsap.set(secondText.current, { xPercent: xPercent });
    }

    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <main className="relative flex h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="fixed z-[-1] h-full w-full  object-cover"
        src="/background-video1.mp4"
      />

      <div className="relative  left-[-20px] top-52 rotate-[270deg]">
        <p className="text-[12px] text-slate-200 opacity-70 sm:text-sm">
          e-learning
        </p>
        <hr />
      </div>

      <div className="absolute flex w-full flex-col items-center justify-center self-center text-white sm:text-5xl">
        <p className="mx-8 mb-4 text-center">
          Build your knowledge. Fail. Learn. Grow. Repeat.That's the learning
          process on our platform.
        </p>

        <Link
          href="/test/about"
          className="w-30 btn text-[10px] text-green-400 opacity-80 sm:w-60 sm:text-sm"
        >
          Get Started
        </Link>
      </div>

      <div className="absolute top-[calc(100vh-50px)]">
        <div ref={slider} className="relative whitespace-nowrap">
          <p
            ref={firstText}
            className="relative m-0 pr-12 text-sm font-semibold text-slate-200 sm:text-xl"
          >
            HTML - CSS - JavaScript - TypeScript - React - Angular - Vue.js -
            Node.js - Express.js - SQL - MongoDB - Firebase - Adobe XD - Figma -
            Sketch - React Native - Flutter - SEO - Social Media Marketing -
            Agile - Scrum - Kanban - Jira
          </p>
          <p
            ref={secondText}
            className="absolute left-full top-0 pr-12 text-sm font-semibold text-slate-200 sm:text-xl"
          >
            HTML - CSS - JavaScript - TypeScript - React - Angular - Vue.js -
            Node.js - Express.js - SQL - MongoDB - Firebase - Adobe XD - Figma -
            Sketch - React Native - Flutter - SEO - Social Media Marketing -
            Agile - Scrum - Kanban - Jira
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
