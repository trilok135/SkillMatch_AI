import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { useState } from "react";
import {
    Brain,
    Cpu,
    Database,
    BookOpen,
    MessageSquare,
    Zap,
    Play,
    CheckCircle,
    Loader2,
    ChevronRight,
    BarChart3,
    Target,
    TrendingUp,
    Clock,
    Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Pipeline stage types
type StageStatus = "idle" | "running" | "complete";

interface PipelineStage {
    name: string;
    icon: typeof Brain;
    engine: string;
    status: StageStatus;
    detail: string;
}

// Simulated analysis results
const SAMPLE_SKILLS = ["JavaScript", "React", "TypeScript", "Node.js", "Python", "SQL", "Git", "AWS"];

const SAMPLE_VECTOR_MATCHES = [
    { title: "Frontend Developer Intern", company: "TechCorp Inc.", similarity: 0.9432, matchedSkills: ["React", "TypeScript", "JavaScript"] },
    { title: "Full-Stack Developer", company: "WebForge Studio", similarity: 0.8891, matchedSkills: ["React", "Node.js"] },
    { title: "Cloud Engineering Intern", company: "CloudScale Systems", similarity: 0.8567, matchedSkills: ["AWS"] },
    { title: "Junior Software Engineer", company: "InnovateSoft", similarity: 0.8234, matchedSkills: ["Python", "SQL"] },
    { title: "ML Engineer Intern", company: "DeepLearn AI", similarity: 0.7891, matchedSkills: ["Python"] },
];

const SAMPLE_SKILL_GAPS = ["Docker", "Kubernetes", "System Design", "GraphQL", "CI/CD", "Terraform"];

const SAMPLE_ROADMAP = [
    { skill: "Docker", priority: "high", weeks: 3, sources: 3, recommendation: "Start with Docker fundamentals, then build and deploy containerized applications." },
    { skill: "Kubernetes", priority: "high", weeks: 4, sources: 3, recommendation: "Learn K8s after Docker. Focus on pods, deployments, and services." },
    { skill: "System Design", priority: "medium", weeks: 6, sources: 3, recommendation: "Study distributed systems patterns. Practice with real-world design problems." },
    { skill: "GraphQL", priority: "medium", weeks: 2, sources: 3, recommendation: "Build a GraphQL API with Apollo Server. Compare with REST patterns." },
];

const SAMPLE_FEEDBACK = {
    overallScore: 78,
    sections: [
        { name: "Technical Skills", score: 85, feedback: "Strong coverage. Add cloud certifications." },
        { name: "Work Experience", score: 68, feedback: "Quantify impact with metrics." },
        { name: "Projects", score: 78, feedback: "Good diversity. Add live demos." },
        { name: "Education", score: 90, feedback: "Well-structured. Add coursework." },
        { name: "Keywords (ATS)", score: 65, feedback: "Missing: agile, CI/CD, microservices." },
    ],
};

const AIAnalysis = () => {
    const [stages, setStages] = useState<PipelineStage[]>([
        { name: "Text Extraction", icon: BookOpen, engine: "Apache Tika + pdfplumber", status: "idle", detail: "Parse resume PDF/DOCX into structured text" },
        { name: "Semantic Embedding", icon: Brain, engine: "all-MiniLM-L6-v2 (384d)", status: "idle", detail: "Generate transformer-based dense vector representation" },
        { name: "Vector Search", icon: Database, engine: "Pinecone (cosine, top-10)", status: "idle", detail: "Find nearest job/course vectors in embedding space" },
        { name: "RAG Generation", icon: BookOpen, engine: "GPT-4o-mini + LangChain", status: "idle", detail: "Retrieve context and generate personalized roadmap" },
        { name: "LLM Feedback", icon: MessageSquare, engine: "GPT-4o-mini (structured)", status: "idle", detail: "Generate actionable resume improvement suggestions" },
    ]);
    const [pipelineRunning, setPipelineRunning] = useState(false);
    const [pipelineComplete, setPipelineComplete] = useState(false);

    const runPipeline = async () => {
        setPipelineRunning(true);
        setPipelineComplete(false);

        for (let i = 0; i < stages.length; i++) {
            setStages((prev) =>
                prev.map((s, idx) => (idx === i ? { ...s, status: "running" } : s))
            );
            await new Promise((r) => setTimeout(r, 800 + Math.random() * 400));
            setStages((prev) =>
                prev.map((s, idx) => (idx === i ? { ...s, status: "complete" } : s))
            );
        }

        setPipelineRunning(false);
        setPipelineComplete(true);
    };

    const resetPipeline = () => {
        setStages((prev) => prev.map((s) => ({ ...s, status: "idle" })));
        setPipelineComplete(false);
    };

    return (
        <div className="min-h-screen bg-background">
            <DashboardSidebar />
            <div className="pl-64 min-h-screen transition-all duration-300">
                <DashboardHeader />
                <main className="p-6 space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-extrabold text-foreground tracking-tight flex items-center gap-3">
                                <Brain className="h-8 w-8 text-primary" />
                                AI Analysis Pipeline
                            </h1>
                            <p className="text-sm text-muted-foreground mt-1">
                                Transformer embeddings → Vector search → RAG → LLM feedback — powered by vLLM + ONNX Runtime
                            </p>
                        </div>
                        <div className="flex gap-2">
                            {pipelineComplete && (
                                <Button variant="outline" size="sm" onClick={resetPipeline}>
                                    Reset
                                </Button>
                            )}
                            <Button
                                variant="hero"
                                size="sm"
                                className="gap-2"
                                onClick={runPipeline}
                                disabled={pipelineRunning}
                            >
                                {pipelineRunning ? (
                                    <><Loader2 className="h-4 w-4 animate-spin" /> Running...</>
                                ) : (
                                    <><Play className="h-4 w-4" /> Run Analysis</>
                                )}
                            </Button>
                        </div>
                    </div>

                    {/* Pipeline Stages */}
                    <div className="rounded-xl bg-card p-6 card-shadow border border-border">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                            Pipeline Stages
                        </h2>
                        <div className="flex items-center gap-2 overflow-x-auto pb-2">
                            {stages.map((stage, i) => (
                                <div key={stage.name} className="flex items-center">
                                    <div
                                        className={cn(
                                            "flex flex-col items-center p-4 rounded-xl min-w-[160px] border-2 transition-all duration-300",
                                            stage.status === "running" && "border-primary bg-primary/5 scale-105",
                                            stage.status === "complete" && "border-metric-green bg-metric-green/5",
                                            stage.status === "idle" && "border-border bg-background"
                                        )}
                                    >
                                        <div className={cn(
                                            "p-2.5 rounded-lg mb-2",
                                            stage.status === "running" && "bg-primary/10",
                                            stage.status === "complete" && "bg-metric-green/10",
                                            stage.status === "idle" && "bg-accent"
                                        )}>
                                            {stage.status === "running" ? (
                                                <Loader2 className="h-5 w-5 text-primary animate-spin" />
                                            ) : stage.status === "complete" ? (
                                                <CheckCircle className="h-5 w-5 text-metric-green" />
                                            ) : (
                                                <stage.icon className="h-5 w-5 text-muted-foreground" />
                                            )}
                                        </div>
                                        <p className="text-sm font-bold text-foreground text-center">{stage.name}</p>
                                        <p className="text-[10px] text-muted-foreground text-center mt-1">{stage.engine}</p>
                                    </div>
                                    {i < stages.length - 1 && (
                                        <ChevronRight className={cn(
                                            "h-5 w-5 mx-1 shrink-0",
                                            stage.status === "complete" ? "text-metric-green" : "text-border"
                                        )} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Inference Stats Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: "Embedding Dim", value: "384d", icon: Brain, color: "text-primary" },
                            { label: "Vector Matches", value: "145K indexed", icon: Database, color: "text-metric-purple" },
                            { label: "Throughput", value: "920 tok/s", icon: Activity, color: "text-metric-green" },
                            { label: "Inference Latency", value: "542ms p50", icon: Clock, color: "text-metric-orange" },
                        ].map((stat) => (
                            <div key={stat.label} className="rounded-xl bg-card p-4 card-shadow border border-border">
                                <div className="flex items-center gap-2 mb-1">
                                    <stat.icon className={cn("h-4 w-4", stat.color)} />
                                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                                </div>
                                <p className="text-2xl font-extrabold text-foreground">{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Results — only show after pipeline completes */}
                    {pipelineComplete && (
                        <div className="space-y-6 animate-in fade-in duration-500">
                            {/* Top row: Vector Matches + Skill Gaps */}
                            <div className="grid lg:grid-cols-12 gap-6">
                                {/* Vector Search Results */}
                                <div className="lg:col-span-7 rounded-xl bg-card p-5 card-shadow border border-border">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                                        <Database className="h-4 w-4 text-metric-purple" />
                                        Vector Search Results (Pinecone — cosine similarity)
                                    </h3>
                                    <div className="space-y-3">
                                        {SAMPLE_VECTOR_MATCHES.map((match, i) => (
                                            <div
                                                key={match.title}
                                                className="flex items-center justify-between p-3 rounded-lg bg-background border border-border"
                                            >
                                                <div>
                                                    <p className="text-sm font-bold text-foreground">{match.title}</p>
                                                    <p className="text-xs text-muted-foreground">{match.company}</p>
                                                    <div className="flex gap-1 mt-1">
                                                        {match.matchedSkills.map((s) => (
                                                            <span key={s} className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary">
                                                                {s}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-lg font-extrabold text-primary">{(match.similarity * 100).toFixed(1)}%</p>
                                                    <p className="text-[10px] text-muted-foreground">cos sim</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Skill Gap Detection */}
                                <div className="lg:col-span-5 space-y-6">
                                    <div className="rounded-xl bg-card p-5 card-shadow border border-border">
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                                            <Target className="h-4 w-4 text-metric-orange" />
                                            Skill Gap Detection
                                        </h3>
                                        <div className="mb-4">
                                            <div className="flex items-end gap-2 mb-1">
                                                <span className="text-3xl font-extrabold text-foreground">
                                                    {((SAMPLE_SKILLS.length / (SAMPLE_SKILLS.length + SAMPLE_SKILL_GAPS.length)) * 100).toFixed(0)}%
                                                </span>
                                                <span className="text-xs font-bold text-muted-foreground pb-1">coverage</span>
                                            </div>
                                            <div className="h-3 rounded-full bg-muted overflow-hidden">
                                                <div
                                                    className="h-full rounded-full bg-primary transition-all duration-1000"
                                                    style={{ width: `${(SAMPLE_SKILLS.length / (SAMPLE_SKILLS.length + SAMPLE_SKILL_GAPS.length)) * 100}%` }}
                                                />
                                            </div>
                                        </div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Gaps Detected</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {SAMPLE_SKILL_GAPS.map((gap) => (
                                                <span key={gap} className="px-2 py-1 rounded-lg text-xs font-bold bg-metric-orange/10 text-metric-orange border border-metric-orange/20">
                                                    {gap}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Runtime */}
                                    <div className="rounded-xl bg-card p-5 card-shadow border border-border">
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                                            <Zap className="h-4 w-4 text-metric-green" />
                                            Inference Runtime
                                        </h3>
                                        <div className="space-y-2 text-sm">
                                            {[
                                                "vLLM v0.4.2 — Continuous batching",
                                                "ONNX Runtime 1.17 — INT8 quantization",
                                                "Flash Attention 2 — KV-cache reuse",
                                            ].map((opt) => (
                                                <div key={opt} className="flex items-center gap-2">
                                                    <CheckCircle className="h-3.5 w-3.5 text-metric-green shrink-0" />
                                                    <span className="text-muted-foreground">{opt}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RAG Roadmap */}
                            <div className="rounded-xl bg-card p-5 card-shadow border border-border">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                                    <TrendingUp className="h-4 w-4 text-primary" />
                                    RAG-Generated Improvement Roadmap (GPT-4o-mini + LangChain RetrievalQA)
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {SAMPLE_ROADMAP.map((item) => (
                                        <div
                                            key={item.skill}
                                            className={cn(
                                                "p-4 rounded-xl border-l-4 bg-background border border-border",
                                                item.priority === "high" ? "border-l-destructive" : "border-l-metric-orange"
                                            )}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-extrabold text-foreground">{item.skill}</span>
                                                <span className={cn(
                                                    "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase",
                                                    item.priority === "high" ? "bg-destructive/10 text-destructive" : "bg-metric-orange/10 text-metric-orange"
                                                )}>
                                                    {item.priority}
                                                </span>
                                            </div>
                                            <p className="text-xs text-muted-foreground mb-2">{item.recommendation}</p>
                                            <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                                                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {item.weeks} weeks</span>
                                                <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {item.sources} sources</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* LLM Feedback */}
                            <div className="rounded-xl bg-card p-5 card-shadow border border-border">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                        <MessageSquare className="h-4 w-4 text-primary" />
                                        LLM Resume Feedback (GPT-4o-mini — structured output)
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-3xl font-extrabold text-primary">{SAMPLE_FEEDBACK.overallScore}%</span>
                                        <span className="text-xs text-muted-foreground">overall</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {SAMPLE_FEEDBACK.sections.map((section) => (
                                        <div key={section.name} className="flex items-center gap-4">
                                            <div className="w-32 shrink-0">
                                                <p className="text-xs font-bold text-foreground">{section.name}</p>
                                            </div>
                                            <div className="flex-1">
                                                <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                                                    <div
                                                        className={cn(
                                                            "h-full rounded-full transition-all duration-1000",
                                                            section.score >= 80 ? "bg-metric-green" : section.score >= 70 ? "bg-primary" : "bg-metric-orange"
                                                        )}
                                                        style={{ width: `${section.score}%` }}
                                                    />
                                                </div>
                                            </div>
                                            <span className="text-sm font-extrabold text-foreground w-10 text-right">{section.score}</span>
                                            <p className="text-xs text-muted-foreground flex-1 hidden lg:block">{section.feedback}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default AIAnalysis;
