import { motion } from "framer-motion";
import {
  FaTrophy,
  FaFileAlt,
  FaUsers,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      title: "International Conference Paper Presentation (ICAITICA-2026)",
      description:
        "Presented the paper ‘AI-Based Lip Reading System Using Webcam’ at the Second International Conference on Advances of Information Technology and Innovations in Computer Applications for Sustainable Development (ICAITICA-2026).",
      icon: FaTrophy,
      link: "/certificates/ICAITICA-2026.jpeg",
    },

    {
      title: "International Conference Paper Presentation (ICICT ’25)",
      description:
        "Presented the paper ‘Ethics and Bias in Machine Learning’ at the International Conference on Intelligent Computing and Technology (ICICT ’25) organized by the Departments of Information Technology and Computer Science (AI&DS).",
      icon: FaFileAlt,
      link: "/certificates/ICICT '25.pdf",
    },

    {
      title: "Inter-College Hackathon Organizer - 2024",
      description:
        "Coordinated and organized an inter-college hackathon event, supporting event management, technical activities, and participant coordination.",
      icon: FaUsers,
      link: null,
    },
  ];

  return (
    <section id="achievements" className="py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-poppins font-light text-purple-400 uppercase tracking-[0.35em] text-lg lg:text-xl mb-5">
            Achievements
          </p>

          <h2 className="font-outfit font-extralight text-3xl lg:text-4xl text-white mb-4 leading-tight">
            A few Highlights that represent my learning, creativity and contribution.
          </h2>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-black border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 transition-all duration-300 flex flex-col min-h-[320px]"
              >

                {/* Top Row */}

                <div className="flex items-start justify-between gap-4 mb-6">

                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-purple-400 text-2xl" />
                  </div>

                  {achievement.link && (
                    <div className="flex items-center text-gray-400 flex-shrink-0 mt-1">

                      {/* External Link */}

                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white transition"
                        title="Open"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </a>

                    </div>
                  )}
                </div>

                {/* Title */}

                <h3 className="text-xl font-semibold text-white leading-8 mb-5">
                  {achievement.title}
                </h3>

                {/* Description */}

                <p className="text-gray-400 leading-8 text-base flex-1">
                  {achievement.description}
                </p>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;