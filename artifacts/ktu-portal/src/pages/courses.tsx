import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { currentCourses } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Filter, 
  BookOpen, 
  Award, 
  User, 
  ChevronDown,
  FileText,
  Video
} from "lucide-react";

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredCourses = currentCourses.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-8">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-white mb-2">
            Course Catalog
          </h1>
          <p className="text-muted-foreground">
            S6 Computer Science & Engineering
          </p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search by name or code..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 bg-card/50 border-border/50 focus-visible:ring-primary/50"
            />
          </div>
          <div className="p-2 border border-border/50 rounded-md bg-card/50 text-muted-foreground hover:text-white cursor-pointer transition-colors">
            <Filter className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCourses.map((course, idx) => {
          const isExpanded = expandedId === course.code;
          const isPractical = course.credits === 0 || course.name.includes("Lab");
          
          return (
            <motion.div 
              key={course.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card className={`bg-card/30 border-border/40 backdrop-blur-md overflow-hidden transition-all duration-300
                ${isExpanded ? 'ring-1 ring-primary/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]' : 'hover:border-border'}
              `}>
                <div 
                  className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                  onClick={() => setExpandedId(isExpanded ? null : course.code)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className={`font-mono ${isPractical ? 'text-zinc-400 border-zinc-500/30 bg-zinc-500/10' : 'text-primary border-primary/30 bg-primary/10'}`}>
                        {course.code}
                      </Badge>
                      <Badge variant="secondary" className="bg-white/5 hover:bg-white/10">
                        {course.credits} Credits
                      </Badge>
                    </div>
                    <h3 className="text-xl font-medium text-white group-hover:text-primary transition-colors">
                      {course.name}
                    </h3>
                    <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {course.faculty}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2 shrink-0">
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Internal Marks</div>
                      <div className="text-xl font-display font-bold text-white">
                        {course.internal !== null ? (
                          <><span className="text-emerald-400">{course.internal}</span> <span className="text-muted-foreground text-sm font-sans font-normal">/ 50</span></>
                        ) : (
                          <span className="text-muted-foreground text-sm font-sans font-normal">N/A</span>
                        )}
                      </div>
                    </div>
                    <div className={`p-1.5 rounded-full bg-white/5 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-primary/20 text-primary' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-border/20 p-6 bg-white/[0.02]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                          {/* Syllabus Progress */}
                          <div>
                            <h4 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-primary" />
                              Syllabus Coverage
                            </h4>
                            <div className="space-y-4">
                              <div>
                                <div className="flex justify-between text-xs mb-1.5">
                                  <span className="text-muted-foreground">Module 1 & 2</span>
                                  <span className="text-emerald-400 font-medium">100%</span>
                                </div>
                                <Progress value={100} className="h-1.5 bg-white/5" indicatorColor="#10b981" />
                              </div>
                              <div>
                                <div className="flex justify-between text-xs mb-1.5">
                                  <span className="text-muted-foreground">Module 3</span>
                                  <span className="text-primary font-medium">80%</span>
                                </div>
                                <Progress value={80} className="h-1.5 bg-white/5" indicatorColor="#3b82f6" />
                              </div>
                              <div>
                                <div className="flex justify-between text-xs mb-1.5">
                                  <span className="text-muted-foreground">Module 4</span>
                                  <span className="text-muted-foreground">0%</span>
                                </div>
                                <Progress value={0} className="h-1.5 bg-white/5" />
                              </div>
                            </div>
                          </div>

                          {/* Quick Resources */}
                          <div>
                            <h4 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
                              <FileText className="w-4 h-4 text-cyan-400" />
                              Resources
                            </h4>
                            <div className="space-y-2">
                              <div className="p-3 rounded-lg border border-border/40 bg-card/50 flex items-center justify-between hover:border-primary/50 hover:bg-primary/5 cursor-pointer transition-colors group">
                                <div className="flex items-center gap-3">
                                  <FileText className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                  <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">Course Syllabus PDF</span>
                                </div>
                              </div>
                              <div className="p-3 rounded-lg border border-border/40 bg-card/50 flex items-center justify-between hover:border-cyan-500/50 hover:bg-cyan-500/5 cursor-pointer transition-colors group">
                                <div className="flex items-center gap-3">
                                  <Video className="w-4 h-4 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                                  <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">Lecture Recordings</span>
                                </div>
                              </div>
                              <div className="p-3 rounded-lg border border-border/40 bg-card/50 flex items-center justify-between hover:border-emerald-500/50 hover:bg-emerald-500/5 cursor-pointer transition-colors group">
                                <div className="flex items-center gap-3">
                                  <Award className="w-4 h-4 text-muted-foreground group-hover:text-emerald-400 transition-colors" />
                                  <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">Previous Year Questions</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}