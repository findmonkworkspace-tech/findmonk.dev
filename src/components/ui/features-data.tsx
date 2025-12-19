import {
  BarChart3,
  FileText,
  Lightbulb,
  Search,
  TrendingUp,
  Users,
} from "lucide-react"

export const features = [
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: TrendingUp,
    useCase:
      "Automate multi-channel ad spend optimization and creative generation using predictive modeling.",
    timeline: "2-4 Weeks",
    metrics: ["+45% Conversion", "-30% CPA"],
    color: "bg-blue-500",
  },
  {
    id: "data-decision",
    title: "Data-Driven Decisions",
    icon: BarChart3,
    useCase:
      "Transform raw data into executive-level strategy blueprints with autonomous trend discovery.",
    timeline: "4-6 Weeks",
    metrics: ["Real-time Insights", "99% Accuracy"],
    color: "bg-purple-500",
  },
  {
    id: "leads",
    title: "Lead Generation",
    icon: Users,
    useCase:
      "Identify high-intent prospects using behavioral scraping and automated LinkedIn/Email outreach.",
    timeline: "1-3 Weeks",
    metrics: ["3x Lead Quality", "Automated CRM"],
    color: "bg-green-500",
  },
  {
    id: "stats",
    title: "Statistical Analysis",
    icon: Search,
    useCase:
      "Deep-dive regression and correlation analysis to find hidden variables affecting your bottom line.",
    timeline: "3-5 Weeks",
    metrics: ["p-value validation", "Risk Modeling"],
    color: "bg-orange-500",
  },
  {
    id: "reporting",
    title: "Smart Reporting",
    icon: FileText,
    useCase:
      "Live-updating dashboards that summarize complex KPIs into natural language summaries for stakeholders.",
    timeline: "1-2 Weeks",
    metrics: ["Daily Reports", "Voice-to-Data"],
    color: "bg-pink-500",
  },
  {
    id: "consulting",
    title: "AI Consulting",
    icon: Lightbulb,
    useCase:
      "Custom roadmap development to integrate LLMs and automation into your existing legacy workflows.",
    timeline: "Ongoing",
    metrics: ["Legacy Bridge", "ROI Roadmap"],
    color: "bg-indigo-500",
  },
]
