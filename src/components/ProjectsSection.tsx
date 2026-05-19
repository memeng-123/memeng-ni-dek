import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern yang powerful dan responsif.',
    tags: ['Shopee', 'Tokopedia', 'Lazada'],
    image: '🛒',
    github: 'https://github.com/memeng-123/memeng-ni-dek.git',
    demo: 'https://www.tokopedia.com/',
  },
  {
    title: 'Learning Platform',
    description: 'Platform belajar interaktif dengan UI modern.',
    tags: ['Ruang Guru', 'Zenius'],
    image: '📚',
    demo: 'https://app.ruangguru.com/',
  },
  {
    title: 'Social Media Platform',
    description: 'Platform social media untuk sharing & komunikasi.',
    tags: ['Instagram', 'TikTok'],
    image: '📱',
    demo: 'https://www.tiktok.com/id-ID/',
  },
  {
    title: 'AI Platform',
    description: 'Aplikasi berbasis AI untuk membantu produktivitas.',
    tags: ['ChatGPT', 'Gemini'],
    image: '🤖',
    demo: 'https://chatgpt.com/',
  },
  {
    title: 'Video Editing Tutorial',
    description: 'Konten tutorial editing yang membantu banyak orang.',
    tags: ['YouTube', 'TikTok'],
    image: '🎬',
    youtube: 'https://www.youtube.com/',
  },
  {
    title: 'Coding Tips & Tricks',
    description: 'Tips coding singkat yang mudah dipahami.',
    tags: ['Instagram', 'YouTube'],
    image: '💡',
    youtube: 'https://www.youtube.com/',
  },
];

function ProjectCard({ project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 200, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.06, y: -10 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="relative group"
    >
      {/* GLOW LAYER */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 z-0"></div>

      {/* CARD */}
      <div className="relative z-10 p-6 rounded-2xl bg-background/70 backdrop-blur-xl border border-white/10 shadow-xl group-hover:shadow-2xl transition-all duration-300">

        {/* ICON */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-5xl mb-4"
        >
          {project.image}
        </motion.div>

        {/* TITLE */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">
          {project.title}
        </h3>

        {/* DESC */}
        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>

        {/* TAG */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex gap-2 flex-wrap">
          {project.github && (
            <Button size="sm" variant="outline" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" />
                Code
              </a>
            </Button>
          )}

          {project.demo && (
            <Button size="sm" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Demo
              </a>
            </Button>
          )}

          {project.youtube && (
            <Button size="sm" asChild>
              <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                <Play className="h-4 w-4 mr-1 fill-current" />
                Watch
              </a>
            </Button>
          )}
        </div>

      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute w-[800px] h-[800px] bg-blue-500/20 blur-[200px] top-[-300px] left-[-300px]" />
      <div className="absolute w-[800px] h-[800px] bg-cyan-400/20 blur-[200px] bottom-[-300px] right-[-300px]" />

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
            My Projects
          </h2>
          <p className="text-muted-foreground">
            Beberapa karya terbaik saya 🚀
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}