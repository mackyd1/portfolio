export interface Role {
  company: string;
  role: string;
  period: string;
  location: string;
  stack?: string;
  points: string[];
  learnMoreUrl?: string;
}

export const experience: Role[] = [
  {
    company: "TD Bank",
    role: "Software Engineer Intern",
    period: "Sep 2026 – Dec 2026",
    location: "Toronto, ON",
    stack: "Java · Python · Cloud Infrastructure",
    points: [
      "Contributing to the virtualization and containerization of core banking services used by 95% of TD's internal dev teams, improving deployment consistency and reducing infrastructure overhead.",
      "Supporting software delivery pipelines across enterprise platform teams to streamline service deployment and cross-team integration.",
    ],
  },
  {
    company: "VITALL",
    role: "Software Developer Intern",
    period: "Jan 2026 – May 2026",
    location: "Toronto, ON",
    stack: "NestJS · GraphQL · TypeScript · AWS · Redis · Playwright",
    points: [
      "Built a Playwright E2E test suite covering 126 test cases across 11 feature areas for a FHIR R4 healthcare SaaS, cutting regression testing time by 97% (3 days to 1 hour).",
      "Supported dual-mode test execution against an MSW mock layer and a live AWS Cognito-authenticated backend, catching 10+ bugs before production.",
      "Designed a NestJS/GraphQL API across 30+ FHIR R4 resource types with a tiered Redis caching layer using patient-scoped invalidation and resource-type-aware TTLs.",
      "Built an event-driven provisioning system with AWS SQS to auto-create and deactivate FHIR resources org-wide on EMR toggle events.",
    ],
  },
  {
    company: "Dozr",
    role: "Software Engineer Intern",
    period: "May 2025 – Aug 2025",
    location: "Waterloo, ON",
    stack: "React · Node.js · MongoDB · REST APIs · ClickUp API · Slack API",
    points: [
      "Deployed an AI-powered chatbot on the MERN stack with REST endpoints for equipment recommendations, delivery scheduling, and purchase automation, handling ~50 daily interactions and cutting support load by 20%.",
      "Built a ticket automation pipeline integrating ClickUp and Slack APIs to auto-assign tickets by issue type and engineer availability, recovering ~10 hours/week of manual triage.",
      "Diagnosed and resolved React rendering bugs, Node.js API failures, and MongoDB bottlenecks; introduced query indexing to improve resolution time by 30% across 100+ weekly requests.",
    ],
  },
  {
    company: "Environment and Climate Change Canada (ECCC)",
    role: "Junior Software Developer Intern",
    period: "Sep 2024 – Dec 2024",
    location: "Toronto, ON",
    stack: "C++ · Python · Bash · CI/CD",
    points: [
      "Hardened a mission-critical C++ weather forecasting system through cross-team threat modelling, enforcing memory safety and input validation across 20+ integrated teams and reducing vulnerability exposure by 15%.",
      "Audited and patched 25+ federal systems in C++, Python, and Bash, remediating buffer overflows and privilege escalation risks for a 30% reduction in security findings.",
      "Designed CI/CD automation scripts for update pipelines and recurring tasks, cutting manual engineering effort by 20%.",
    ],
  },
];
