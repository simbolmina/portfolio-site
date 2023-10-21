'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 sm:text-5xl lg:text-8xl lg:leading-normal text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Lorem ipsum
            </span>
            <p> dolor, sit amet</p>
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            eligendi unde voluptas commodi dolorem, pariatur ducimus
            exercitationem aut porro?
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-pink-500 hover:bg-slate-200 text-white font-base">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-pink-500 hover:bg-slate-800 text-white  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] relative">
            <Image
              src="/images/hero.png"
              alt="phone image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
