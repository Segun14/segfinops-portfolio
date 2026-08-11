type FrameProps = {
  title: string;
  accent: string;
  children: React.ReactNode;
};

function ProductFrame({ title, accent, children }: FrameProps) {
  return (
    <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#081225] shadow-2xl shadow-slate-950/25">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2dd4bf]" />
        </div>
        <span className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-white/45">
          {title}
        </span>
        <span className={`h-2 w-2 rounded-full ${accent}`} />
      </div>
      <div className="p-4 md:p-5">{children}</div>
      <div className="border-t border-white/10 px-4 py-2.5 text-center text-[0.5625rem] font-semibold uppercase tracking-[0.16em] text-white/35">
        Illustrative interface · Dummy data only
      </div>
    </div>
  );
}

const bars = [42, 58, 47, 72, 64, 83, 76, 91, 86, 96, 88, 100];

export function HeroDashboardPreview() {
  return (
    <ProductFrame title="Finance Operating System" accent="bg-cyan-400">
      <div className="grid grid-cols-3 gap-2.5">
        {[
          ["Revenue", "$4.82M", "+8.4%"],
          ["Gross Margin", "61.7%", "+2.1 pts"],
          ["Forecast", "$5.04M", "98% ready"],
        ].map(([label, value, delta]) => (
          <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="text-[0.5625rem] uppercase tracking-[0.12em] text-white/40">{label}</p>
            <p className="mt-1 text-sm font-bold text-white md:text-base">{value}</p>
            <p className="mt-1 text-[0.625rem] font-medium text-cyan-300">{delta}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[0.6875rem] font-semibold text-white/75">Revenue outlook</span>
            <span className="rounded-full bg-cyan-400/10 px-2 py-0.5 text-[0.5625rem] text-cyan-300">FY26</span>
          </div>
          <div className="flex h-24 items-end gap-1.5">
            {bars.map((height, index) => (
              <div key={index} className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-600 to-cyan-400" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {[
            ["Commission review", "12 items", "bg-violet-400"],
            ["Headcount plan", "3 changes", "bg-cyan-400"],
            ["Pipeline risk", "$186K", "bg-rose-400"],
          ].map(([label, value, color]) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${color}`} />
                <span className="text-[0.625rem] text-white/50">{label}</span>
              </div>
              <p className="mt-1.5 text-xs font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </ProductFrame>
  );
}

export function CommissionPreview() {
  const reps = [
    ["Alex Morgan", "$5,420", "Approved"],
    ["Taylor Reed", "$4,180", "Review"],
    ["Jordan Kim", "$3,760", "Approved"],
  ];

  return (
    <ProductFrame title="Commission Workspace" accent="bg-violet-400">
      <div className="grid grid-cols-3 gap-2">
        {[
          ["Eligible revenue", "$248.6K"],
          ["Gross profit", "$96.4K"],
          ["Commission", "$18.4K"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl bg-white/[0.05] p-3">
            <p className="text-[0.5rem] uppercase tracking-wider text-white/40">{label}</p>
            <p className="mt-1 text-xs font-bold text-white md:text-sm">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 overflow-hidden rounded-xl border border-white/10">
        <div className="grid grid-cols-[1fr_auto_auto] gap-3 bg-white/[0.04] px-3 py-2 text-[0.5rem] font-semibold uppercase tracking-wider text-white/35">
          <span>Representative</span><span>Payout</span><span>Status</span>
        </div>
        {reps.map(([name, payout, status]) => (
          <div key={name} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-t border-white/10 px-3 py-2.5 text-[0.6875rem]">
            <span className="font-medium text-white/80">{name}</span>
            <span className="text-white/60">{payout}</span>
            <span className={`rounded-full px-2 py-0.5 text-[0.5rem] font-semibold ${status === "Approved" ? "bg-emerald-400/10 text-emerald-300" : "bg-amber-400/10 text-amber-300"}`}>
              {status}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between rounded-xl bg-violet-500/10 px-3 py-2.5">
        <span className="text-[0.625rem] text-violet-200">Monthly review progress</span>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-20 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[82%] rounded-full bg-violet-400" /></div>
          <span className="text-[0.625rem] font-bold text-white">82%</span>
        </div>
      </div>
    </ProductFrame>
  );
}

export function SalesBotPreview() {
  return (
    <ProductFrame title="Sales Intelligence Bot" accent="bg-cyan-400">
      <div className="flex gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500 text-[0.625rem] font-bold text-white">SO</div>
        <div className="rounded-2xl rounded-tl-sm bg-white/[0.06] px-3.5 py-2.5 text-[0.6875rem] leading-relaxed text-white/70">
          How is Q3 pipeline tracking against target?
        </div>
      </div>

      <div className="mt-3 flex gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-300">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 2a4 4 0 014 4v1a4 4 0 014 4v2a4 4 0 01-4 4h-1l-3 3-3-3H8a4 4 0 01-4-4v-2a4 4 0 014-4V6a4 4 0 014-4z"/></svg>
        </div>
        <div className="min-w-0 flex-1 rounded-2xl rounded-tl-sm border border-cyan-400/15 bg-cyan-400/[0.06] p-3.5">
          <p className="text-[0.6875rem] leading-relaxed text-white/75">
            Q3 open pipeline is <strong className="text-white">$3.42M</strong>, currently <strong className="text-amber-300">8% below</strong> the coverage target. Stage 3 concentration is the main risk.
          </p>
          <div className="mt-3 grid grid-cols-4 gap-1.5">
            {[
              ["Stage 1", "24%", "bg-cyan-400"],
              ["Stage 2", "31%", "bg-violet-400"],
              ["Stage 3", "36%", "bg-rose-400"],
              ["Stage 4", "9%", "bg-emerald-400"],
            ].map(([label, value, color]) => (
              <div key={label} className="rounded-lg bg-white/[0.05] p-2 text-center">
                <div className={`mx-auto mb-1 h-1 w-6 rounded-full ${color}`} />
                <p className="text-[0.45rem] text-white/35">{label}</p>
                <p className="text-[0.625rem] font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[0.5625rem] text-white/35">Sources: CRM snapshot · Forecast model · Updated 08:15</p>
        </div>
      </div>
    </ProductFrame>
  );
}

export function HeadcountPreview() {
  const departments = [
    ["Engineering", "184", "$21.8M", "+3"],
    ["Go-to-Market", "162", "$18.7M", "+5"],
    ["G&A", "140", "$11.9M", "-1"],
  ];

  return (
    <ProductFrame title="Workforce Planning" accent="bg-amber-400">
      <div className="grid grid-cols-3 gap-2">
        {[
          ["Headcount", "486", "+7 plan"],
          ["Annual cost", "$52.4M", "+1.8%"],
          ["Open roles", "19", "12 approved"],
        ].map(([label, value, note]) => (
          <div key={label} className="rounded-xl bg-white/[0.05] p-3">
            <p className="text-[0.5rem] uppercase tracking-wider text-white/40">{label}</p>
            <p className="mt-1 text-xs font-bold text-white md:text-sm">{value}</p>
            <p className="mt-0.5 text-[0.5rem] text-amber-300">{note}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 overflow-hidden rounded-xl border border-white/10">
        <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 bg-white/[0.04] px-3 py-2 text-[0.48rem] font-semibold uppercase tracking-wider text-white/35">
          <span>Department</span><span>HC</span><span>Cost</span><span>Plan</span>
        </div>
        {departments.map(([name, headcount, cost, plan]) => (
          <div key={name} className="grid grid-cols-[1fr_auto_auto_auto] gap-3 border-t border-white/10 px-3 py-2.5 text-[0.625rem]">
            <span className="font-medium text-white/80">{name}</span><span className="text-white/55">{headcount}</span><span className="text-white/55">{cost}</span><span className={plan.startsWith("+") ? "text-emerald-300" : "text-rose-300"}>{plan}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl bg-amber-400/[0.07] p-3">
        <div className="flex items-center justify-between text-[0.5625rem]"><span className="text-white/50">Forecast confidence</span><span className="font-bold text-amber-300">High · 94%</span></div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[94%] rounded-full bg-gradient-to-r from-amber-400 to-orange-400" /></div>
      </div>
    </ProductFrame>
  );
}

export function CopilotPreview() {
  const workflows = [
    ["CRM daily sync", "Healthy", "text-emerald-300", "bg-emerald-400"],
    ["Forecast variance", "2 alerts", "text-amber-300", "bg-amber-400"],
    ["Commission review", "Ready", "text-cyan-300", "bg-cyan-400"],
    ["Board pack inputs", "4 pending", "text-violet-300", "bg-violet-400"],
  ];

  return (
    <ProductFrame title="FP&A Co-Pilot" accent="bg-rose-400">
      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-[0.625rem] font-bold text-white">AI</span>
          <div><p className="text-[0.6875rem] font-semibold text-white">Morning finance briefing</p><p className="text-[0.5rem] text-white/35">4 systems checked · 08:30</p></div>
        </div>
        <p className="mt-3 text-[0.6875rem] leading-relaxed text-white/65">
          Revenue is tracking within plan. One material pipeline risk and two compensation exceptions need review today.
        </p>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {workflows.map(([label, status, textColor, dotColor]) => (
          <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <div className="flex items-center gap-2"><span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} /><span className="text-[0.5625rem] text-white/45">{label}</span></div>
            <p className={`mt-1.5 text-[0.6875rem] font-semibold ${textColor}`}>{status}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-xl bg-rose-400/[0.07] px-3 py-2.5 text-[0.625rem] text-rose-200">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 9v4m0 4h.01M10.3 3.7L1.8 18.4A2 2 0 003.5 21h17a2 2 0 001.7-2.6L13.7 3.7a2 2 0 00-3.4 0z"/></svg>
        Human approval required before external actions
      </div>
    </ProductFrame>
  );
}
