import { motion } from "motion/react";

import FloatingIslandBackground from "./assets/floating_island_background.png";
import FloatingIslandOne from "./assets/floating_island_one.png";
import FloatingIslandTwo from "./assets/floating_island_two.png";
import FloatingIslandThree from "./assets/floating_island_three.png";

function Home() {
  return (
    <div className="from-background to-backgroundDark flex h-screen w-screen flex-col justify-center overflow-hidden bg-gradient-to-b">
      <div
        style={{
          backgroundImage: `url(${FloatingIslandBackground})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="absolute bottom-0 top-0 z-0 h-screen w-screen opacity-75"
      ></div>

      <motion.img
        src={FloatingIslandOne}
        className="absolute left-[10%] top-[15%] h-auto w-40"
        animate={{
          y: ["0%", "-15%", "10%", "-5%", "0%"],
          x: ["0%", "8%", "-8%", "4%", "0%"],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 0,
        }}
      />

      <motion.img
        src={FloatingIslandTwo}
        className="absolute bottom-[10%] right-[10%] h-auto w-40"
        animate={{
          y: ["0%", "-20%", "15%", "0%", "5%"],
          x: ["0%", "10%", "-10%", "0%", "6%"],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 1,
        }}
      />

      <motion.img
        src={FloatingIslandThree}
        className="absolute right-[5%] top-[30%] h-auto w-40"
        animate={{
          y: ["0%", "-10%", "5%", "0%", "-15%", "10%", "0%"],
          x: ["0%", "6%", "-6%", "2%", "0%"],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 2,
        }}
      />

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: [0, 50, 0], opacity: 1 }}
        className="px-6 text-left md:px-12"
      >
        <h1 className="text-title font-metalMania my-2 text-5xl font-bold uppercase">
          Floating <span className="block">Island</span>
        </h1>
        <p className="text-text mb-4 text-left capitalize">
          The NFT banner collection!
        </p>

        <motion.button
          role="link"
          onClick={() => (window.location.href = "/about")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg border border-black bg-white px-6 py-3 text-black"
        >
          <motion.span
            initial={{ x: "0%" }}
            whileHover={{ x: "100%" }}
            whileTap={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-accent absolute inset-0"
          />
          <span className="relative z-10 font-bold uppercase">
            Explore &rarr;
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Home;
