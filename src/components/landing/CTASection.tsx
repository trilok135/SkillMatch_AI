import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Solid primary background */}
      <div className="absolute inset-0 bg-primary" />
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 geometric-pattern-light" />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/20" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-primary-foreground mb-6 tracking-tight">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of companies and students already using SkillMatch AI to connect
            the right skills with the right opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/dashboard">
              <Button
                size="xl"
                className="bg-white text-primary hover:bg-white/95 font-bold gap-2 shadow-lg"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="xl"
              variant="outline"
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
