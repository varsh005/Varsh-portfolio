import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { HiCodeBracket } from "react-icons/hi2";

import profile from "../assets/profile.png";
import Background from "../components/Background";
import resume from "../assets/resume/Resume.pdf";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      <Background />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true }}
            className="text-purple-400 text-lg mb-4 font-light tracking-wide"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="leading-none"
          >
            <span className="font-outfit font-thin text-5xl lg:text-[5.5rem] text-white leading-none tracking-tight">
              Varshini
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-8 space-y-4"
          >
            <h2 className="font-outfit font-semibold text-2xl lg:text-3xl text-white">
              Code. Design. Intelligence.
            </h2>

            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-xl">
              Crafting modern web experiences and intelligent solutions
              with creativity, clarity and purpose.
            </p>
          </motion.div>

          {/* Resume + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mt-8 flex-wrap"
          >

            {/* Resume */}
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                px-4 py-2.5
                rounded-full
                text-sm font-medium
                text-white
                border border-purple-500/30
                bg-white/5
                backdrop-blur-md
                hover:bg-purple-500/10
                hover:border-purple-400
                hover:text-purple-300
                transition-all duration-300
              "
            >
              Resume
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/varsh005"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10 h-10 rounded-full
                border border-purple-500/30
                bg-white/5
                backdrop-blur-md
                flex items-center justify-center
                text-gray-300
                hover:text-purple-300
                hover:border-purple-400
                hover:bg-purple-500/10
                transition-all duration-300
              "
            >
              <FaGithub className="text-lg" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/varshini-subramani"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10 h-10 rounded-full
                border border-purple-500/30
                bg-white/5
                backdrop-blur-md
                flex items-center justify-center
                text-gray-300
                hover:text-purple-300
                hover:border-purple-400
                hover:bg-purple-500/10
                transition-all duration-300
              "
            >
              <FaLinkedin className="text-lg" />
            </a>

            {/* Email */}
            <a
              href="mailto:varshinisubramani005@gmail.com"
              className="
                w-10 h-10 rounded-full
                border border-purple-500/30
                bg-white/5
                backdrop-blur-md
                flex items-center justify-center
                text-gray-300
                hover:text-purple-300
                hover:border-purple-400
                hover:bg-purple-500/10
                transition-all duration-300
              "
            >
              <FaEnvelope className="text-lg" />
            </a>

          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-[36px] bg-purple-500 blur-3xl opacity-25"></div>

            {/* Image */}
            <div className="relative p-2 rounded-[36px] border border-purple-500/40 bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(168,85,247,0.25)]">
              <img
                src={profile}
                alt="Varshini"
                className="w-[360px] lg:w-[420px] rounded-[30px] object-cover"
              />
            </div>

            {/* Floating Python Icon */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -left-8 top-10 glass p-4 rounded-2xl border border-purple-500/30"
            >
              <FaPython className="text-yellow-400 text-4xl" />
            </motion.div>

            {/* Floating React Icon */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -right-8 top-28 glass p-4 rounded-2xl border border-purple-500/30"
            >
              <FaReact className="text-cyan-400 text-4xl" />
            </motion.div>

            {/* Floating Django Icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -right-8 bottom-16 glass p-4 rounded-2xl border border-purple-500/30"
            >
              <SiDjango className="text-green-400 text-4xl" />
            </motion.div>

            {/* Floating Code Icon */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -left-8 bottom-20 glass p-4 rounded-2xl border border-purple-500/30"
            >
              <HiCodeBracket className="text-pink-400 text-4xl" />
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center animate-bounce">
        <div className="w-4 h-7 rounded-full border border-gray-500 flex items-start justify-center p-1 mb-1">
          <div className="w-1 h-1 rounded-full bg-purple-400"></div>
        </div>

        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
          scroll
        </span>
      </div>

    </section>
  );
}

export default Hero;