import { Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">About Me</h2>
        <div className="h-1 w-16 bg-primary rounded-full mb-10" />

        <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate Frontend Developer who loves turning ideas into pixel-perfect, interactive web experiences.
              I specialize in building modern applications using React, TypeScript, and CSS — with a strong focus on performance and accessibility.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or learning about the latest web technologies.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Connect</h3>
            <div className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
