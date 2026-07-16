import { motion } from "framer-motion";
import { timetable, currentCourses } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, User, Calendar as CalendarIcon } from "lucide-react";

export default function Timetable() {
  const timeslots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  // Helper to find course details
  const getCourse = (code: string) => currentCourses.find(c => c.code === code);

  // Map subjects to colors for visual distinction
  const colors = [
    "from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-300",
    "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-300",
    "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-300",
    "from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-300",
    "from-amber-500/20 to-amber-500/5 border-amber-500/30 text-amber-300",
    "from-rose-500/20 to-rose-500/5 border-rose-500/30 text-rose-300",
  ];
  const colorMap: Record<string, string> = {};
  currentCourses.forEach((c, i) => {
    colorMap[c.code] = colors[i % colors.length];
  });
  colorMap["LAB"] = "from-zinc-500/20 to-zinc-500/5 border-zinc-500/30 text-zinc-300";

  // Current time mock logic
  const currentDay = "Tue";
  const currentSlotIndex = 2; // 11:00 AM

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-white mb-2">
            Weekly Timetable
          </h1>
          <p className="text-muted-foreground">
            S6 CSE • Room CS-302
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card/50 border border-border/50 px-4 py-2 rounded-lg">
          <CalendarIcon className="w-4 h-4 text-primary" />
          <span>Showing current week</span>
        </div>
      </div>

      <Card className="bg-card/30 border-border/40 backdrop-blur-md overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            {/* Grid Header (Times) */}
            <div className="grid grid-cols-[100px_repeat(8,1fr)] bg-white/5 border-b border-border/20">
              <div className="p-4 border-r border-border/20 flex items-center justify-center text-muted-foreground">
                <Clock className="w-4 h-4" />
              </div>
              {timeslots.map((time, i) => (
                <div key={time} className={`p-3 text-center text-xs font-medium uppercase tracking-wider relative
                  ${i === currentSlotIndex ? 'text-primary bg-primary/5' : 'text-muted-foreground'}
                `}>
                  {time}
                  {i === currentSlotIndex && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  )}
                </div>
              ))}
            </div>

            {/* Grid Body */}
            <div className="divide-y divide-border/20">
              {timetable.map((dayData, dayIdx) => {
                const isToday = dayData.day === currentDay;
                
                return (
                  <motion.div 
                    key={dayData.day}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: dayIdx * 0.1 }}
                    className={`grid grid-cols-[100px_repeat(8,1fr)] transition-colors hover:bg-white-[0.02]
                      ${isToday ? 'bg-white/5 relative' : ''}
                    `}
                  >
                    {isToday && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10" />
                    )}
                    
                    {/* Day Column */}
                    <div className={`p-4 border-r border-border/20 flex items-center justify-center font-medium
                      ${isToday ? 'text-primary' : 'text-muted-foreground'}
                    `}>
                      {dayData.day}
                    </div>

                    {/* Slots */}
                    {dayData.slots.map((slot, slotIdx) => {
                      if (slot === "LUNCH") {
                        return (
                          <div key={`${dayData.day}-${slotIdx}`} className="p-2 border-r border-border/10 bg-white/[0.02] flex items-center justify-center">
                            <span className="text-xs text-muted-foreground/50 rotate-[-90deg] tracking-widest font-medium uppercase">BREAK</span>
                          </div>
                        );
                      }

                      if (slot === "-") {
                        return <div key={`${dayData.day}-${slotIdx}`} className="p-2 border-r border-border/10"></div>;
                      }

                      const course = getCourse(slot);
                      const colorClass = colorMap[slot] || "from-white/10 to-white/5 border-white/10 text-white/70";
                      const isCurrentSlot = isToday && slotIdx === currentSlotIndex;

                      return (
                        <div key={`${dayData.day}-${slotIdx}`} className={`p-2 border-r border-border/10 relative ${isCurrentSlot ? 'ring-1 ring-primary/50 bg-primary/5 z-10' : ''}`}>
                          {isCurrentSlot && (
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full ring-2 ring-background animate-pulse" />
                          )}
                          
                          <div className={`h-full rounded-xl bg-gradient-to-br border p-3 flex flex-col justify-between transition-all hover:scale-[1.02] hover:shadow-lg cursor-pointer ${colorClass}`}>
                            <div>
                              <span className="text-xs font-bold tracking-wider mb-1 block">{slot}</span>
                              <span className="text-xs font-medium text-white/90 line-clamp-2 leading-tight">
                                {course ? course.name : slot === "LAB" ? "Practical Lab" : "Subject"}
                              </span>
                            </div>
                            
                            <div className="mt-3 flex items-center justify-between opacity-70 group-hover:opacity-100">
                              <MapPin className="w-3 h-3" />
                              <span className="text-[10px] truncate ml-1 flex-1">
                                {course?.faculty.split(' ')[1] || 'Staff'}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Card>
      
      {/* Legend */}
      <div className="flex flex-wrap gap-4 px-2">
        {currentCourses.map(course => (
          <div key={course.code} className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className={`w-3 h-3 rounded-full bg-gradient-to-br border ${colorMap[course.code]}`} />
            <span className="font-medium text-white">{course.code}</span>
            <span>-</span>
            <span>{course.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}