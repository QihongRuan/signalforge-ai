"use client";

import { signals } from "@/lib/data";
import MarketOverview from "@/components/MarketOverview";
import SignalCard from "@/components/SignalCard";
import SummaryStats from "@/components/SummaryStats";
import { Radio } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Market Overview */}
      <section>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          Market Overview
          <span className="text-xs text-muted font-normal">
            Real-time prices
          </span>
        </h2>
        <MarketOverview />
      </section>

      {/* Summary Stats */}
      <section>
        <SummaryStats />
      </section>

      {/* Signal Feed */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Radio className="h-4 w-4 text-accent animate-pulse-dot" />
            Live Signal Feed
          </h2>
          <span className="text-xs text-muted">
            {signals.length} signals in the last 24h
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {signals.map((signal, i) => (
            <div
              key={signal.id}
              className={`animate-fade-in stagger-${(i % 6) + 1}`}
              style={{ opacity: 0 }}
            >
              <SignalCard signal={signal} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
