import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Lock, Mail, ChevronRight } from "lucide-react";

export default function Login() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login delay
    setTimeout(() => {
      setLocation("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] flex items-center justify-center relative overflow-hidden font-sans selection:bg-primary/30">
      
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-cyan-500/10 rounded-full blur-[150px] mix-blend-screen" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[440px] px-6 relative z-10"
      >
        <div className="bg-[#12121c]/80 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle top edge glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          {/* Logo / Branding */}
          <div className="flex flex-col items-center mb-10">
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-16 h-16 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)] border border-white/10"
            >
              <span className="font-display font-bold text-2xl text-white">KTU</span>
            </motion.div>
            <h1 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight text-center">
              Student Portal
            </h1>
            <p className="text-muted-foreground mt-2 text-sm text-center">
              Kerala Technological University
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">University Email / Roll No</Label>
                <div className="relative group">
                  <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" />
                  <Input 
                    id="email" 
                    type="text" 
                    placeholder="e.g. TVE21CS001" 
                    required
                    className="pl-10 bg-black/40 border-white/5 focus-visible:border-primary/50 focus-visible:ring-primary/20 h-12 text-base transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-300">Password</Label>
                  <Link href="/forgot-password">
                    <span className="text-xs text-primary hover:text-primary/80 transition-colors cursor-pointer">
                      Forgot password?
                    </span>
                  </Link>
                </div>
                <div className="relative group">
                  <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    required
                    className="pl-10 bg-black/40 border-white/5 focus-visible:border-primary/50 focus-visible:ring-primary/20 h-12 text-base transition-all"
                  />
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-base font-medium shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 group"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <span>Sign In to Mission Control</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </Button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-xs text-gray-500">
              Only authorized students can access this portal.<br/>
              Accounts are provisioned by your institution.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
