import { motion } from "motion/react";

const Contact = () => {
  return (
    <div id="contact" className=" flex min-h-[70vh] min-w-full items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-5xl text-center md:text-7xl">
          <span className="text-transparent bg-gradient-to-r from-zinc-500 to-stone-500 bg-clip-text">Get in Touch</span>
        </h1>

        <p className="text-lg font-semibold text-center text-zinc-400 ">If you are interested in working with us, you can fill out the form below</p>

        <form action="" className="w-full lg:w-2/3 lg:mx-auto">
          <div className="w-full px-4 mb-8">
            <label htmlFor="name" className="text-base font-bold text-white">
              Name
            </label>
            <input type="text" name="" id="name" className="w-full p-3 rounded-md bg-slate-300 text-dark focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          </div>
          <div className="w-full px-4 mb-8">
            <label htmlFor="email" className="text-base font-bold text-white">
              Email
            </label>
            <input type="email" name="" id="email" className="w-full p-3 rounded-md bg-slate-300 text-dark focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
          </div>
          <div className="w-full px-4 mb-8">
            <label htmlFor="message" className="text-base font-bold text-white">
              Message
            </label>
            <textarea id="message" className="w-full h-32 p-3 rounded-md bg-slate-300 text-dark focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"></textarea>
          </div>
          <div className="w-full px-4">
            <button className="w-full px-8 py-3 text-base font-semibold text-white transition duration-500 bg-gray-500 rounded-full hover:opacity-80 hover:shadow-lg">Submit</button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
