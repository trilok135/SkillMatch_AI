import { Users, Building2, Target, Brain, ClipboardCheck } from "lucide-react";

const stats = [
  { value: "3,500+", label: "Candidates Matched", icon: Users },
  { value: "150+", label: "Companies Served", icon: Building2 },
  { value: "95%", label: "Hiring Accuracy", icon: Target },
  { value: "200+", label: "Skills Analyzed", icon: Brain },
  { value: "100+", label: "Tests Matched", icon: ClipboardCheck },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-card border-y border-border relative">
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-count-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
