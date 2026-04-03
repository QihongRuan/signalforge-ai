"use client";

import Link from "next/link";
import { Signal } from "@/lib/data";
import {
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Clock,
  Brain,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

function formatPrice(price: number): string {
  if (price < 10) return price.toFixed(4);
  if (price < 1000) return price.toFixed(2);
  return price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  return `${hrs}h ${mins % 60}m ago`;
}

const directionConfig = {
  bullish: {
    icon: ArrowUpRight,
    color: "text-bullish",
    bg: "bg-bullish/10",
    border: "border-bullish/20",
    label: "BULLISH",
  },
  bearish: {
    icon: ArrowDownRight,
    color: "text-bearish",
    bg: "bg-bearish/10",
    border: "border-bearish/20",
    label: "BEARISH",
  },
  neutral: {
    icon: Minus,
    color: "text-neutral",
    bg: "bg-neutral/10",
    border: "border-neutral/20",
    label: "NEUTRAL",
  },
};

export default function SignalCard({ signal }: { signal: Signal }) {
  const dir = directionConfig[signal.direction];
  const DirIcon = dir.icon;

  return (
    <Link href={`/signals/${signal.id}`}>
      <div className="group bg-card rounded-xl border border-border p-4 hover:border-accent/40 hover:bg-card-hover transition-all cursor-pointer">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-lg",
                dir.bg
              )}
            >
              <DirIcon className={cn("h-5 w-5", dir.color)} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold">{signal.asset}</span>
                <span
                  className={cn(
                    "text-[10px] font-bold px-1.5 py-0.5 rounded",
                    dir.bg,
                    dir.color
                  )}
                >
                  {dir.label}
                </span>
              </div>
              <div className="text-xs text-muted">{signal.assetName}</div>
            </div>
          </div>

          {/* Confidence */}
          <div className="text-right">
            <div className="text-sm font-bold font-mono">
              {signal.confidence}%
            </div>
            <div className="w-16 h-1.5 rounded-full bg-border mt-1">
              <div
                className={cn("h-full rounded-full", {
                  "bg-bullish": signal.confidence >= 85,
                  "bg-accent": signal.confidence >= 70 && signal.confidence < 85,
                  "bg-neutral": signal.confidence < 70,
                })}
                style={{ width: `${signal.confidence}%` }}
              />
            </div>
          </div>
        </div>

        {/* Prices */}
        <div className="grid grid-cols-3 gap-3 mb-3">
          <div className="bg-background/50 rounded-lg p-2">
            <div className="text-[10px] text-muted uppercase tracking-wider">
              Entry
            </div>
            <div className="text-sm font-mono font-semibold">
              {formatPrice(signal.entryPrice)}
            </div>
          </div>
          <div className="bg-background/50 rounded-lg p-2">
            <div className="text-[10px] text-bullish uppercase tracking-wider">
              Target
            </div>
            <div className="text-sm font-mono font-semibold text-bullish">
              {formatPrice(signal.targetPrice)}
            </div>
          </div>
          <div className="bg-background/50 rounded-lg p-2">
            <div className="text-[10px] text-bearish uppercase tracking-wider">
              Stop
            </div>
            <div className="text-sm font-mono font-semibold text-bearish">
              {formatPrice(signal.stopLoss)}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-muted">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Brain className="h-3 w-3" />
              <span>{signal.strategy}</span>
            </div>
            <span className="text-border">·</span>
            <span>{signal.timeframe}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{timeAgo(signal.timestamp)}</span>
            </div>
            <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
          </div>
        </div>
      </div>
    </Link>
  );
}
