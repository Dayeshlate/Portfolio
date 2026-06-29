import SectionReveal from "./SectionReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-10">Education</h2>
        </SectionReveal>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative pl-8 border-l border-border max-w-2xl"
        >
          <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center">
            <GraduationCap size={16} className="text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Bachelor of Information Technology</h3>
          <p className="text-muted-foreground text-sm mb-2 mt-2">Mumbai University · 2024 - 2028</p>
          <p className="text-muted-foreground text-sm mb-4">At. Vasantdada patil pratishthan's collage of engineering and visual arts, sion, Mumbai</p>
          <ul className="space-y-1 text-muted-foreground text-sm">
            <li>• I am Third year student</li>
            <li>• Studying Information Technology</li>
          </ul>
          <p className="text-muted-foreground text-sm mt-4 mb-4">Currently Focus On studying</p>
          <ul className="space-y-1 text-muted-foreground text-sm">
            <p>Deepening:</p>:
            <li>- Advanced Kubernetes patterns (DaemonSets, custom controllers)</li>
            <li>- Spring Security OAuth2 flows</li>
            <li>- Helm chart templating</li>

          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
