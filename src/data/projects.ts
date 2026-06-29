export interface Project {
  num: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  features: string[];
  impact: string[];
  stack: string[];
  color: string;
}

export const projects: Project[] = [
  {
    num: "01",
    title: "Commission Intelligence Platform",
    subtitle: "Full-stack commission management application",
    problem: "A finance team spent 4 working days every month manually processing sales commissions across 75+ account executives using spreadsheets and expensive EPM seat licenses. The process was error-prone, opaque to sales reps, and consumed significant analyst bandwidth.",
    solution: "A production-grade web application integrating directly with the company's EPM tool via REST API, pulling live commission data and presenting it through role-based dashboards. Built with Next.js, PostgreSQL, and deployed on Kubernetes.",
    features: [
      "Smart filtering — search, browse, or advanced multi-criteria filtering",
      "Role-based access — reps see own data, managers see teams, admin sees everything",
      "Real-time data sync from EPM via automated API exports",
      "CSV, Excel, and PDF export with formatted headers",
      "Clone-to-compare — open multiple filtered views side-by-side",
      "Full audit trail and data lineage",
    ],
    impact: [
      "4 working days → ~5 minutes per commission cycle",
      "~$300K/year in reduced processing costs and EPM seat licenses",
      "Zero manual errors in commission calculations",
      "Sales reps self-serve — no more chasing finance for queries",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Anaplan REST API", "Kubernetes", "Tailwind CSS"],
    color: "from-indigo-500 to-purple-600",
  },
  {
    num: "02",
    title: "FP&A Data Automation Engine",
    subtitle: "Multi-source data ingestion & sync pipeline",
    problem: "Finance analysts spent ~10 hours per month manually downloading Salesforce reports from email, reformatting data, and uploading to shared drives for downstream consumption by planning tools and dashboards.",
    solution: "A Node.js automation pipeline that monitors Gmail for Salesforce report deliveries, extracts CSV attachments, validates data integrity, and syncs directly to Google Drive shared locations — all on a daily cron schedule.",
    features: [
      "Automated email monitoring and attachment extraction",
      "Data validation and integrity checks before sync",
      "Google Drive API integration for shared drive updates",
      "Configurable report-to-destination mapping",
      "Error alerting and retry logic",
      "Scheduled via cron with health monitoring",
    ],
    impact: [
      "~10 hours/month of manual work eliminated",
      "Zero human intervention in the data pipeline",
      "Data available same-day instead of next-day",
      "Eliminated formatting errors from manual processing",
    ],
    stack: ["Node.js", "Google APIs", "Gmail API", "Cron", "Shell Scripting"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    num: "03",
    title: "Sales Performance Intelligence Bot",
    subtitle: "Slack-native conversational BI for sales leadership",
    problem: "Sales leadership needed quick answers about pipeline health, rep performance, and forecast accuracy. Every question required an analyst to pull data, build a view, and respond — often taking hours or days.",
    solution: "A Slack bot connected to EPM, CRM, and the company's revenue engine that responds to natural language queries with formatted, accurate answers. Scheduled daily/weekly summaries deliver proactive insights.",
    features: [
      "Natural language query processing",
      "Connected to live data — answers reflect real-time state",
      "Scheduled summaries (daily pipeline, weekly forecast)",
      "Role-based response filtering",
      "Proactive anomaly detection and alerting",
    ],
    impact: [
      "Leadership gets answers in seconds instead of days",
      "Reduced ad-hoc report requests to FP&A team by ~60-70%",
      "Proactive alerting catches pipeline risks before they impact forecast",
      "Democratised data access without compromising security",
    ],
    stack: ["TypeScript", "Slack API", "Salesforce", "Anaplan API", "Cron Jobs"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    num: "04",
    title: "FP&A Co-Pilot Agent",
    subtitle: "Enterprise-grade AI assistant for finance operations",
    problem: "FP&A teams juggle dozens of operational responsibilities — board deck preparation, compliance tracking, revenue forecasting, exception management. Institutional knowledge lives in people's heads, and context-switching between tools kills productivity.",
    solution: "An enterprise AI agent operating as a virtual CFO/Controller/FP&A Manager — with persistent memory, tool integration, and proactive monitoring. Connected to email, calendar, EPM tools, shared drives, and communication platforms.",
    features: [
      "Persistent memory across sessions — remembers context, decisions, preferences",
      "Proactive monitoring — checks email, calendar, pipeline data on schedule",
      "Multi-tool integration — EPM, CRM, Drive, BI tools, communication platforms",
      "Sub-agent architecture — specialised agents for commissions, forecasting, reporting",
      "Market intelligence — tracks relevant market moves and sentiment",
      "Self-improving — learns from interactions and outcomes",
    ],
    impact: [
      "Acts as a force multiplier for the entire FP&A function",
      "Captures and operationalises institutional knowledge",
      "Reduces context-switching overhead by centralising tool access",
      "Enables 24/7 monitoring of critical financial metrics",
    ],
    stack: ["TypeScript", "AI/LLM", "Multi-Agent Architecture", "REST APIs", "Cron Automation"],
    color: "from-violet-500 to-purple-600",
  },
];
