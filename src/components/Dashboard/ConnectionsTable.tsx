import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, MapPin, Globe } from "lucide-react";

const connections = [
  {
    id: 1,
    process: "chrome.exe",
    localPort: 52341,
    remoteHost: "142.250.191.14",
    remotePort: 443,
    protocol: "TCP",
    status: "ESTABLISHED",
    country: "US",
    bytes: { sent: 2048, received: 15360 },
    duration: "2m 34s"
  },
  {
    id: 2,
    process: "discord.exe",
    localPort: 52342,
    remoteHost: "162.159.130.234",
    remotePort: 443,
    protocol: "TCP", 
    status: "ESTABLISHED",
    country: "US",
    bytes: { sent: 1024, received: 4096 },
    duration: "5m 12s"
  },
  {
    id: 3,
    process: "node.exe",
    localPort: 3000,
    remoteHost: "0.0.0.0",
    remotePort: 0,
    protocol: "TCP",
    status: "LISTENING",
    country: "LOCAL",
    bytes: { sent: 0, received: 0 },
    duration: "1h 23m"
  },
  {
    id: 4,
    process: "code.exe",
    localPort: 52343,
    remoteHost: "20.42.65.92",
    remotePort: 443,
    protocol: "TCP",
    status: "ESTABLISHED", 
    country: "US",
    bytes: { sent: 512, received: 1024 },
    duration: "45s"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "ESTABLISHED": return "bg-success/10 text-success border-success/20";
    case "LISTENING": return "bg-primary/10 text-primary border-primary/20";
    case "CLOSED": return "bg-muted/10 text-muted-foreground border-muted/20";
    default: return "bg-warning/10 text-warning border-warning/20";
  }
};

export function ConnectionsTable() {
  return (
    <Card className="bg-gradient-card border-border shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-lg font-semibold text-foreground">
          <span>Active Connections</span>
          <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
            {connections.filter(c => c.status === "ESTABLISHED").length} Active
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {connections.map((conn) => (
            <div 
              key={conn.id}
              className="flex items-center justify-between p-4 rounded-xl bg-card-secondary/50 border border-border/50 hover:bg-card-secondary/80 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-foreground">{conn.process}</p>
                  <p className="text-sm text-muted-foreground truncate">
                    {conn.remoteHost}:{conn.remotePort}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Badge className={getStatusColor(conn.status)}>
                  {conn.status}
                </Badge>
                
                <div className="text-center min-w-[80px]">
                  <p className="text-sm font-medium text-foreground">{conn.protocol}</p>
                  <p className="text-xs text-muted-foreground">:{conn.localPort}</p>
                </div>

                <div className="flex items-center gap-1 text-sm">
                  <MapPin className="h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground">{conn.country}</span>
                </div>

                <div className="text-center min-w-[100px]">
                  <p className="text-sm font-medium text-foreground">
                    ↓{(conn.bytes.received / 1024).toFixed(1)}KB
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ↑{(conn.bytes.sent / 1024).toFixed(1)}KB
                  </p>
                </div>

                <div className="text-sm text-muted-foreground min-w-[60px]">
                  {conn.duration}
                </div>

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