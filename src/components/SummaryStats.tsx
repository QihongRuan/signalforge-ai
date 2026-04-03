"use client";

import { signals } from "@/lib/data";
import { BarChart3, TrendingUp, Target, Zap } from "lucide-react";

export default function SummaryStats() {
  const total = signals.length;
  const bullishCount = signals.filter((s) => s.direction === "bullish").length;
  const bullishPct = Math.round((bullishCount / total) * 100);
  const avgConfidence = Math.round(
    signals.reduce((a, s) => a + s.confidence, 0) / total
  );

  const stats = [
    {
      label: "Total Signals",
      value: total.toString(),
      icon: BarChart3,
      color: "text-accent",
    },
    {
      label: "Bullish",
      value: `${bullishPct}%`,
      icon: TrendingUp,
      color: "text-bullish",
    },
    {
      label: "Avg Confidence",
      value: `${avgConfidence}%`,
      icon: Target,
      color: "text-neutral",
    },
    {
      label: "Active Agents",
      value: "4",
      icon: Zap,
      color: "text-accent",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="bg-card rounded-xl border border-border p-4 flex items-center gap-4"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-background">
              <Icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono">{stat.value}</div>
              <div className="text-xs text-muted">{stat.label}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
