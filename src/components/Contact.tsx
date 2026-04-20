import { useState } from "react";
import SectionReveal from "./SectionReveal";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Send, Phone, Code, Gitlab } from "lucide-react";

const Contact = () => {
  const recipientEmail = "latedayesh@gmail.com";
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-10">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-muted-foreground transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-muted-foreground transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-muted-foreground transition-colors resize-none"
              />
              <Button variant="hero" size="lg" type="submit">
                <Send size={16} /> Send Message
              </Button>
            </form>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={20} />
                <a href={`mailto:${recipientEmail}`} className="hover:text-foreground transition-colors">latedayesh@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={20} />
                <a href="tel:+91 7499279815" className="hover:text-foreground transition-colors">+91 7499279815</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Linkedin size={20} />
                <a href="https://www.linkedin.com/in/dayesh-late-141121361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">linkedin.com/in/dayeshlate</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Github size={20} />
                <a href="https://github.com/Dayeshlate" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">github.com/Dayeshlate</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Gitlab size={20} />
                <a href="https://gitlab.com/DayeshLate" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">gitlab.com/DayeshLate</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Code size={20} />
                <a href="https://leetcode.com/u/DayeshLate/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">leetcode.com/DayeshLate</a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Contact;
