import { motion } from "framer-motion";
import { FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      role: "Full Stack Development Intern",
      company: "CYFOTOK INFOSEC LLP",
      duration: "May 2025 – June 2025",
      technologies: [
        "Python",
        "Django",
        "React",
        "REST API",
      ],
      description:
        "Completed industrial exposure training in Full Stack Development under the guidance of the development team. Worked on practical web development tasks, gained hands-on experience with frontend and backend technologies, and strengthened skills in building responsive and scalable web applications.",
      certificate: "/certificates/cyfotok-intern.pdf",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-black pt-16 pb-12 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins font-light text-purple-400 uppercase tracking-[0.35em] text-lg lg:text-xl mb-5">
            Experience
          </h2>

          <p className="font-outfit font-extralight text-3xl lg:text-4xl text-white mb-4 leading-tight">
            Internships, projects, and hands-on development experience.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-black border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 transition duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

                <div className="flex-1">

                  <div className="flex items-center gap-4 mb-5">

                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <FaBriefcase className="text-purple-400 text-2xl" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {exp.role}
                      </h3>

                      <p className="text-purple-300 font-medium text-lg">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6 font-medium">
                    {exp.duration}
                  </p>

                  <p className="text-gray-300 leading-8 text-lg mb-8">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: i * 0.05,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="px-4 py-2 rounded-full bg-white/5 text-gray-200 border border-white/10 text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="lg:w-60">
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-black font-semibold px-6 py-4 hover:scale-[1.02] transition duration-300 shadow-lg"
                  >
                    View Certificate
                    <FaExternalLinkAlt />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;