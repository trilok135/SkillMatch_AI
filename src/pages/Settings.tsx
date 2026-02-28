import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Bell, Shield, Eye, Palette, Globe, Save } from "lucide-react";

const Settings = () => {
    const { user } = useAuth();
    const { toast } = useToast();

    const handleSave = () => {
        toast({ title: "Settings saved", description: "Your preferences have been updated." });
    };

    return (
        <div className="min-h-screen bg-background">
            <DashboardSidebar />
            <div className="pl-64 min-h-screen transition-all duration-300">
                <DashboardHeader />
                <main className="p-6 space-y-6 max-w-3xl">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
                        <p className="text-muted-foreground">Manage your account preferences</p>
                    </div>

                    {/* Account */}
                    <div className="rounded-xl bg-card p-6 card-shadow space-y-4">
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            <Shield className="h-5 w-5 text-primary" /> Account
                        </h3>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input value={user?.email || ""} disabled className="bg-muted" />
                            </div>
                            <div className="space-y-2">
                                <Label>Role</Label>
                                <Input
                                    value={user?.user_metadata?.role || "student"}
                                    disabled
                                    className="bg-muted capitalize"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="rounded-xl bg-card p-6 card-shadow space-y-4">
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            <Bell className="h-5 w-5 text-primary" /> Notifications
                        </h3>
                        <div className="space-y-4">
                            {[
                                { label: "Email notifications", desc: "Receive updates and alerts via email" },
                                { label: "Course reminders", desc: "Get reminders for upcoming deadlines" },
                                { label: "New opportunities", desc: "Be notified of matching career opportunities" },
                                { label: "Assessment results", desc: "Notifications when results are available" },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Privacy */}
                    <div className="rounded-xl bg-card p-6 card-shadow space-y-4">
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            <Eye className="h-5 w-5 text-primary" /> Privacy
                        </h3>
                        <div className="space-y-4">
                            {[
                                { label: "Profile visibility", desc: "Allow employers to view your profile" },
                                { label: "Show skill scores", desc: "Display scores on your public profile" },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button variant="hero" className="gap-2" onClick={handleSave}>
                        <Save className="h-4 w-4" /> Save Settings
                    </Button>
                </main>
            </div>
        </div>
    );
};

export default Settings;
