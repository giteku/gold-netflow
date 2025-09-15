import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="flex h-16 items-center gap-4 border-b border-border bg-card/50 px-6 backdrop-blur-sm">
      {/* Search */}
      <div className="flex flex-1 items-center gap-2">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search hosts, processes, IPs..." 
            className="pl-9 bg-muted/50 border-0 focus:bg-muted"
          />
        </div>
      </div>

      {/* Status Indicators */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-success animate-pulse"></div>
          <span className="text-sm text-muted-foreground">3 Hosts Online</span>
        </div>
        
        {/* Notifications */}
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-4 w-4" />
          <Badge className="absolute -right-1 -top-1 h-4 w-4 p-0 text-xs bg-destructive">
            2
          </Badge>
        </Button>

        {/* User Menu */}
        <Button variant="ghost" size="sm" className="gap-2">
          <User className="h-4 w-4" />
          <span className="text-sm">Admin</span>
        </Button>
      </div>
    </header>
  );
}