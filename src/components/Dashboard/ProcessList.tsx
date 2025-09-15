import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, ExternalLink, Activity } from "lucide-react";

const processes = [
  {
    id: 1,
    name: "chrome.exe",
    pid: 8432,
    user: "SYSTEM",
    cpu: 12.5,
    memory: 256.8,
    network: { down: 2.4, up: 0.8 },
    connections: 24,
    status: "active"
  },
  {
    id: 2,
    name: "node.exe",
    pid: 5627,
    user: "odaysec",
    cpu: 8.2,
    memory: 128.5,
    network: { down: 1.2, up: 0.3 },
    connections: 8,
    status: "active"
  },
  {
    id: 3,
    name: "discord.exe", 
    pid: 3021,
    user: "odaysec",
    cpu: 5.8,
    memory: 89.2,
    network: { down: 0.9, up: 0.4 },
    connections: 6,
    status: "active"
  },
  {
    id: 4,
    name: "code.exe",
    pid: 7841,
    user: "odaysec", 
    cpu: 3.2,
    memory: 156.7,
    network: { down: 0.2, up: 0.1 },
    connections: 3,
    status: "active"
  }
];

export function ProcessList() {
  return (
    <Card className="bg-gradient-card border-border shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-lg font-semibold text-foreground">
          <span>Active Processes</span>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            {processes.length} Running
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {processes.map((process) => (
            <div 
              key={process.id}
              className="flex items-center justify-between p-4 rounded-xl bg-card-secondary/50 border border-border/50 hover:bg-card-secondary/80 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{process.name}</p>
                  <p className="text-sm text-muted-foreground">
                    PID: {process.pid} • User: {process.user}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className="text-center">
                  <p className="font-medium text-foreground">{process.cpu}%</p>
                  <p className="text-muted-foreground">CPU</p>
                </div>
                <div className="text-center">
                  <p className="font-medium text-foreground">{process.memory}MB</p>
                  <p className="text-muted-foreground">Memory</p>
                </div>
                <div className="text-center">
                  <p className="font-medium text-foreground">
                    ↓{process.network.down} ↑{process.network.up} MB/s
                  </p>
                  <p className="text-muted-foreground">Network</p>
                </div>
                <div className="text-center">
                  <p className="font-medium text-foreground">{process.connections}</p>
                  <p className="text-muted-foreground">Connections</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive hover:text-destructive">
                  <Shield className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}