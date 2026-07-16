import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, TrendingUp, Award, Building, Activity } from "lucide-react";
import { 
  LineChart, 
  Line, 
  BarChart,
  Bar,
  XAxis, 
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Cell,
} from "recharts";

const nirfData = [
  { year: "2019", rank: 115 },
  { year: "2020", rank: 95 },
  { year: "2021", rank: 86 },
  { year: "2022", rank: 74 },
  { year: "2023", rank: 62 },
];

const comparisonData = [
  { name: "KTU", score: 85, fill: "#3b82f6" },
  { name: "CUSAT", score: 78, fill: "#1f2937" },
  { name: "MGU", score: 72, fill: "#1f2937" },
  { name: "Calicut", score: 65, fill: "#1f2937" },
];

export default function Rank() {
  return (
    <div className="space-y-8 pb-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="outline" className="mb-4 bg-amber-500/10 text-amber-500 border-amber-500/20 px-3 py-1">
          Institutional Excellence
        </Badge>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          University Rankings
        </h1>
        <p className="text-muted-foreground text-lg">
          KTU's continuous ascent in national and international academic benchmarks, reflecting our commitment to quality technical education.
        </p>
      </div>

      {/* Top Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
          <Card className="bg-gradient-to-b from-amber-500/10 to-card border-amber-500/20 backdrop-blur-md relative overflow-hidden group h-full">
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Trophy className="w-32 h-32 text-amber-500" />
            </div>
            <CardContent className="p-8">
              <Trophy className="w-8 h-8 text-amber-500 mb-4" />
              <p className="text-sm font-medium text-amber-500 mb-1 uppercase tracking-wider">NIRF India Rankings 2023</p>
              <div className="text-5xl font-display font-bold text-white mb-2">62<span className="text-2xl text-muted-foreground font-sans">nd</span></div>
              <p className="text-sm text-muted-foreground">Among all engineering institutions in India.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <Card className="bg-gradient-to-b from-emerald-500/10 to-card border-emerald-500/20 backdrop-blur-md relative overflow-hidden group h-full">
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award className="w-32 h-32 text-emerald-500" />
            </div>
            <CardContent className="p-8">
              <Award className="w-8 h-8 text-emerald-500 mb-4" />
              <p className="text-sm font-medium text-emerald-500 mb-1 uppercase tracking-wider">NAAC Accreditation</p>
              <div className="text-5xl font-display font-bold text-white mb-2">A+</div>
              <p className="text-sm text-muted-foreground">Awarded highest grade in the first cycle of accreditation.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
          <Card className="bg-gradient-to-b from-cyan-500/10 to-card border-cyan-500/20 backdrop-blur-md relative overflow-hidden group h-full">
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Building className="w-32 h-32 text-cyan-500" />
            </div>
            <CardContent className="p-8">
              <Building className="w-8 h-8 text-cyan-500 mb-4" />
              <p className="text-sm font-medium text-cyan-500 mb-1 uppercase tracking-wider">State Level</p>
              <div className="text-5xl font-display font-bold text-white mb-2">1<span className="text-2xl text-muted-foreground font-sans">st</span></div>
              <p className="text-sm text-muted-foreground">Top-ranked technical university in Kerala state.</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Trend Chart */}
        <Card className="bg-card/30 border-border/40 backdrop-blur-md">
          <CardHeader className="border-b border-border/20">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              NIRF Ranking Trend (5 Years)
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={nirfData} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                  <XAxis dataKey="year" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis reversed domain={['dataMin - 10', 'dataMax + 10']} stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#12121c', borderColor: '#27272a', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                    formatter={(value) => [`Rank ${value}`, "Position"]}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="rank" 
                    stroke="#3b82f6" 
                    strokeWidth={4}
                    dot={{ fill: '#0a0a0f', stroke: '#3b82f6', strokeWidth: 3, r: 6 }}
                    activeDot={{ fill: '#3b82f6', stroke: '#fff', strokeWidth: 2, r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Lower number indicates a higher rank position.
            </p>
          </CardContent>
        </Card>

        {/* Peer Comparison */}
        <Card className="bg-card/30 border-border/40 backdrop-blur-md">
          <CardHeader className="border-b border-border/20">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              State Peer Comparison Score
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="#a1a1aa" fontSize={13} tickLine={false} axisLine={false} width={80} />
                  <RechartsTooltip 
                    cursor={{ fill: '#ffffff0a' }}
                    contentStyle={{ backgroundColor: '#12121c', borderColor: '#27272a', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                    {comparisonData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-4 flex gap-4 items-start">
              <Star className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Scores are based on teaching, learning resources, research output, and professional practices as evaluated by standard agencies.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}