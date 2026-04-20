import SectionReveal from "./SectionReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiMysql, SiScikitlearn, SiPandas } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";

const techIcons: Record<string, IconType> = {
  "React": FaReact,
  "Node.js": FaNodeJs,
  "MySQL": SiMysql,
  "TypeScript": SiTypescript,
  "ExcelJS": DiNodejsSmall,
  "JavaScript": SiJavascript,
  "Python": FaPython,
  "Scikit-learn": SiScikitlearn,
  "Pandas": SiPandas,
};

const projects = [
  {
    title: "Garage Management System",
    description: "A web-based application designed to manage garage operations including vehicle service tracking, billing, and customer management.",
    tech: ["Java","Spring Boot","React", "Node.js", "MySQL"],
    videoUrl: "https://drive.google.com/uc?export=download&id=1AZzL6p4N5TxfgmHObiE3b2CV_sAkPm3O",
    githubUrl: "https://github.com/Dayeshlate/Garage-Management-Application.git",
    liveUrl: "https://garage-management-application.vercel.app/",
  },
  {
    title: "Money Mangement Application",
    description: "A money management application designed to track and manage financial transactions efficiently, with features such as adding income/expenses, searching records, and maintaining organized financial data.",
    tech: ["java","Spring Boot","Node.js", "React"],
    videoUrl: "https://drive.google.com/uc?export=download&id=1ftt599-2zdkEYRaycsEQkKs85k34enJJ",
    githubUrl: "https://github.com/Dayeshlate/Money-Mangement-Application.git",
    liveUrl: "https://money-mangement-application.vercel.app/",
  },
];

const getGoogleDrivePreviewUrl = (url: string) => {
  const filePathMatch = url.match(/\/file\/d\/([^/]+)/);
  if (filePathMatch?.[1]) {
    return `https://drive.google.com/file/d/${filePathMatch[1]}/preview`;
  }

  const idParamMatch = url.match(/[?&]id=([^&]+)/);
  if (idParamMatch?.[1]) {
    return `https://drive.google.com/file/d/${idParamMatch[1]}/preview`;
  }

  return null;
};

const ProjectCard = ({ title, description, tech, videoUrl, githubUrl, liveUrl, index }: typeof projects[0] & { index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const drivePreviewUrl = getGoogleDrivePreviewUrl(videoUrl);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.04, y: -5, zIndex: 40 }}
      className="relative z-0 p-6 rounded-lg glass-card group flex flex-col h-full"
    >
      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-gradient transition-colors">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      <div className="mb-5">
        <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Technologies Used</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => {
            const Icon = techIcons[t];
            return (
              <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md bg-secondary/50 text-muted-foreground border border-border/50">
                {Icon && <Icon size={13} />}
                {t}
              </span>
            );
          })}
        </div>
      </div>
      <div className="mt-auto relative overflow-visible">
        <motion.div
          whileHover={{ scale: 1.8, y: -8, zIndex: 50 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="relative rounded-2xl overflow-hidden border border-border/30 origin-center transition-[border-color,box-shadow] duration-300 hover:border-primary/60 hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.35)]"
        >
          {drivePreviewUrl ? (
            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black">
              <iframe
                src={drivePreviewUrl}
                className="w-full h-full rounded-2xl"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`${title} video preview`}
              />
            </div>
          ) : (
            <video
              className="w-full h-auto block rounded-2xl"
              autoPlay
              loop
              playsInline
              muted
              preload="metadata"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </motion.div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        {githubUrl && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button variant="heroOutline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} /> GitHub
              </a>
            </Button>
          </motion.div>
        )}
        {liveUrl && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button variant="heroOutline" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Globe size={14} /> View Live
              </a>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <section id="projects" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
      </SectionReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
