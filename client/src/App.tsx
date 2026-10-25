import { Activity, BarChart3, TrendingUp } from "lucide-react";

function App() {
  return (
    <div className="flex flex-1 items-center justify-center px-4">
      <div className="w-full max-w-xl text-center">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/25">
            <TrendingUp className="h-7 w-7 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-text">
            Fin<span className="text-primary-light">ova</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="mx-auto mb-10 max-w-md text-lg text-text-muted">
          A paper-trading simulator built for learning.
          <br />
          Practice strategies without risking real capital.
        </p>

        {/* Feature pills */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {[
            { icon: Activity, label: "Live Market Data" },
            { icon: BarChart3, label: "Portfolio Analytics" },
            { icon: TrendingUp, label: "Paper Orders" },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-primary/50 hover:text-text"
            >
              <Icon className="h-4 w-4 text-primary-light" />
              {label}
            </span>
          ))}
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-1.5 text-sm font-medium text-success">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
          </span>
          Scaffold running — ready to build
        </div>
      </div>
    </div>
  );
}

export default App;
