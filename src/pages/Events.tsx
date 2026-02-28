import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Calendar, Clock, MapPin, Users, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const events = [
    {
        id: 1,
        title: "Advanced React Patterns Workshop",
        date: "2025-03-15",
        time: "10:00 AM - 12:00 PM",
        location: "Online",
        type: "workshop",
        attendees: 45,
        status: "upcoming",
    },
    {
        id: 2,
        title: "Machine Learning Fundamentals",
        date: "2025-03-18",
        time: "2:00 PM - 4:00 PM",
        location: "Room 302, CS Building",
        type: "lecture",
        attendees: 120,
        status: "upcoming",
    },
    {
        id: 3,
        title: "Resume Building & Career Fair Prep",
        date: "2025-03-20",
        time: "11:00 AM - 1:00 PM",
        location: "Online",
        type: "seminar",
        attendees: 80,
        status: "upcoming",
    },
    {
        id: 4,
        title: "Full-Stack Development Bootcamp",
        date: "2025-03-22",
        time: "9:00 AM - 5:00 PM",
        location: "Innovation Lab",
        type: "bootcamp",
        attendees: 30,
        status: "upcoming",
    },
    {
        id: 5,
        title: "Data Structures & Algorithms Review",
        date: "2025-03-10",
        time: "3:00 PM - 5:00 PM",
        location: "Online",
        type: "workshop",
        attendees: 65,
        status: "completed",
    },
];

const typeColors: Record<string, string> = {
    workshop: "bg-primary/10 text-primary",
    lecture: "bg-metric-purple/10 text-metric-purple",
    seminar: "bg-metric-orange/10 text-metric-orange",
    bootcamp: "bg-metric-green/10 text-metric-green",
};

const Events = () => {
    return (
        <div className="min-h-screen bg-background">
            <DashboardSidebar />
            <div className="pl-64 min-h-screen transition-all duration-300">
                <DashboardHeader />
                <main className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-foreground">Learning Events</h1>
                            <p className="text-muted-foreground">Discover workshops, seminars, and bootcamps</p>
                        </div>
                        <Button variant="hero" size="sm">
                            <Calendar className="h-4 w-4 mr-2" /> Sync Calendar
                        </Button>
                    </div>

                    <div className="space-y-4">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className={cn(
                                    "rounded-xl bg-card p-5 card-shadow hover:card-shadow-hover transition-all duration-300",
                                    event.status === "completed" && "opacity-60"
                                )}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span
                                                className={cn(
                                                    "px-2.5 py-1 rounded-full text-xs font-medium capitalize",
                                                    typeColors[event.type]
                                                )}
                                            >
                                                {event.type}
                                            </span>
                                            {event.status === "completed" && (
                                                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                                                    Completed
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-lg font-semibold text-foreground mb-2">{event.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" /> {event.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" /> {event.time}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="h-4 w-4" /> {event.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Users className="h-4 w-4" /> {event.attendees} attendees
                                            </span>
                                        </div>
                                    </div>
                                    {event.status === "upcoming" && (
                                        <Button variant="outline" size="sm" className="shrink-0 ml-4">
                                            {event.location === "Online" ? (
                                                <>
                                                    <Video className="h-4 w-4 mr-1" /> Join
                                                </>
                                            ) : (
                                                "Register"
                                            )}
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Events;
