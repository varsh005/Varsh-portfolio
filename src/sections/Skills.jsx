import { motion } from "framer-motion";
import {
  SiPython,
  SiDjango,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiOpencv,
  SiMediapipe,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss, color: "#264DE4" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "Django REST Framework", icon: SiDjango, color: "#092E20" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      ],
    },
    {
      title: "AI / ML",
      skills: [
        { name: "NumPy", icon: SiNumpy, color: "#013243" },
        { name: "Pandas", icon: SiPandas, color: "#150458" },
        { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
        { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
        { name: "MediaPipe", icon: SiMediapipe, color: "#0097A7" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
        { name: "VS Code", icon: VscVscode, color: "#007ACC" },
        { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
        { name: "Render", icon: SiRender, color: "#46E3B7" },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-black pt-16 pb-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-light text-purple-400 uppercase tracking-[0.35em] text-lg lg:text-xl mb-5">
            Skills & Tools
          </h2>

          <p className="font-outfit font-extralight text-3xl lg:text-4xl text-white mb-4 leading-tight">
            Technologies I use to turn ideas into working products.
          </p>
        </motion.div>

        {/* One group per row, 4 skills per line inside each group */}

        <div className="space-y-10">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: groupIndex * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-purple-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {group.skills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: groupIndex * 0.1 + index * 0.05,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0B1120] px-4 py-4 text-gray-200 hover:border-purple-500/30 hover:bg-white/5 transition-all duration-300"
                    >
                      <Icon
                        className="text-2xl flex-shrink-0"
                        style={{ color: skill.color }}
                      />

                      <span className="text-sm font-medium leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
