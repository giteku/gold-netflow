import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Shield, X } from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "security",
    severity: "high",
    title: "Suspicious Connection Detected",
    description: "chrome.exe connected to unknown IP 185.199.108.153",
    timestamp: "2 minutes ago",
    status: "active"
  },
  {
    id: 2,
    type: "bandwidth",
    severity: "medium", 
    title: "High Bandwidth Usage",
    description: "node.exe consuming 45MB/s upload bandwidth",
    timestamp: "5 minutes ago",
    status: "active"
  },
  {
    id: 3,
    type: "security",
    severity: "low",
    title: "New Process Started",
    description: "Unknown process 'miner.exe' detected and blocked",
    timestamp: "12 minutes ago", 
    status: "resolved"
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "high": return "bg-destructive/10 text-destructive border-destructive/20";
    case "medium": return "bg-warning/10 text-warning border-warning/20";
    case "low": return "bg-primary/10 text-primary border-primary/20";
    default: return "bg-muted/10 text-muted-foreground border-muted/20";
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "security": return Shield;
    default: return AlertTriangle;
  }
};

export function AlertsList() {
  return (
    <Card className="bg-gradient-card border-border shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-lg font-semibold text-foreground">
          <span>Security Alerts</span>
          <Badge variant="secondary" className="bg-destructive/10 text-destructive border-destructive/20">
            {alerts.filter(a => a.status === "active").length} Active
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => {
            const Icon = getTypeIcon(alert.type);
            return (
              <div 
                key={alert.id}
                className="flex items-start gap-4 p-4 rounded-xl bg-card-secondary/50 border border-border/50 hover:bg-card-secondary/80 transition-colors"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10 mt-1">
                  <Icon className="h-4 w-4 text-destructive" />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">{alert.title}</h4>
                      <p className="text-sm text-muted-foreground">{alert.description}</p>
                    </div>
                    <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-muted-foreground">
                      <X className="h-3 w-3" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className={getSeverityColor(alert.severity)}>
                        {alert.severity.toUpperCase()}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                    </div>
                    
                    {alert.status === "active" && (
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="h-7 text-xs">
                          Block IP
                        </Button>
                        <Button size="sm" className="h-7 text-xs bg-primary hover:bg-primary/80">
                          Investigate
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}