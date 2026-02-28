import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Briefcase, MapPin, Clock, DollarSign, Building2, ExternalLink, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const opportunities = [
    {
        id: 1,
        title: "Frontend Developer Intern",
        company: "TechCorp Inc.",
        location: "Remote",
        type: "Internship",
        salary: "$25/hr",
        posted: "2 days ago",
        matchScore: 95,
        skills: ["React", "TypeScript", "CSS"],
    },
    {
        id: 2,
        title: "Junior Software Engineer",
        company: "InnovateSoft",
        location: "New York, NY",
        type: "Full-time",
        salary: "$85,000/yr",
        posted: "1 week ago",
        matchScore: 88,
        skills: ["Python", "Django", "PostgreSQL"],
    },
    {
        id: 3,
        title: "Data Analyst Co-op",
        company: "DataDriven Labs",
        location: "San Francisco, CA",
        type: "Co-op",
        salary: "$30/hr",
        posted: "3 days ago",
        matchScore: 82,
        skills: ["SQL", "Python", "Tableau"],
    },
    {
        id: 4,
        title: "UX Research Intern",
        company: "DesignFlow Studio",
        location: "Remote",
        type: "Internship",
        salary: "$22/hr",
        posted: "5 days ago",
        matchScore: 76,
        skills: ["Figma", "User Research", "Wireframing"],
    },
    {
        id: 5,
        title: "Cloud Engineering Intern",
        company: "CloudScale Systems",
        location: "Austin, TX",
        type: "Internship",
        salary: "$28/hr",
        posted: "1 day ago",
        matchScore: 91,
        skills: ["AWS", "Docker", "Kubernetes"],
    },
];

function getMatchColor(score: number) {
    if (score >= 90) return "text-metric-green bg-metric-green/10";
    if (score >= 80) return "text-primary bg-primary/10";
    return "text-metric-orange bg-metric-orange/10";
}

const Careers = () => {
    return (
        <div className="min-h-screen bg-background">
            <DashboardSidebar />
            <div className="pl-64 min-h-screen transition-all duration-300">
                <DashboardHeader />
                <main className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-foreground">Career Opportunities</h1>
                            <p className="text-muted-foreground">AI-matched opportunities based on your skill profile</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-border">
                            <Brain className="h-3.5 w-3.5 text-primary" />
                            <span className="text-xs font-bold text-muted-foreground">Matched by: <span className="text-foreground">all-MiniLM-L6-v2</span> + <span className="text-foreground">Pinecone</span></span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {opportunities.map((job) => (
                            <div
                                key={job.id}
                                className="rounded-xl bg-card p-5 card-shadow hover:card-shadow-hover transition-all duration-300 group"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center">
                                                <Building2 className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                                    {job.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">{job.company}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-3">
                                            <span className="flex items-center gap-1">
                                                <MapPin className="h-4 w-4" /> {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Briefcase className="h-4 w-4" /> {job.type}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <DollarSign className="h-4 w-4" /> {job.salary}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" /> {job.posted}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {job.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-2 py-1 rounded-md bg-accent text-xs font-medium text-accent-foreground"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-3 ml-4">
                                        <span
                                            className={cn(
                                                "px-3 py-1.5 rounded-full text-sm font-bold",
                                                getMatchColor(job.matchScore)
                                            )}
                                        >
                                            {job.matchScore}% Match
                                        </span>
                                        <Button variant="outline" size="sm" className="gap-1">
                                            Apply <ExternalLink className="h-3 w-3" />
                                        </Button>
                                        <p className="text-[10px] text-muted-foreground text-right mt-1">
                                            via Transformer + Vector DB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Careers;
