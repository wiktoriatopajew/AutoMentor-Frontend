import { useEffect, useMemo, useState } from "react";

type Probe = {
  url: string;
  ok: boolean | null;
  status?: number;
  error?: string;
  allowOrigin?: string | null;
  allowCreds?: string | null;
};

const guessEndpoints = (apiBase: string) => [
  `${apiBase}/api/health`,
  `${apiBase}/health`,
  `${apiBase}/api`,
  `${apiBase}/api/users`,
];

export default function Debug() {
  const apiBase = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
  const [probes, setProbes] = useState<Probe[]>([]);
  const [running, setRunning] = useState(false);

  const candidates = useMemo(() => (apiBase ? guessEndpoints(apiBase) : []), [apiBase]);

  async function runChecks() {
    if (!apiBase) {
      setProbes([{ url: "VITE_API_URL not set", ok: false, error: "Set VITE_API_URL on Railway > Variables" }]);
      return;
    }
    setRunning(true);
    const results: Probe[] = [];
    for (const url of candidates) {
      try {
        const res = await fetch(url, { credentials: "include" as const, mode: "cors" as const });
        results.push({
          url,
          ok: res.ok,
          status: res.status,
          allowOrigin: res.headers.get("access-control-allow-origin"),
          allowCreds: res.headers.get("access-control-allow-credentials"),
        });
      } catch (e: any) {
        results.push({ url, ok: false, error: e?.message || String(e) });
      }
    }
    setProbes(results);
    setRunning(false);
  }

  useEffect(() => {
    // auto-run once on mount
    runChecks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto max-w-3xl p-6 space-y-6">
      <h1 className="text-2xl font-bold">Connectivity Debug</h1>
      <div className="space-y-2">
        <div>
          <span className="font-semibold">VITE_API_URL:</span>{" "}
          <code className="break-all">{apiBase || "(not set)"}</code>
        </div>
        <p className="text-sm text-muted-foreground">
          Ustaw VITE_API_URL w Railway → Frontend → Variables na pełny URL backendu (https://…railway.app).
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
          onClick={runChecks}
          disabled={running}
        >
          {running ? "Sprawdzam…" : "Sprawdź połączenie"}
        </button>
        <span className="text-sm text-muted-foreground">Wysyła zapytania CORS z credentials: include</span>
      </div>

      <div className="divide-y rounded border">
        {probes.length === 0 ? (
          <div className="p-4 text-sm text-muted-foreground">Brak wyników jeszcze.</div>
        ) : (
          probes.map((p) => (
            <div key={p.url} className="p-4">
              <div className="font-mono text-sm break-all">{p.url}</div>
              <div className="mt-2 text-sm">
                <div>
                  Status: {p.ok === null ? "-" : p.ok ? "OK" : "FAIL"}
                  {typeof p.status === "number" ? ` (${p.status})` : ""}
                </div>
                {p.error && <div className="text-red-600">Error: {p.error}</div>}
                <div className="text-xs text-muted-foreground mt-1">
                  ACAO: {p.allowOrigin ?? "-"} | ACC: {p.allowCreds ?? "-"}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="text-sm text-muted-foreground">
        Jeśli Status=FAIL lub ACAO nie równa się domenie frontendu, skonfiguruj CORS na backendzie (origin = URL frontendu, credentials=true) oraz
        cookies jako SameSite=None; Secure.
      </div>
    </div>
  );
}
