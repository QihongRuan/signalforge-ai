import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-muted text-sm">
            <Zap className="h-4 w-4 text-accent" />
            <span>SignalForge v1.0</span>
          </div>
          <div className="text-sm text-muted">
            Built at{" "}
            <span className="text-foreground font-medium">
              HAC HACathon 2026
            </span>{" "}
            — Hanwha AI Center
          </div>
          <div className="text-xs text-muted">
            AI Models: Claude Opus 4 · Gemini Ultra
          </div>
        </div>
      </div>
    </footer>
  );
}
