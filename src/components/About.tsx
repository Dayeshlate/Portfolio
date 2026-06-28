import SectionReveal from "./SectionReveal";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const techList = ["Java","Sprinng Boot" ,"Node.js", "React", "MySQL", "REST APIs", "Docker", "Git & GitHub"];

const About = () => (
  <section id="about" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <SectionReveal>
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Focused on backend engineering with experience in building APIs, managing databases, and deploying scalable applications using modern DevOps practices.</p>
          <p className="text-muted-foreground leading-relaxed mb-6">I have experience working with:</p>
          <div className="flex flex-wrap gap-3 mb-6">
            {techList.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-md bg-secondary text-sm text-foreground border border-border"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I enjoy solving complex problems and continuously improving my development skills.
          </p>
          <Button variant="hero" size="lg" asChild className="transition-transform duration-200 hover:scale-105 active:scale-95">
            <a href="https://drive.google.com/file/d/1gjpsuZzERn2P_1qBtp_jSyCh6cM7uRq6/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <FileDown size={16} /> View Resume
            </a>
          </Button>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default About;
