import { useState } from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router";

import FloatingIslandBanner from "./assets/floating_island_banner.png";
import FloatingIslandBackground from "./assets/floating_island_background.png";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="from-background to-backgroundDark bg-gradient-to-b py-3">
      <div
        style={{
          backgroundImage: `url(${FloatingIslandBackground})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="absolute bottom-0 top-0 z-0 h-screen w-screen opacity-75"
      ></div>

      <header className="border-accent mx-auto flex w-11/12 items-center justify-between rounded-lg border bg-transparent p-2">
        <h1 className="font-bold text-text text-lg">floating islands logo</h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex h-10 w-10 items-center justify-center"
        >
          <motion.div
            initial={{ rotate: 0, y: 0 }}
            animate={isOpen ? { rotate: 45, y: -4 } : { rotate: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="absolute h-1 w-8 rounded-lg bg-white"
          />

          <motion.div
            initial={{ opacity: 1 }}
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute h-1 w-8 rounded-lg bg-white"
          />

          <motion.div
            initial={{ rotate: 0, y: 0 }}
            animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            className="absolute h-1 w-8 rounded-lg bg-white"
          />
        </button>
      </header>

      <div
        style={{
          backgroundImage: `url(${FloatingIslandBanner})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="mx-auto my-12 w-11/12 rounded-lg px-4 py-7"
      >
        <h2
          style={{
            textShadow: "0 0 15px rgba(137, 29, 246, 0.5)",
            letterSpacing: "2px",
          }}
          className="text-accent my-3 text-center text-5xl font-bold capitalize shadow-[#891df680]"
        >
          about us
        </h2>
        <p className="text-center text-lg font-bold text-gray-950">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <main className="text-text border-b px-7 pb-20">
        <h2 className="my-5 text-4xl font-bold uppercase">Ready?</h2>

        <p className="text-text font-inconsolata">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          ducimus, quod corrupti voluptate quo illo veritatis, unde doloremque
          recusandae nobis quam rem suscipit voluptatum facilis quisquam eaque
          nostrum. Voluptatem, dicta. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Debitis nisi porro laudantium officiis incidunt
          quidem repellat vero repudiandae maiores consequuntur nemo itaque
          aliquid dolorum optio voluptas labore, ipsam possimus suscipit! <br />{" "}
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          corporis, corrupti dolorum quia totam molestiae nesciunt officiis
          asperiores amet magnam ut saepe doloremque et ex, ipsa porro cumque
          ducimus laborum!
        </p>
      </main>

      <footer className="text-text p-5">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elitOptio </p>

        <nav className="text-text my-3 flex flex-col gap-y-2">
          <h3 className="text-xl font-bold uppercase text-white">sitemap</h3>
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>

          <NavLink to="/about" className="hover:underline">
            About
          </NavLink>

          <NavLink to="/gallery" className="hover:underline">
            Gallery
          </NavLink>
        </nav>

        <div className="my-5 text-gray-400">
          {new Date().getFullYear()} All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default About;
