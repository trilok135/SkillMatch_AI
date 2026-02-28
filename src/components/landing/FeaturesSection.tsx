import { Sparkles, Shield, Zap, BarChart3, Users, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "AI-Powered Matching",
    description: "Transformer-based semantic embeddings (all-MiniLM-L6-v2, 384d) analyze skills from resumes and match candidates via vector cosine similarity in Pinecone.",
    icon: Brain,
    color: "primary",
    isHero: true,
    tech: "Transformer Embeddings + Pinecone",
  },
  {
    title: "Real-Time Skill Analysis",
    description: "Extract 200+ skills via NLP entity recognition. Dense embeddings are generated in <15ms using ONNX Runtime with INT8 quantization.",
    icon: Zap,
    color: "orange",
    tech: "ONNX Runtime + vLLM",
  },
  {
    title: "Integrity Monitoring",
    description: "Plagiarism detection via document embedding similarity search. Engagement scoring through behavioral pattern analysis with anomaly detection.",
    icon: Shield,
    color: "green",
    tech: "Vector Similarity Search",
  },
  {
    title: "Analytics Dashboard",
    description: "RAG-powered insights pipeline retrieves context from skill gaps and generates actionable reports via GPT-4o-mini and LangChain RetrievalQA.",
    icon: BarChart3,
    color: "purple",
    tech: "RAG + LangChain",
  },
  {
    title: "Multi-User Platform",
    description: "Role-specific dashboards for students, employers, and recruiters with personalized AI-driven experiences and real-time inference.",
    icon: Users,
    color: "cyan",
    tech: "Continuous Batching",
  },
  {
    title: "Smart Recommendations",
    description: "LLM-generated course and career recommendations using Retrieval-Augmented Generation based on individual skill vectors and market demand embeddings.",
    icon: Sparkles,
    color: "primary",
    tech: "LLM + RAG Pipeline",
  },
];

const iconColors = {
  primary: "bg-primary/10 text-primary",
  orange: "bg-metric-orange/10 text-metric-orange",
  green: "bg-metric-green/10 text-metric-green",
  purple: "bg-metric-purple/10 text-metric-purple",
  cyan: "bg-metric-cyan/10 text-metric-cyan",
};

const borderColors = {
  primary: "border-l-primary",
  orange: "border-l-metric-orange",
  green: "border-l-metric-green",
  purple: "border-l-metric-purple",
  cyan: "border-l-metric-cyan",
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-xs font-bold uppercase tracking-wider text-accent-foreground mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Why Choose SkillMatch AI?
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform combines cutting-edge AI technology with intuitive design to revolutionize
            how talent meets opportunity.
          </p>
        </div>

        {/* Features grid — hero card spans 2 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group p-6 rounded-2xl bg-card card-shadow hover:card-shadow-hover",
                "border border-transparent hover:border-primary/10",
                "border-l-4",
                borderColors[feature.color as keyof typeof borderColors],
                "transition-all duration-300 animate-scale-in",
                feature.isHero && "md:col-span-2 lg:col-span-2"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-5",
                  feature.isHero && "w-14 h-14",
                  iconColors[feature.color as keyof typeof iconColors]
                )}
              >
                <feature.icon className={cn("h-6 w-6", feature.isHero && "h-7 w-7")} />
              </div>
              <h3 className={cn(
                "font-bold text-foreground mb-2 group-hover:text-primary transition-colors",
                feature.isHero ? "text-xl" : "text-lg"
              )}>
                {feature.title}
              </h3>
              <p className={cn(
                "text-muted-foreground leading-relaxed",
                feature.isHero ? "text-base" : "text-sm"
              )}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
