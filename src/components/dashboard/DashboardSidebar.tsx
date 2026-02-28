import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Calendar,
  User,
  Briefcase,
  Video,
  Star,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  LogOut,
  Brain,
} from "lucide-react";
import { useState } from "react";
import { SkillMatchLogo } from "@/components/SkillMatchLogo";
import { useAuth } from "@/components/AuthProvider";

const navigationItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Learning Events", href: "/events", icon: Calendar },
  { name: "My Profile", href: "/profile", icon: User },
  { name: "Career Opportunities", href: "/careers", icon: Briefcase },
  { name: "AI Analysis", href: "/ai-analysis", icon: Brain },
  { name: "Mock Interviews", href: "/interviews", icon: Video },
  { name: "Skill Reviews", href: "/reviews", icon: Star },
  { name: "Learning Reports", href: "/reports", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function DashboardSidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const { signOut } = useAuth();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-card border-r border-border transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between px-4 border-b border-border">
        {!collapsed && (
          <Link to="/" className="flex items-center gap-2">
            <SkillMatchLogo size="sm" />
          </Link>
        )}
        {collapsed && (
          <div className="mx-auto">
            <SkillMatchLogo size="sm" iconOnly />
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "p-1.5 rounded-md hover:bg-accent transition-colors",
            collapsed && "mx-auto mt-2"
          )}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 p-3 flex-1">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 relative",
                isActive
                  ? "bg-accent text-accent-foreground font-bold"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground font-medium",
                collapsed && "justify-center px-2"
              )}
              title={collapsed ? item.name : undefined}
            >
              {/* Active indicator bar */}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-primary rounded-r-full" />
              )}
              <item.icon className={cn("h-5 w-5 shrink-0", isActive && "text-primary")} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="p-3 border-t border-border">
        {!collapsed && (
          <div className="rounded-xl bg-accent p-4 mb-3 border-t-4 border-t-primary">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-bold text-foreground">AI Assistant</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Get personalized learning recommendations powered by AI.
            </p>
          </div>
        )}
        <button
          onClick={signOut}
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium w-full",
            "text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all duration-200",
            collapsed && "justify-center px-2"
          )}
          title={collapsed ? "Log out" : undefined}
        >
          <LogOut className="h-5 w-5 shrink-0" />
          {!collapsed && <span>Log out</span>}
        </button>
      </div>
    </aside>
  );
}
