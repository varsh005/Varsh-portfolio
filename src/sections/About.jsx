import { motion } from "framer-motion";
import aboutImg from "../assets/project_images/profile-about.jpeg";

function About() {
  return (
    <section id="about" className="bg-black pt-16 pb-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - IMAGE */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="p-2 rounded-[32px] border-2 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.5)]">
              <img
                src={aboutImg}
                alt="Varshini"
                className="rounded-[28px] w-full max-w-[420px] h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* RIGHT - TEXT */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="font-poppins font-light text-purple-400 uppercase tracking-[0.30em] text-lg lg:text-xl mb-12">
              About Me
            </h3>

            <div className="bg-[#0A0A0A] border border-purple-500/30 rounded-3xl p-8 text-gray-200 text-lg leading-9 space-y-8">
              <p>
                I am a passionate Developer who enjoys building modern,
                responsive, and scalable web pages and applications.
              </p>

              <p>
                I specialize in Python, Django, React, and Machine Learning,
                creating solutions that combine strong backend functionality
                with clean and engaging user experiences.
              </p>

              <p>
                I love exploring new technologies, solving real-world problems,
                and continuously improving my development skills to build
                innovative software solutions.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;