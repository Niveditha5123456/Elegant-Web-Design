import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, BookOpen, GraduationCap, Award, Globe, ShieldCheck, MapPin } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Affiliated Colleges", value: "156+", icon: Building2, color: "text-blue-400" },
    { label: "Active Students", value: "200,000+", icon: Users, color: "text-cyan-400" },
    { label: "Programs Offered", value: "85+", icon: BookOpen, color: "text-emerald-400" },
    { label: "Alumni Network", value: "50,000+", icon: GraduationCap, color: "text-purple-400" },
  ];

  const milestones = [
    { year: "2014", title: "Foundation", desc: "Kerala Technological University established by the Government of Kerala." },
    { year: "2015", title: "First Batch", desc: "Admitted the first batch of engineering students across affiliated colleges." },
    { year: "2018", title: "PG Expansion", desc: "Introduced unified M.Tech and Ph.D. regulations." },
    { year: "2019", title: "Autonomy Status", desc: "Granted full academic autonomy by UGC." },
    { year: "2023", title: "NAAC A+ Grade", desc: "Achieved the highest accreditation rating in first cycle." },
  ];

  return (
    <div className="space-y-8 pb-8 max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/5 pointer-events-none" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
        
        <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)] border border-white/10 shrink-0"
          >
            <span className="font-display font-bold text-5xl md:text-7xl text-white tracking-tighter">KTU</span>
          </motion.div>
          
          <div className="text-center md:text-left">
            <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Est. 2014 • Trivandrum, Kerala
            </Badge>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              APJ Abdul Kalam <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Technological University</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
              A premier technical university driving innovation, research, and engineering excellence across the state of Kerala.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * idx }}
          >
            <Card className="bg-card/40 border-border/50 backdrop-blur-sm hover:bg-card/60 transition-colors text-center py-6">
              <CardContent className="p-0 flex flex-col items-center justify-center">
                <div className={`p-3 rounded-2xl bg-white/5 mb-4 ${stat.color} ring-1 ring-white/10`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mission & Vision */}
        <div className="md:col-span-2 space-y-6">
          <Card className="bg-card/30 border-border/40 backdrop-blur-md overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-primary" />
                <h3 className="font-display text-xl font-semibold text-white">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be an institution of global standing for shaping technology leaders and innovators who can contribute to sustainable development and the progress of humanity.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/30 border-border/40 backdrop-blur-md overflow-hidden relative">
             <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-5 h-5 text-cyan-500" />
                <h3 className="font-display text-xl font-semibold text-white">Our Mission</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">•</span>
                  To provide quality technical education accessible and affordable to all.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">•</span>
                  To foster a culture of research, innovation, and entrepreneurship.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">•</span>
                  To promote collaboration with industry and premier academic institutions globally.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Info Column */}
        <div className="space-y-6">
          <Card className="bg-card/30 border-border/40 backdrop-blur-md">
            <CardContent className="p-6">
              <h3 className="font-display text-lg font-semibold text-white mb-6">Institution Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">Accreditation</p>
                    <p className="text-xs text-emerald-400 mt-0.5">NAAC A+ Grade</p>
                    <p className="text-xs text-muted-foreground">UGC Recognized</p>
                  </div>
                </div>
                <div className="w-full h-px bg-border/50" />
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">Headquarters</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      CET Campus, Thiruvananthapuram<br />
                      Kerala, India 695016
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* History Timeline */}
      <div>
        <h3 className="font-display text-2xl font-semibold text-white mb-8 text-center">Journey of Excellence</h3>
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2" />
          
          <div className="space-y-8">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className={`relative flex items-center md:justify-between w-full pl-12 md:pl-0`}
                >
                  {/* Marker */}
                  <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background border-2 border-background -translate-x-1/2 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10" />
                  
                  {/* Content */}
                  <div className={`md:w-[45%] ${isEven ? 'md:text-right md:pr-10' : 'md:text-left md:ml-auto md:pl-10'}`}>
                    <div className="bg-card/30 border border-border/40 backdrop-blur-md rounded-2xl p-5 hover:bg-card/50 transition-colors">
                      <span className="text-primary font-display font-bold text-xl block mb-2">{item.year}</span>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}