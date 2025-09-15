import { Sidebar } from "@/components/Layout/Sidebar";
import { Header } from "@/components/Layout/Header";
import { StatsCard } from "@/components/Dashboard/StatsCard";
import { NetworkChart } from "@/components/Dashboard/NetworkChart";
import { ProcessList } from "@/components/Dashboard/ProcessList";
import { ConnectionsTable } from "@/components/Dashboard/ConnectionsTable";
import { AlertsList } from "@/components/Dashboard/AlertsList";
import { 
  Activity, 
  Monitor, 
  Shield, 
  Wifi,
  TrendingUp,
  Users
} from "lucide-react";

const Index = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-auto p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Active Hosts"
              value="3"
              change="+1 from yesterday"
              changeType="positive"
              icon={Monitor}
            />
            <StatsCard
              title="Total Connections"
              value="47"
              change="+12% from last hour"
              changeType="positive"
              icon={Wifi}
            />
            <StatsCard
              title="Bandwidth Usage"
              value="2.4 GB/h"
              change="-5% from average"
              changeType="negative"
              icon={TrendingUp}
            />
            <StatsCard
              title="Security Alerts"
              value="2"
              change="Requires attention"
              changeType="negative" 
              icon={Shield}
            />
          </div>

          {/* Charts & Activity */}
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <NetworkChart />
            </div>
            <AlertsList />
          </div>

          {/* Process & Connections */}
          <div className="grid gap-6 lg:grid-cols-2">
            <ProcessList />
            <ConnectionsTable />
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border bg-card/50 px-6 py-3">
          <p className="text-xs text-muted-foreground text-center">
            SaaS Zero Monitoring Traffic Network - Copyright © github.com/odaysec
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
