"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-green-600">
              I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Franco",
                1000,
                "Web Developer",
                1000,
                "Next JS Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            My goal is to help you grow your business!
          </p>
          <div>
            <Link
              onClick={() => alert("Contact Me!")}
              href="/"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-gray-500 to-green-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
           
            <a
              href="/ruta/a/tu/cv.pdf"  // Reemplaza esto con la ruta correcta a tu archivo PDF
              download="TuNombre_CV.pdf"  // Puedes personalizar el nombre del archivo descargado
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-500 to-gray-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>

          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#ffffff] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={200}
              height={200}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
