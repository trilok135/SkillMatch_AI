import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroIllustration from "@/assets/hero-illustration.png";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 geometric-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent/60 via-background to-background" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* 70/30 asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content — 7 columns */}
          <div className="lg:col-span-7 space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-accent-foreground">
                AI-Powered Placement Readiness
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground">
              Smart, Skill-Based{" "}
              <span className="text-primary">Recruitment</span>{" "}
              with AI
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Powered by transformer-based semantic embeddings, vector databases for real-time
              similarity search, RAG for contextual roadmaps, and LLMs for personalized feedback.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/dashboard">
                <Button variant="hero" size="xl" className="gap-2">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="heroOutline" size="xl" className="gap-2">
                <Play className="h-5 w-5" />
                Request Demo
              </Button>
            </div>

            {/* Powered-by tech badges */}
            <div className="flex flex-wrap gap-2 mt-2">
              {["Transformers", "Vector DB", "RAG", "LLMs", "vLLM", "ONNX Runtime"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full text-xs font-bold bg-primary/5 text-primary border border-primary/15"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {["JD", "ES", "ML", "SJ"].map((initials, i) => (
                  <div
                    key={initials}
                    className="h-10 w-10 rounded-full border-2 border-card bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground"
                    style={{ zIndex: 4 - i }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-foreground">3,500+ candidates matched</p>
                <p className="text-muted-foreground">Join thousands of users</p>
              </div>
            </div>
          </div>

          {/* Right illustration — 5 columns */}
          <div className="lg:col-span-5 relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src={heroIllustration}
                alt="AI-powered recruitment dashboard with professionals analyzing data"
                className="w-full h-auto"
              />
            </div>

            {/* Floating cards */}
            <div className="absolute -left-6 top-1/4 p-4 rounded-xl bg-card card-shadow-hover border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-metric-green/10 flex items-center justify-center">
                  <span className="text-metric-green text-xl font-extrabold">95%</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Accuracy</p>
                  <p className="text-xs text-muted-foreground">Hiring match</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 p-4 rounded-xl bg-card card-shadow-hover border border-border animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xl font-extrabold">200+</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Skills</p>
                  <p className="text-xs text-muted-foreground">Analyzed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
