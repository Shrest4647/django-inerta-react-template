"use client";

import { Button } from "@/components/ui/button";
import { AuthProps } from "@/types";
import { Settings } from "lucide-react";

type Props = AuthProps & {
  greeting: string;
};

export default function Dashboard(props: Props) {
  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              {props.greeting}, {props.auth.user?.name}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
