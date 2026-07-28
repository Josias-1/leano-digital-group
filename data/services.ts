export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  outcomes: string[];
}

export const services: Service[] = [
  {
    slug: "ai-engineering",
    title: "AI Engineering",
    summary: "Enterprise AI copilots, intelligent automation, Retrieval-Augmented Generation (RAG), Azure OpenAI, and custom AI applications.",
    description: "Turn high-value business knowledge and repetitive work into secure, practical AI capabilities your teams can use with confidence.",
    outcomes: ["AI opportunity discovery and delivery roadmap", "Secure copilots and RAG applications", "Automation integrated into your existing workflows"],
  },
  {
    slug: "cloud-transformation",
    title: "Cloud Transformation",
    summary: "Microsoft Azure architecture, cloud migration, infrastructure modernization, governance, and optimization.",
    description: "Modernise your technology foundation with an Azure environment designed for reliability, security, and sustainable growth.",
    outcomes: ["Cloud strategy and migration planning", "Secure, governed Azure landing zones", "Cost and performance optimisation"],
  },
  {
    slug: "enterprise-software",
    title: "Enterprise Software",
    summary: "Modern web applications, internal business platforms, APIs, and scalable enterprise software solutions.",
    description: "Design and build dependable software that makes complex business operations simpler for the people who run them.",
    outcomes: ["Product discovery and solution design", "Modern web applications and APIs", "Scalable, maintainable engineering foundations"],
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    summary: "Business Intelligence, Power BI dashboards, data engineering, predictive analytics, and executive reporting.",
    description: "Give decision-makers a clear, trusted view of the business through well-designed data platforms and useful reporting.",
    outcomes: ["Data strategy and engineering", "Power BI dashboards and executive reporting", "Analytics that support faster decisions"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
