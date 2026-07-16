import { Link } from "wouter";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ForgotPassword() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] flex items-center justify-center relative overflow-hidden font-sans selection:bg-primary/30">
      
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[400px] px-6 relative z-10"
      >
        <Link href="/login">
          <div className="inline-flex items-center text-sm text-muted-foreground hover:text-white mb-6 transition-colors cursor-pointer group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to login
          </div>
        </Link>

        <div className="bg-[#12121c]/80 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          
          <div className="mb-8">
            <h1 className="font-display text-2xl font-semibold text-white tracking-tight">
              Reset Password
            </h1>
            <p className="text-muted-foreground mt-2 text-sm">
              Enter your registered university email to receive recovery instructions.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Check your email</h3>
              <p className="text-sm text-muted-foreground mb-6">
                We've sent a password reset link to your university email address.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-white/10 text-white hover:bg-white/5"
                onClick={() => setIsSubmitted(false)}
              >
                Try another email
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">University Email</Label>
                <div className="relative group">
                  <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name.tve21cs@ktu.edu.in" 
                    required
                    className="pl-10 bg-black/40 border-white/5 focus-visible:border-primary/50 focus-visible:ring-primary/20 h-12"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300"
              >
                Send Reset Link
              </Button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
