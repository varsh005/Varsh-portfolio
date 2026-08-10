import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="bg-black pt-16 pb-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-poppins font-light text-purple-400 uppercase tracking-[0.35em] text-lg lg:text-xl mb-5">
            Education
          </p>

          <h2 className="font-outfit font-extralight text-3xl lg:text-4xl text-white mb-4 leading-tight">
            Academic foundation that shaped my technical journey.
          </h2>
        </motion.div>

        <div className="space-y-8">

          {/* College */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-black border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 transition duration-300"
          >
            <div className="flex items-start gap-5">

              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <FaGraduationCap className="text-purple-400 text-2xl" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  B.Sc. Computer Science
                </h3>

                <p className="text-purple-300 font-medium text-lg mb-2">
                  Sri Ramakrishna College of Arts and Science, Coimbatore
                </p>

                <p className="text-gray-400 mb-6">
                  Specialization: Artificial Intelligence & Data Science
                </p>

                <p className="text-gray-300 leading-8 text-lg mb-6">
                  Built a strong foundation in programming, web development,
                  artificial intelligence, and data science while working on
                  practical projects and developing problem-solving skills.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-white/5 text-gray-200 border border-white/10 text-sm font-medium">
                    2023 – 2026
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Higher Secondary */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-black border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 transition duration-300"
          >
            <div className="flex items-start gap-5">

              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <FaGraduationCap className="text-purple-400 text-2xl" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Higher Secondary – Computer Science with Mathematics
                </h3>

                <p className="text-purple-300 font-medium text-lg mb-2">
                  Sri Ramakrishna Matriculation School
                </p>

                <p className="text-gray-300 leading-8 text-lg mb-6">
                  Focused on computer science, mathematics, and logical
                  reasoning, which strengthened analytical thinking,
                  problem-solving ability, and discipline in academic learning.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-white/5 text-gray-200 border border-white/10 text-sm font-medium">
                    2021 – 2023
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Education;