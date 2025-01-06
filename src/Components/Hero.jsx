import heropic from "../Images/profpic.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div id="home" className=" mt-24  max-w-[1200px] mx-auto relative">
      <div className="grid gap-8 md:grid-cols-2 place-items-center">
        <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <TypeAnimation sequence={["Staff Laboratory", 1000, "Programmer", 1000, "Gamer", 1000]} speed={50} repeat={Infinity} className="mb-4 text-xl font-bold text-gray-400 md:text-5xl italic-" />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="mb-4 text-5xl tracking-tight text-gray-200 md:text-7xl">
            HEY, I AM <br />
            <span className="text-white ">Indra</span>
          </motion.p>{" "}
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6">
            I work as Laboratory Computer Staff at USTI(universitas Sains dan Teknologi Indonesia), I want to show the projects that I have worked on before.
          </motion.p>
        </motion.div>

        <motion.img src={heropic} className=" w-[300px] md:w-[450px]" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 1.5 }}></motion.img>
      </div>

      <div className="absolute inset-0 hidden md:block"></div>
    </div>
  );
};

export default Hero;
