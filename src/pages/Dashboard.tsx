import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { QuickSearchPanel } from "@/components/dashboard/QuickSearchPanel";
import { IntegrityAlerts } from "@/components/dashboard/IntegrityAlerts";
import { UploadProgress } from "@/components/dashboard/UploadProgress";
import { BookOpen, Target, Calendar, TrendingUp, Award, Clock } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";

const metrics = [
  {
    title: "Courses Enrolled",
    value: 12,
    note: "+2 new courses this month",
    icon: BookOpen,
    color: "blue" as const,
  },
  {
    title: "Available Skill Tracks",
    value: 8,
    note: "Updated weekly",
    icon: Target,
    color: "purple" as const,
  },
  {
    title: "Assessments Scheduled",
    value: 4,
    note: "Upcoming this week",
    icon: Calendar,
    color: "orange" as const,
  },
  {
    title: "Certifications Earned",
    value: 5,
    note: "Verified credentials",
    icon: Award,
    color: "cyan" as const,
  },
];

const Dashboard = () => {
  const { user } = useAuth();
  const displayName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "there";

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />

      <div className="pl-64 min-h-screen transition-all duration-300">
        <DashboardHeader />

        <main className="p-6 space-y-6">
          {/* Welcome section */}
          <div className="mb-2">
            <h1 className="text-3xl font-extrabold text-foreground tracking-tight mb-1">
              Welcome back, {displayName}! 👋
            </h1>
            <p className="text-sm text-muted-foreground">
              AI-powered personalized learning, skill tracking, and career readiness platform
            </p>
          </div>

          {/* Hero Readiness Score — full-width hero moment */}
          <div className="rounded-2xl bg-card p-8 card-shadow border border-border relative overflow-hidden">
            <div className="absolute inset-0 geometric-pattern opacity-50" />
            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              {/* Score — left, dominating */}
              <div className="lg:col-span-5 text-center lg:text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Overall Readiness Score
                </p>
                <div className="animate-score-reveal">
                  <span className="text-hero-metric text-primary score-glow inline-block rounded-2xl px-2">
                    87%
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Computed via <span className="font-semibold text-foreground">transformer embeddings</span> + <span className="font-semibold text-foreground">vector similarity search</span> across 145K indexed profiles
                </p>
              </div>

              {/* Summary metrics — right */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-accent/50 border border-border">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Embedding Sim</p>
                  <p className="text-3xl font-extrabold text-primary">92%</p>
                </div>
                <div className="p-4 rounded-xl bg-accent/50 border border-border">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Resume (LLM)</p>
                  <p className="text-3xl font-extrabold text-metric-green">78%</p>
                </div>
                <div className="p-4 rounded-xl bg-accent/50 border border-border">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Gaps (RAG)</p>
                  <p className="text-3xl font-extrabold text-metric-orange">3</p>
                </div>
                <div className="p-4 rounded-xl bg-accent/50 border border-border">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">ONNX Runtime</p>
                  <p className="text-3xl font-extrabold text-metric-purple">542ms</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Search */}
          <QuickSearchPanel />

          {/* Metrics Grid — 4 columns on large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <MetricCard key={metric.title} {...metric} index={index} />
            ))}
          </div>

          {/* Two column layout — 70/30 split */}
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <UploadProgress />
            </div>
            <div className="lg:col-span-5">
              <IntegrityAlerts />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
