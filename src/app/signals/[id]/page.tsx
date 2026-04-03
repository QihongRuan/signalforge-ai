"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { signals, generateChartData } from "@/lib/data";
import {
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  ArrowLeft,
  Brain,
  Clock,
  Shield,
  Target,
  TrendingUp,
  Activity,
  Cpu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { useMemo } from "react";

function formatPrice(price: number): string {
  if (price < 10) return price.toFixed(4);
  if (price < 1000) return price.toFixed(2);
  return price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

const directionConfig = {
  bullish: {
    icon: ArrowUpRight,
    color: "text-bullish",
    bg: "bg-bullish/10",
    stroke: "#22c55e",
    label: "BULLISH",
  },
  bearish: {
    icon: ArrowDownRight,
    color: "text-bearish",
    bg: "bg-bearish/10",
    stroke: "#ef4444",
    label: "BEARISH",
  },
  neutral: {
    icon: Minus,
    color: "text-neutral",
    bg: "bg-neutral/10",
    stroke: "#f59e0b",
    label: "NEUTRAL",
  },
};

export default function SignalDetail() {
  const params = useParams();
  const signal = signals.find((s) => s.id === params.id);

  const chartData = useMemo(
    () =>
      signal ? generateChartData(signal.entryPrice, signal.direction) : [],
    [signal]
  );

  if (!signal) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Signal Not Found</h1>
        <Link href="/" className="text-accent hover:underline">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const dir = directionConfig[signal.direction];
  const DirIcon = dir.icon;

  const reward = Math.abs(signal.targetPrice - signal.entryPrice);
  const risk = Math.abs(signal.entryPrice - signal.stopLoss);
  const rrRatio = (reward / risk).toFixed(2);
  const rrPct = Math.min((reward / (reward + risk)) * 100, 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Link>

      <div className="grid grid-cols-3 gap-6">
        {/* Left: Chart + Narrative */}
        <div className="col-span-2 space-y-6">
          {/* Header */}
          <div className="bg-card rounded-xl border border-border p-6 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "flex items-center justify-center w-14 h-14 rounded-xl",
                    dir.bg
                  )}
                >
                  <DirIcon className={cn("h-7 w-7", dir.color)} />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold">{signal.asset}</span>
                    <span
                      className={cn(
                        "text-xs font-bold px-2 py-1 rounded",
                        dir.bg,
                        dir.color
                      )}
                    >
                      {dir.label}
                    </span>
                  </div>
                  <div className="text-sm text-muted">{signal.assetName}</div>
                </div>
              </div>

              {/* Confidence Meter */}
              <div className="text-center">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      fill="none"
                      stroke="#2a2e3a"
                      strokeWidth="6"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      fill="none"
                      stroke={dir.stroke}
                      strokeWidth="6"
                      strokeDasharray={`${
                        (signal.confidence / 100) * 213.6
                      } 213.6`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold font-mono">
                      {signal.confidence}%
                    </span>
                  </div>
                </div>
                <div className="text-xs text-muted mt-1">Confidence</div>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-card rounded-xl border border-border p-6 animate-fade-in stagger-2" style={{ opacity: 0 }}>
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Activity className="h-4 w-4 text-accent" />
              Price Action (48h)
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient
                      id="chartGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor={dir.stroke}
                        stopOpacity={0.2}
                      />
                      <stop
                        offset="100%"
                        stopColor={dir.stroke}
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="time"
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                    tickLine={false}
                    axisLine={false}
                    interval={7}
                  />
                  <YAxis
                    domain={["auto", "auto"]}
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v: number) =>
                      v < 10 ? v.toFixed(3) : v.toLocaleString()
                    }
                    width={65}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#1a1d27",
                      border: "1px solid #2a2e3a",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                    labelStyle={{ color: "#6b7280" }}
                    itemStyle={{ color: "#e5e7eb" }}
                  />
                  <ReferenceLine
                    y={signal.entryPrice}
                    stroke="#3b82f6"
                    strokeDasharray="4 4"
                    strokeWidth={1}
                  />
                  <ReferenceLine
                    y={signal.targetPrice}
                    stroke="#22c55e"
                    strokeDasharray="4 4"
                    strokeWidth={1}
                  />
                  <ReferenceLine
                    y={signal.stopLoss}
                    stroke="#ef4444"
                    strokeDasharray="4 4"
                    strokeWidth={1}
                  />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke={dir.stroke}
                    strokeWidth={2}
                    fill="url(#chartGrad)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center gap-6 mt-3 text-xs text-muted">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-0 border-t-2 border-dashed border-accent" />
                Entry
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-0 border-t-2 border-dashed border-bullish" />
                Target
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-0 border-t-2 border-dashed border-bearish" />
                Stop Loss
              </div>
            </div>
          </div>

          {/* AI Narrative */}
          <div className="bg-card rounded-xl border border-border p-6 animate-fade-in stagger-3" style={{ opacity: 0 }}>
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Brain className="h-4 w-4 text-accent" />
              AI Strategy Analysis
            </h3>
            <div className="space-y-4 text-sm text-foreground/80 leading-relaxed">
              {signal.narrative.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-6">
          {/* Price Ladder */}
          <div className="bg-card rounded-xl border border-border p-6 animate-fade-in stagger-1" style={{ opacity: 0 }}>
            <h3 className="text-sm font-semibold mb-4">Price Levels</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-bullish/5 border border-bullish/20">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-bullish" />
                  <span className="text-sm text-bullish">Target</span>
                </div>
                <span className="font-mono font-bold text-bullish">
                  {formatPrice(signal.targetPrice)}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-accent/5 border border-accent/20">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <span className="text-sm text-accent">Entry</span>
                </div>
                <span className="font-mono font-bold text-accent">
                  {formatPrice(signal.entryPrice)}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-bearish/5 border border-bearish/20">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-bearish" />
                  <span className="text-sm text-bearish">Stop Loss</span>
                </div>
                <span className="font-mono font-bold text-bearish">
                  {formatPrice(signal.stopLoss)}
                </span>
              </div>
            </div>
          </div>

          {/* Risk/Reward */}
          <div className="bg-card rounded-xl border border-border p-6 animate-fade-in stagger-2" style={{ opacity: 0 }}>
            <h3 className="text-sm font-semibold mb-4">Risk / Reward</h3>
            <div className="text-center mb-4">
              <div className="text-3xl font-bold font-mono">{rrRatio}</div>
              <div className="text-xs text-muted">Reward to Risk Ratio</div>
            </div>
            <div className="flex items-center gap-1 h-3 rounded-full overflow-hidden">
              <div
                className="h-full bg-bullish rounded-l-full"
                style={{ width: `${rrPct}%` }}
              />
              <div
                className="h-full bg-bearish rounded-r-full"
                style={{ width: `${100 - rrPct}%` }}
              />
            </div>
            <div className="flex items-center justify-between mt-2 text-xs">
              <span className="text-bullish">
                +{formatPrice(reward)} reward
              </span>
              <span className="text-bearish">-{formatPrice(risk)} risk</span>
            </div>
          </div>

          {/* Indicators */}
          <div className="bg-card rounded-xl border border-border p-6 animate-fade-in stagger-3" style={{ opacity: 0 }}>
            <h3 className="text-sm font-semibold mb-4">Key Indicators</h3>
            <div className="flex flex-wrap gap-2">
              {signal.indicators.map((ind) => (
                <span
                  key={ind}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Meta */}
          <div className="bg-card rounded-xl border border-border p-6 animate-fade-in stagger-4" style={{ opacity: 0 }}>
            <h3 className="text-sm font-semibold mb-4">Signal Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted flex items-center gap-1.5">
                  <Brain className="h-3.5 w-3.5" /> Strategy
                </span>
                <span className="font-medium">{signal.strategy}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> Timeframe
                </span>
                <span className="font-medium">{signal.timeframe}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5" /> Model
                </span>
                <span className="font-medium">{signal.model}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> Generated
                </span>
                <span className="font-medium text-xs">
                  {new Date(signal.timestamp).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
