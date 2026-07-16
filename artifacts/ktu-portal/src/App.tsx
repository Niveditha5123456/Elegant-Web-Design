import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { useEffect } from 'react';

// Pages
import Login from '@/pages/login';
import ForgotPassword from '@/pages/forgot-password';
import Dashboard from '@/pages/dashboard';
import About from '@/pages/about';
import Attendance from '@/pages/attendance';
import Timetable from '@/pages/timetable';
import Fees from '@/pages/fees';
import Courses from '@/pages/courses';
import Rank from '@/pages/rank';
import Layout from '@/components/layout';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/forgot-password" component={ForgotPassword} />
      
      <Route path="/">
        <Layout><Dashboard /></Layout>
      </Route>
      <Route path="/about">
        <Layout><About /></Layout>
      </Route>
      <Route path="/attendance">
        <Layout><Attendance /></Layout>
      </Route>
      <Route path="/timetable">
        <Layout><Timetable /></Layout>
      </Route>
      <Route path="/fees">
        <Layout><Fees /></Layout>
      </Route>
      <Route path="/courses">
        <Layout><Courses /></Layout>
      </Route>
      <Route path="/rank">
        <Layout><Rank /></Layout>
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
