import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { useAuth } from "@/components/AuthProvider";
import { User, Mail, MapPin, Briefcase, Award, BookOpen, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
    const { user } = useAuth();
    const { toast } = useToast();
    const [editing, setEditing] = useState(false);
    const [fullName, setFullName] = useState(user?.user_metadata?.full_name || "");
    const [bio, setBio] = useState("");
    const [location, setLocation] = useState("");

    const skills = ["JavaScript", "React", "TypeScript", "Node.js", "Python", "SQL", "Git", "AWS"];

    const handleSave = () => {
        setEditing(false);
        toast({ title: "Profile updated", description: "Your profile has been saved." });
    };

    return (
        <div className="min-h-screen bg-background">
            <DashboardSidebar />
            <div className="pl-64 min-h-screen transition-all duration-300">
                <DashboardHeader />
                <main className="p-6 space-y-6">
                    {/* Profile Header Card */}
                    <div className="rounded-xl bg-card p-6 card-shadow">
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className="h-20 w-20 rounded-full hero-gradient flex items-center justify-center">
                                    <span className="text-2xl font-bold text-primary-foreground">
                                        {(fullName || user?.email || "U").charAt(0).toUpperCase()}
                                    </span>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-foreground">
                                        {fullName || "Your Name"}
                                    </h1>
                                    <p className="text-muted-foreground flex items-center gap-1">
                                        <Mail className="h-4 w-4" /> {user?.email}
                                    </p>
                                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                        <MapPin className="h-3 w-3" /> {location || "Location not set"}
                                    </p>
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                className="gap-2"
                                onClick={() => (editing ? handleSave() : setEditing(true))}
                            >
                                <Edit3 className="h-4 w-4" />
                                {editing ? "Save" : "Edit Profile"}
                            </Button>
                        </div>

                        {editing && (
                            <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-border">
                                <div className="space-y-2">
                                    <Label>Full Name</Label>
                                    <Input value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label>Location</Label>
                                    <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g., New York, USA" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <Label>Bio</Label>
                                    <textarea
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                        rows={3}
                                        value={bio}
                                        onChange={(e) => setBio(e.target.value)}
                                        placeholder="Tell us about yourself..."
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* Skills */}
                        <div className="rounded-xl bg-card p-6 card-shadow">
                            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                <Award className="h-5 w-5 text-primary" /> Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-full bg-accent text-sm font-medium text-accent-foreground"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="rounded-xl bg-card p-6 card-shadow">
                            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-primary" /> Learning Stats
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Courses Enrolled", value: "12" },
                                    { label: "Certifications", value: "5" },
                                    { label: "Assessments", value: "24" },
                                    { label: "Skill Score", value: "87%" },
                                ].map((stat) => (
                                    <div key={stat.label} className="text-center p-3 rounded-lg bg-background">
                                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                                        <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Profile;
