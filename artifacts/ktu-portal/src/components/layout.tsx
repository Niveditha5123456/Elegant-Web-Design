import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  CalendarDays, 
  GraduationCap, 
  BookOpen, 
  Wallet, 
  Trophy, 
  Library,
  LogOut,
  Bell,
  Search,
  Menu
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { studentData } from "@/lib/mock-data";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_ITEMS = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/attendance", label: "Attendance", icon: CalendarDays },
  { href: "/timetable", label: "Timetable", icon: BookOpen },
  { href: "/courses", label: "Courses", icon: GraduationCap },
  { href: "/fees", label: "Fee Details", icon: Wallet },
  { href: "/rank", label: "Rank & Stats", icon: Trophy },
  { href: "/about", label: "Institution", icon: Library },
];

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavContent = () => (
    <>
      <div className="px-6 py-8 flex flex-col items-center border-b border-border/50">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          <span className="font-display font-bold text-xl text-primary-foreground">KTU</span>
        </div>
        <h2 className="font-display font-semibold text-lg tracking-wider text-foreground">APJAKTU</h2>
        <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest font-medium">Student Portal</p>
      </div>

      <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 relative group
                  ${isActive 
                    ? "text-primary bg-primary/10 shadow-[inset_0_0_20px_rgba(59,130,246,0.05)] border border-primary/20" 
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-primary" : "group-hover:text-foreground transition-colors"}`} />
                <span className="font-medium text-sm">{item.label}</span>
                {isActive && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-border/50 bg-black/20">
        <div className="flex items-center gap-3 mb-4 p-2 rounded-lg bg-card/50 border border-border/50">
          <Avatar className="w-10 h-10 border border-primary/30">
            <AvatarFallback className="bg-primary/20 text-primary">{studentData.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="overflow-hidden">
            <p className="text-sm font-medium text-foreground truncate">{studentData.name}</p>
            <p className="text-xs text-muted-foreground truncate">{studentData.rollNumber}</p>
          </div>
        </div>
        <Link href="/login">
          <Button variant="outline" className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10 border-border/50">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </Link>
      </div>
    </>
  );

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-foreground selection:bg-primary/30">
      
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-72 bg-card border-r border-border/50 shadow-2xl z-20 relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-primary/5 before:to-transparent before:opacity-50 before:pointer-events-none">
        <NavContent />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Subtle background effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Topbar */}
        <header className="h-20 flex items-center justify-between px-6 lg:px-10 border-b border-border/50 bg-background/80 backdrop-blur-xl z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0 bg-card border-r-border/50 flex flex-col">
                <NavContent />
              </SheetContent>
            </Sheet>
            
            <div className="hidden lg:flex items-center relative">
              <Search className="w-4 h-4 absolute left-3 text-muted-foreground" />
              <Input 
                placeholder="Search resources..." 
                className="w-64 pl-9 bg-card/50 border-border/50 focus-visible:ring-primary/50"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-destructive rounded-full shadow-[0_0_8px_rgba(225,29,72,0.8)] animate-pulse" />
            </Button>
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium">{studentData.semester}</p>
              <p className="text-xs text-muted-foreground">{studentData.department}</p>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={location}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="min-h-full p-6 lg:p-10 max-w-[1400px] mx-auto w-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
