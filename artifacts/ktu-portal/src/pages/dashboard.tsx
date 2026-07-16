import { motion } from "framer-motion";
import { studentData, currentCourses, timeline, feeHistory } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  CalendarDays, 
  Wallet, 
  Trophy, 
  GraduationCap, 
  ChevronRight,
  Clock,
  AlertCircle,
  CheckCircle2,
  FileText
} from "lucide-react";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip as RechartsTooltip,
} from "recharts";

const performanceData = [
  { sem: "S1", cgpa: 8.2 },
  { sem: "S2", cgpa: 8.5 },
  { sem: "S3", cgpa: 8.1 },
  { sem: "S4", cgpa: 8.6 },
  { sem: "S5", cgpa: 8.9 },
  { sem: "S6", cgpa: 8.76 },
];

export default function Dashboard() {
  const attendanceColor = studentData.attendance >= 75 ? "#10b981" : "#f59e0b";
  const attendanceData = [
    { name: "Present", value: studentData.attendance },
    { name: "Absent", value: 100 - studentData.attendance }
  ];

  return (
    <div className="space-y-8 pb-8">
      {/* Header section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-white mb-2">
            Welcome back, {studentData.name.split(' ')[0]}
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your academic profile today.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-border/50 bg-card/50 backdrop-blur-sm">
            <FileText className="w-4 h-4 mr-2" />
            Download Transcript
          </Button>
        </div>
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="bg-card/50 backdrop-blur-md border-border/50 hover:bg-card/80 transition-colors overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <CalendarDays className="w-16 h-16 text-primary" />
            </div>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">Overall Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-display font-bold text-white mb-1">
                {studentData.attendance}%
              </div>
              <div className="flex items-center text-xs">
                <span className={`flex items-center ${studentData.attendance >= 75 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {studentData.attendance >= 75 ? <CheckCircle2 className="w-3 h-3 mr-1" /> : <AlertCircle className="w-3 h-3 mr-1" />}
                  {studentData.attendance >= 75 ? 'Safe Zone' : 'Warning'}
                </span>
                <span className="text-muted-foreground ml-2">Target: 75%</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="bg-card/50 backdrop-blur-md border-border/50 hover:bg-card/80 transition-colors overflow-hidden relative group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <GraduationCap className="w-16 h-16 text-primary" />
            </div>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">Current CGPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-display font-bold text-white mb-1">
                {studentData.cgpa}
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <span className="text-primary font-medium mr-1">Top 15%</span> of your batch
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="bg-card/50 backdrop-blur-md border-border/50 hover:bg-card/80 transition-colors overflow-hidden relative group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Wallet className="w-16 h-16 text-destructive" />
            </div>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Dues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-display font-bold text-white mb-1">
                ₹{studentData.dues.toLocaleString()}
              </div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <Link href="/fees" className="text-primary hover:underline inline-flex items-center">
                  Pay now <ChevronRight className="w-3 h-3 ml-0.5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="bg-card/50 backdrop-blur-md border-border/50 hover:bg-card/80 transition-colors overflow-hidden relative group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Trophy className="w-16 h-16 text-amber-500" />
            </div>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">University Rank</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-display font-bold text-white mb-1">
                #{studentData.rank}
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <span className="text-emerald-400 inline-flex items-center mr-1">
                   ▲ 12 
                </span>
                positions up from S5
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Today's Classes */}
          <Card className="bg-card/30 border-border/40 backdrop-blur-xl">
            <CardHeader className="flex flex-row items-center justify-between border-b border-border/20 pb-4">
              <CardTitle className="text-lg font-medium">Classes Today</CardTitle>
              <Link href="/timetable">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  Full Timetable <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border/20">
                {[
                  { time: "09:00 AM", sub: "Compiler Design", room: "CS-302", active: false, past: true },
                  { time: "10:00 AM", sub: "Algorithm Analysis", room: "CS-304", active: true, past: false },
                  { time: "11:00 AM", sub: "Industrial Economics", room: "Main Block", active: false, past: false },
                  { time: "01:00 PM", sub: "Computer Graphics", room: "CS-302", active: false, past: false },
                ].map((cls, i) => (
                  <div key={i} className={`p-4 flex items-center gap-4 transition-colors hover:bg-white/5 ${cls.active ? 'bg-primary/5 relative' : ''}`}>
                    {cls.active && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    )}
                    <div className={`w-20 text-sm font-medium ${cls.past ? 'text-muted-foreground line-through decoration-muted-foreground/50' : cls.active ? 'text-primary' : 'text-foreground'}`}>
                      {cls.time}
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${cls.past ? 'text-muted-foreground' : 'text-white'}`}>{cls.sub}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3" /> Room {cls.room}
                      </p>
                    </div>
                    {cls.active && (
                      <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 animate-pulse">
                        In Progress
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Academic Performance Chart */}
          <Card className="bg-card/30 border-border/40 backdrop-blur-xl">
            <CardHeader className="border-b border-border/20 pb-4">
              <CardTitle className="text-lg font-medium">CGPA Trend</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 pb-2">
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <XAxis dataKey="sem" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                    <RechartsTooltip 
                      contentStyle={{ backgroundColor: '#12121c', borderColor: '#27272a', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="cgpa" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      dot={{ fill: '#0a0a0f', stroke: '#3b82f6', strokeWidth: 2, r: 4 }}
                      activeDot={{ fill: '#3b82f6', stroke: '#fff', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Right Column - Sidebar Widgets */}
        <div className="space-y-6">
          
          {/* Notification Timeline */}
          <Card className="bg-card/30 border-border/40 backdrop-blur-xl h-[400px] flex flex-col">
            <CardHeader className="border-b border-border/20 pb-4 shrink-0">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                Recent Updates
                <Badge variant="secondary" className="bg-white/10 ml-auto">4 New</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 flex-1 overflow-y-auto">
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:to-transparent">
                {timeline.map((item, i) => (
                  <div key={i} className="relative flex items-start gap-4">
                    <div className={`w-4 h-4 rounded-full border-2 shrink-0 z-10 mt-1
                      ${item.type === 'alert' ? 'border-amber-400 bg-amber-400/20' : 
                        item.type === 'academic' ? 'border-primary bg-primary/20' :
                        item.type === 'payment' ? 'border-emerald-400 bg-emerald-400/20' :
                        'border-destructive bg-destructive/20'}
                    `} />
                    <div>
                      <p className="text-sm font-medium text-white leading-tight">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-card/30 border-border/40 backdrop-blur-xl">
            <CardHeader className="border-b border-border/20 pb-4">
              <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-4 grid grid-cols-2 gap-3">
              <Button variant="secondary" className="h-auto py-3 flex flex-col items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5">
                <FileText className="w-5 h-5 text-cyan-400" />
                <span className="text-xs">Exam Reg</span>
              </Button>
              <Button variant="secondary" className="h-auto py-3 flex flex-col items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5">
                <Wallet className="w-5 h-5 text-emerald-400" />
                <span className="text-xs">Pay Fees</span>
              </Button>
              <Button variant="secondary" className="h-auto py-3 flex flex-col items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="text-xs">Certificates</span>
              </Button>
              <Button variant="secondary" className="h-auto py-3 flex flex-col items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                <span className="text-xs">Grievance</span>
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}