"use client";

import { useEffect, useState } from "react";
import { marketStats } from "@/lib/data";
import { TrendingUp, TrendingDown } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

export default function MarketOverview() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {marketStats.map((stat, i) => {
        const isPositive = stat.change24h >= 0;
        const sparkData = stat.sparkline.map((v) => ({ v }));

        return (
          <div
            key={stat.asset}
            className={`animate-fade-in stagger-${i + 1} bg-card rounded-xl border border-border p-4 hover:border-accent/30 transition-colors`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted">
                {stat.asset}
              </span>
              <div
                className={`flex items-center gap-1 text-xs font-medium ${
                  isPositive ? "text-bullish" : "text-bearish"
                }`}
              >
                {isPositive ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {isPositive ? "+" : ""}
                {stat.change24h.toFixed(2)}%
              </div>
            </div>
            <div className="text-xl font-bold font-mono mb-2">
              {stat.asset === "EUR/USD"
                ? stat.price.toFixed(4)
                : stat.price < 10
                ? stat.price.toFixed(4)
                : stat.price.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
            </div>
            <div className="h-10">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sparkData}>
                    <defs>
                      <linearGradient
                        id={`grad-${stat.asset}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor={isPositive ? "#22c55e" : "#ef4444"}
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="100%"
                          stopColor={isPositive ? "#22c55e" : "#ef4444"}
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="v"
                      stroke={isPositive ? "#22c55e" : "#ef4444"}
                      strokeWidth={1.5}
                      fill={`url(#grad-${stat.asset})`}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full w-full rounded-lg bg-background/60" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
