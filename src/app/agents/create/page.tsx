"use client";

import { useState } from "react";
import {
  agents,
  assets,
  timeframes,
  strategies,
  indicators as indicatorList,
} from "@/lib/data";
import {
  Bot,
  Plus,
  Play,
  Pause,
  AlertTriangle,
  Bell,
  BellOff,
  ChevronDown,
  Check,
  Sparkles,
  Clock,
  Target,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AgentBuilder() {
  const [selectedAsset, setSelectedAsset] = useState("");
  const [selectedTimeframe, setSelectedTimeframe] = useState("");
  const [selectedStrategy, setSelectedStrategy] = useState("");
  const [selectedIndicators, setSelectedIndicators] = useState<string[]>([]);
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [customInstructions, setCustomInstructions] = useState("");
  const [created, setCreated] = useState(false);

  const toggleIndicator = (ind: string) => {
    setSelectedIndicators((prev) =>
      prev.includes(ind) ? prev.filter((i) => i !== ind) : [...prev, ind]
    );
  };

  const handleCreate = () => {
    setCreated(true);
    setTimeout(() => setCreated(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-5 gap-8">
        {/* Form */}
        <div className="col-span-3 space-y-6">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Bot className="h-6 w-6 text-accent" />
              Create Trading Agent
            </h1>
            <p className="text-sm text-muted mt-1">
              Configure an AI-powered agent to generate trading signals
              automatically.
            </p>
          </div>

          <div className="bg-card rounded-xl border border-border p-6 space-y-5">
            {/* Asset */}
            <div>
              <label className="block text-sm font-medium mb-2">Asset</label>
              <div className="relative">
                <select
                  value={selectedAsset}
                  onChange={(e) => setSelectedAsset(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm appearance-none focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Select an asset...</option>
                  {assets.map((a) => (
                    <option key={a.value} value={a.value}>
                      {a.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted pointer-events-none" />
              </div>
            </div>

            {/* Timeframe */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Timeframe
              </label>
              <div className="flex gap-2">
                {timeframes.map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setSelectedTimeframe(tf)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                      selectedTimeframe === tf
                        ? "bg-accent text-white"
                        : "bg-background border border-border text-muted hover:text-foreground hover:border-accent/40"
                    )}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* Strategy */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Strategy Template
              </label>
              <div className="grid grid-cols-2 gap-2">
                {strategies.map((strat) => (
                  <button
                    key={strat}
                    onClick={() => setSelectedStrategy(strat)}
                    className={cn(
                      "px-4 py-3 rounded-lg text-sm font-medium text-left transition-all border",
                      selectedStrategy === strat
                        ? "bg-accent/10 border-accent/40 text-accent"
                        : "bg-background border-border text-muted hover:text-foreground hover:border-accent/30"
                    )}
                  >
                    {strat}
                  </button>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Indicators
              </label>
              <div className="flex flex-wrap gap-2">
                {indicatorList.map((ind) => {
                  const selected = selectedIndicators.includes(ind);
                  return (
                    <button
                      key={ind}
                      onClick={() => toggleIndicator(ind)}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all border",
                        selected
                          ? "bg-accent/10 border-accent/40 text-accent"
                          : "bg-background border-border text-muted hover:text-foreground hover:border-accent/30"
                      )}
                    >
                      {selected && <Check className="h-3 w-3" />}
                      {ind}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Instructions */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Custom Instructions
              </label>
              <textarea
                value={customInstructions}
                onChange={(e) => setCustomInstructions(e.target.value)}
                placeholder="e.g., Only generate signals with confidence > 80%. Focus on breakouts during US market hours..."
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm min-h-[100px] resize-none focus:outline-none focus:border-accent transition-colors placeholder:text-muted/50"
              />
            </div>

            {/* Alerts Toggle */}
            <div className="flex items-center justify-between py-3 border-t border-border">
              <div className="flex items-center gap-2">
                {alertsEnabled ? (
                  <Bell className="h-4 w-4 text-accent" />
                ) : (
                  <BellOff className="h-4 w-4 text-muted" />
                )}
                <div>
                  <div className="text-sm font-medium">Push Alerts</div>
                  <div className="text-xs text-muted">
                    Get notified when signals are generated
                  </div>
                </div>
              </div>
              <button
                onClick={() => setAlertsEnabled(!alertsEnabled)}
                className={cn(
                  "w-11 h-6 rounded-full transition-colors relative",
                  alertsEnabled ? "bg-accent" : "bg-border"
                )}
              >
                <div
                  className={cn(
                    "w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform",
                    alertsEnabled ? "translate-x-5.5" : "translate-x-0.5"
                  )}
                />
              </button>
            </div>

            {/* Create Button */}
            <button
              onClick={handleCreate}
              className={cn(
                "w-full py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all",
                created
                  ? "bg-bullish text-white"
                  : "bg-accent hover:bg-accent/90 text-white"
              )}
            >
              {created ? (
                <>
                  <Check className="h-4 w-4" />
                  Agent Created Successfully!
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  Create Agent
                </>
              )}
            </button>
          </div>
        </div>

        {/* My Agents */}
        <div className="col-span-2 space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            My Agents
          </h2>

          <div className="space-y-3">
            {agents.map((agent) => {
              const statusConfig = {
                active: {
                  color: "text-bullish",
                  bg: "bg-bullish",
                  icon: Play,
                  label: "Active",
                },
                paused: {
                  color: "text-neutral",
                  bg: "bg-neutral",
                  icon: Pause,
                  label: "Paused",
                },
                error: {
                  color: "text-bearish",
                  bg: "bg-bearish",
                  icon: AlertTriangle,
                  label: "Error",
                },
              };
              const status = statusConfig[agent.status];
              const StatusIcon = status.icon;

              return (
                <div
                  key={agent.id}
                  className="bg-card rounded-xl border border-border p-4 hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-semibold text-sm">{agent.name}</div>
                      <div className="text-xs text-muted">{agent.asset}</div>
                    </div>
                    <div
                      className={cn(
                        "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                        `${status.color} bg-opacity-10`
                      )}
                      style={{
                        backgroundColor:
                          agent.status === "active"
                            ? "rgba(34,197,94,0.1)"
                            : agent.status === "paused"
                            ? "rgba(245,158,11,0.1)"
                            : "rgba(239,68,68,0.1)",
                      }}
                    >
                      <div
                        className={cn(
                          "h-1.5 w-1.5 rounded-full",
                          status.bg,
                          agent.status === "active" && "animate-pulse-dot"
                        )}
                      />
                      {status.label}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-background/50 rounded-lg p-2">
                      <div className="text-muted flex items-center gap-1">
                        <Target className="h-3 w-3" />
                        Strategy
                      </div>
                      <div className="font-medium mt-0.5">
                        {agent.strategy}
                      </div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-2">
                      <div className="text-muted flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        Win Rate
                      </div>
                      <div className="font-medium mt-0.5 font-mono">
                        {agent.winRate}%
                      </div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-2">
                      <div className="text-muted flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Today
                      </div>
                      <div className="font-medium mt-0.5 font-mono">
                        {agent.signalsToday}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
