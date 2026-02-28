import { Search, Bell, Download, ChevronDown, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/components/AuthProvider";
import { useState } from "react";

export function DashboardHeader() {
  const { user, signOut } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);

  const displayName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "User";
  const initials = displayName
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  const role = user?.user_metadata?.role || "student";

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const handleDownloadReport = () => {
    const reportData = `SkillMatch AI - Learning Report
Generated: ${new Date().toLocaleDateString()}
User: ${displayName}

Metric,Value
Courses Enrolled,12
Skill Tracks,8
Assessments Scheduled,4
Skill Match Accuracy,87%
Certifications Earned,5
Avg Time to Complete,18 days
`;
    const blob = new Blob([reportData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `skillmatch-report-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-border bg-card px-6">
      {/* Search */}
      <form onSubmit={handleSearch} className="relative flex-1 max-w-xl">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search courses, internships, skills..."
          className="pl-10 bg-background border-border focus:ring-primary font-medium"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="gap-2" onClick={handleDownloadReport}>
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Download Report</span>
        </Button>

        <button className="relative p-2 rounded-lg hover:bg-accent transition-colors">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" />
        </button>

        <div className="relative">
          <button
            className="flex items-center gap-2 pl-3 border-l border-border hover:bg-accent rounded-lg p-1 transition-colors"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">{initials}</span>
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-semibold text-foreground">{displayName}</p>
              <p className="text-xs text-muted-foreground capitalize">{role}</p>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>

          {showUserMenu && (
            <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-card border border-border card-shadow-hover p-2 z-50">
              <button
                onClick={signOut}
                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
              >
                <LogOut className="h-4 w-4" /> Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
