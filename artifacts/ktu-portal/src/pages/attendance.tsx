import { motion } from "framer-motion";
import { studentData, currentCourses } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  AlertCircle, 
  CalendarDays, 
  CheckCircle2, 
  Download,
  Info
} from "lucide-react";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
} from "recharts";

export default function Attendance() {
  const getStatusProps = (percent: number) => {
    if (percent >= 85) return { color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", label: "Safe", chartColor: "#10b981" };
    if (percent >= 75) return { color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20", label: "Warning", chartColor: "#f59e0b" };
    return { color: "text-destructive", bg: "bg-destructive/10", border: "border-destructive/20", label: "Critical", chartColor: "#ef4444" };
  };

  const overallProps = getStatusProps(studentData.attendance);
  const pieData = [
    { name: "Attended", value: studentData.attendance },
    { name: "Missed", value: 100 - studentData.attendance }
  ];

  // Generate calendar mock data
  const daysInMonth = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    status: i % 7 === 0 || i % 7 === 6 ? 'holiday' : Math.random() > 0.15 ? 'present' : 'absent'
  }));

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-white mb-2">
            Attendance Dashboard
          </h1>
          <p className="text-muted-foreground">
            Current Semester ({studentData.semester}) • Detailed breakdown
          </p>
        </div>
        <Button variant="outline" className="border-border/50 bg-card/50">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {studentData.attendance < 80 && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-amber-500 font-medium">Attendance Warning</h4>
              <p className="text-amber-500/80 text-sm mt-1">Your overall attendance is below 80%. You need to maintain a minimum of 75% in each subject to be eligible for university exams.</p>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overall Stats */}
        <Card className="bg-card/30 border-border/40 backdrop-blur-md lg:col-span-1 flex flex-col justify-center relative overflow-hidden">
          <div className={`absolute -top-[10%] -right-[10%] w-[50%] h-[50%] ${overallProps.bg} rounded-full blur-[80px] pointer-events-none`} />
          <CardContent className="p-8 flex flex-col items-center justify-center text-center">
            <div className="w-48 h-48 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={90}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                    stroke="none"
                  >
                    <Cell fill={overallProps.chartColor} className="filter drop-shadow-[0_0_8px_rgba(var(--chart-color),0.5)]" style={{ '--chart-color': overallProps.chartColor } as any} />
                    <Cell fill="#1f2937" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-display font-bold text-white">{studentData.attendance}%</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Overall</span>
              </div>
            </div>
            
            <div className="mt-6 flex items-center gap-2">
              <Badge variant="outline" className={`${overallProps.bg} ${overallProps.border} ${overallProps.color}`}>
                Status: {overallProps.label}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-4 max-w-[250px]">
              You have attended 142 out of 168 total working hours this semester.
            </p>
          </CardContent>
        </Card>

        {/* Heatmap / Calendar */}
        <Card className="bg-card/30 border-border/40 backdrop-blur-md lg:col-span-2">
          <CardHeader className="border-b border-border/20">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">Monthly Presence</CardTitle>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Present</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-destructive" /> Absent</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-white/10" /> Holiday</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-medium text-muted-foreground uppercase">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {daysInMonth.map((d, i) => (
                <div 
                  key={i} 
                  className={`aspect-square rounded-lg flex items-center justify-center text-sm transition-all cursor-default
                    ${d.status === 'present' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/30' : 
                      d.status === 'absent' ? 'bg-destructive/20 text-destructive border border-destructive/20 hover:bg-destructive/30' : 
                      'bg-white/5 text-muted-foreground border border-white/5 hover:bg-white/10'}
                  `}
                  title={`${d.status === 'present' ? 'Present' : d.status === 'absent' ? 'Absent' : 'Holiday'}`}
                >
                  {d.day}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subject Breakdown Table */}
      <Card className="bg-card/30 border-border/40 backdrop-blur-md">
        <CardHeader className="border-b border-border/20">
          <CardTitle className="text-lg font-medium">Subject-wise Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground bg-white/5 uppercase border-b border-border/20">
              <tr>
                <th className="px-6 py-4 font-medium">Subject Code</th>
                <th className="px-6 py-4 font-medium">Subject Name</th>
                <th className="px-6 py-4 font-medium text-center">Classes</th>
                <th className="px-6 py-4 font-medium text-center">Percentage</th>
                <th className="px-6 py-4 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/20">
              {currentCourses.map((course, idx) => {
                const props = getStatusProps(course.attendance);
                return (
                  <motion.tr 
                    key={course.code}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="hover:bg-white/5 transition-colors group"
                  >
                    <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{course.code}</td>
                    <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">{course.name}</td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <span className="text-white">34</span>
                      <span className="text-muted-foreground"> / 40</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3 justify-center">
                        <span className="font-medium text-white w-10 text-right">{course.attendance}%</span>
                        <Progress 
                          value={course.attendance} 
                          className="h-2 w-24 bg-white/10"
                          indicatorColor={props.chartColor}
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <Badge variant="outline" className={`${props.bg} ${props.border} ${props.color}`}>
                        {props.label}
                      </Badge>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}