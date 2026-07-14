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
          <ul className="text-muted-foreground leading-relaxed mb-6">
            <p>I believe in:</p>
              <li>- Writing code the next engineer will thank me for</li>
              <li>- Automating away manual pain (hence DevOps focus)</li>
              <li>- Testing early, deploying often</li>
              <li>- Clear logging and observable systems</li>
          </ul>
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
            <a href="https://drive.google.com/file/d/1cu2UKIjnbX3s1XjNBZLy4arkgTkAeojC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FileDown size={16} /> View Resume
            </a>
          </Button>
          
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default About;
