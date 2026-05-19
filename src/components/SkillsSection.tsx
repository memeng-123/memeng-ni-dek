import { motion } from 'framer-motion';

const subjects = {
  wajib: [
    { name: 'Matematika', level: 90 },
    { name: 'Bahasa Indonesia', level: 85 },
    { name: 'Bahasa Inggris', level: 88 },
    { name: 'PPKn', level: 80 },
    // { name: 'Sejarah', level: 82 },
  ],
  sains: [
    { name: 'Fisika', level: 87 },
    { name: 'Kimia', level: 84 },
    { name: 'Biologi', level: 86 },
    { name: 'Informatika', level: 92 },
  ],
  lainnya: [
    { name: 'PJOK', level: 95 },
    { name: 'Seni Budaya', level: 78 },
    { name: 'Bahasa Arab', level: 83 },
    { name: 'Prakarya', level: 80 },
  ],
};

function SubjectBar({ name, level, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2 group"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium group-hover:text-primary transition">
          {name}
        </span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>

      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 shadow-glow"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="absolute w-[500px] h-[500px] bg-blue-400/20 blur-[150px] top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-cyan-300/20 blur-[150px] bottom-[-150px] right-[-150px]" />

      <div className="container mx-auto px-4 relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium mb-2 block">
            Mata Pelajaran
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
            School Subjects
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Setiap pelajaran adalah bagian dari perjalanan menuju masa depan yang lebih besar.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* CARD */}
          {[
            { title: "Pelajaran Wajib", data: subjects.wajib },
            { title: "Sains & Teknologi", data: subjects.sains },
            { title: "Lainnya", data: subjects.lainnya },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative p-6 rounded-3xl glass shadow-card hover:shadow-glow transition-all duration-500 group"
            >
              {/* GLOW HOVER */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-300/10 opacity-0 group-hover:opacity-100 transition rounded-3xl"></div>

              {/* ICON BUKU */}
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-bold">{section.title}</h3>
              </div>

              {/* LIST MAPEL */}
              <div className="space-y-5 relative z-10">
                {section.data.map((sub, index) => (
                  <SubjectBar
                    key={sub.name}
                    {...sub}
                    delay={index * 0.1}
                  />
                ))}
              </div>

              {/* FLOATING LIGHT */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-400/20 blur-2xl rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}