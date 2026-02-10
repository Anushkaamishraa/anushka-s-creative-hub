import { Badge } from "@/components/ui/badge";

const skills = [
  "React", "TypeScript", "JavaScript", "HTML5", "CSS3",
  "Tailwind CSS", "Next.js", "Git", "Figma", "REST APIs",
  "Responsive Design", "Accessibility",
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 gradient-bg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">Skills & Tech Stack</h2>
        <div className="h-1 w-16 bg-primary rounded-full mb-10" />

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
