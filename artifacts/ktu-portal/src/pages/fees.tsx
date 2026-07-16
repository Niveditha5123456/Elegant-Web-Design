import { motion } from "framer-motion";
import { studentData, feeHistory } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Wallet, 
  CreditCard, 
  ReceiptText, 
  AlertCircle,
  Download,
  Building,
  CheckCircle2,
  Clock
} from "lucide-react";

export default function Fees() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const currentDues = [
    { type: "Tuition Fee - S6", amount: 35000, dueDate: "2024-05-15", status: "pending" },
    { type: "Hostel Rent - Apr", amount: 1250, dueDate: "2024-04-10", status: "overdue" },
    { type: "Bus Fee - Apr", amount: 800, dueDate: "2024-04-10", status: "paid" },
  ];

  const totalPending = currentDues
    .filter(d => d.status !== 'paid')
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-white mb-2">
            Fee Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your payments and download receipts.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Total Dues Card */}
        <Card className="bg-gradient-to-br from-card to-card/50 border-border/50 backdrop-blur-xl lg:col-span-2 overflow-hidden relative group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Wallet className="w-32 h-32 text-primary" />
          </div>
          
          <CardContent className="p-8 md:p-10 relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-widest">Total Outstanding Due</p>
              <div className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
                {formatCurrency(totalPending)}
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20 font-medium px-3 py-1">
                  1 Overdue Payment
                </Badge>
                <span className="text-sm text-muted-foreground">Next due date: May 15, 2024</span>
              </div>
            </div>
            
            <div className="w-full md:w-auto shrink-0 flex flex-col gap-3">
              <Button size="lg" className="w-full shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all h-14 px-8 text-base">
                <CreditCard className="w-5 h-5 mr-2" />
                Pay Now
              </Button>
              <p className="text-xs text-center text-muted-foreground flex items-center justify-center">
                <Building className="w-3 h-3 mr-1" /> Handled securely by SBI ePay
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Bank Details */}
        <Card className="bg-card/30 border-border/40 backdrop-blur-md">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-medium">Bank Transfer Info</CardTitle>
            <CardDescription>For offline NEFT/RTGS payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 bg-white/5 rounded-xl p-4 border border-white/5">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Account Name</p>
                <p className="text-sm font-medium text-white">KTU Fee Collection Acc</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Account Number</p>
                <p className="text-sm font-mono tracking-widest text-primary">347890123456</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">IFSC Code</p>
                <p className="text-sm font-mono tracking-widest text-white">SBIN0070268</p>
              </div>
              <div className="pt-2 border-t border-white/10">
                <p className="text-xs text-amber-400/80 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  Payments may take 2-3 working days to reflect on the portal.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current Semester Breakdown */}
        <Card className="bg-card/30 border-border/40 backdrop-blur-md">
          <CardHeader className="border-b border-border/20">
            <CardTitle className="text-lg font-medium">S6 Fee Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border/20">
              {currentDues.map((due, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg shrink-0 mt-0.5
                      ${due.status === 'paid' ? 'bg-emerald-500/10 text-emerald-500' :
                        due.status === 'overdue' ? 'bg-destructive/10 text-destructive' :
                        'bg-white/10 text-muted-foreground'}
                    `}>
                      {due.status === 'paid' ? <CheckCircle2 className="w-5 h-5" /> :
                       due.status === 'overdue' ? <AlertCircle className="w-5 h-5" /> :
                       <Clock className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{due.type}</h4>
                      <p className="text-xs text-muted-foreground mt-1">Due by: {new Date(due.dueDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-white">{formatCurrency(due.amount)}</div>
                    <Badge variant="outline" className={`mt-2 text-[10px] font-medium uppercase tracking-wider
                      ${due.status === 'paid' ? 'border-emerald-500/30 text-emerald-400' :
                        due.status === 'overdue' ? 'border-destructive/30 text-destructive bg-destructive/10' :
                        'border-border text-muted-foreground'}
                    `}>
                      {due.status}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment History */}
        <Card className="bg-card/30 border-border/40 backdrop-blur-md">
          <CardHeader className="border-b border-border/20 flex flex-row items-center justify-between pb-4">
            <CardTitle className="text-lg font-medium">Transaction History</CardTitle>
            <Button variant="ghost" size="sm" className="text-muted-foreground">View All</Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border/20">
              {feeHistory.map((tx, idx) => (
                <motion.div 
                  key={tx.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                      <ReceiptText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm">{tx.type}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground font-mono">{tx.id}</span>
                        <span className="text-[10px] text-muted-foreground/50">•</span>
                        <span className="text-xs text-muted-foreground">{new Date(tx.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="font-medium text-white text-sm">{formatCurrency(tx.amount)}</div>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity text-primary hover:text-primary hover:bg-primary/10">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}