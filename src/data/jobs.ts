export interface Job {
  slug: string;
  title: string;
  location: string;
  description: string;
  aboutChord: string;
  aboutRole: string;
  responsibilities: string[];
  goodFit: string[];
  bonuses: string[];
  salary: string;
  equity: string;
}

export const jobs: Job[] = [
  {
    slug: "chief-of-staff",
    title: "Chief of Staff",
    location: "Remote, US timezones preferred",
    description: "Join Sylience as Chief of Staff and help drive our business forward.",
    aboutChord: `As AI companies build increasingly powerful AI systems, humans will have to make extremely consequential, perhaps existential, decisions that permanently alter humanity's future trajectory. Unfortunately, we don't have the best track record for getting high-stakes decisions right on the first try. On the other hand, AI capabilities that have already been developed have the potential to help us navigate this transition, by improving our reasoning, cooperation, and decision making.

Chord facilitates consensus building and collective decision making by using AI to parallelize group communication. This means that group conversations can incorporate the best thinking of more stakeholders, creating richer shared context and better understanding of the consequences of decisions and actions. As humans make critical decisions over the coming years, Chord will help businesses, governments, and societies make better choices according to their own collective values and preferences.`,
    aboutRole: `As Chief of Staff, you'll own critical initiatives for driving the business forward and scaling the organization. Focusing on the highest leverage points on any given day. You'll step into ambiguous situations, figure out what needs to happen, and make it happen. As an operational leader, you might focus on the operational-administrative side, or product-business development, or product development—that's a conversation we'd like to have with candidates.

You'll work with the CEO on early go-to-market and user acquisition and help establish credible product-market fit.

Chord's success depends on managing external partnerships and vendor relationships, supporting future fundraising efforts as needed, and helping shape company culture and establishing operating principles that let us rapidly grow the business while staying accountable to the mission.`,
    responsibilities: [],
    goodFit: [
      "You've worked in broadly scoped roles where you wore many hats and dealt with new challenges every week.",
      "You have strong judgment and can make decisions with incomplete information.",
      "You communicate clearly and concisely in writing.",
      "You take ownership and operate independently. No task is too small, but you don't shirk from big responsibilities either. You get things done.",
      "You believe the development of AI poses extremely important questions for humanity, and you're excited to improve our capability for making good collective decisions."
    ],
    bonuses: [
      "You've previously worked at an early-stage startup as a Chief of Staff or similar role.",
      "You've written marketing copy, worked on SEO, set up ad campaigns, or otherwise supported user acquisition and onboarding.",
      "You've built and/or run a hiring process end to end.",
      "You've previously worked in product design, development, or support, so you know what's involved and bring valuable strategic thinking to the table.",
      "You're comfortable with financial modeling, budgeting, or bookkeeping.",
      "You've managed people."
    ],
    salary: "$80,000–$150,000 USD depending on experience and on your cash vs equity preference, with a market-adjustment review at Series A.",
    equity: "0.5–3% depending on experience and salary requirements."
  },
  {
    slug: "founding-engineer",
    title: "Founding Engineer",
    location: "Remote, US timezones preferred",
    description: "Join Sylience as Founding Engineer and own Chord's technical execution.",
    aboutChord: `Sylience, the company building Chord, is a public benefit corporation with the mission to improve reasoning and cooperation, enable broad participation in decision-making, foster human connection, and enhance human agency. Sylience closed its pre-seed round in January 2026 and is currently building out the founding team.`,
    aboutRole: `As Founding Engineer, you'll be the primary owner of Chord's technical execution.`,
    responsibilities: [
      "Ship and iterate quickly based on user feedback as Chord develops product-market fit.",
      "Collaborate closely with the CEO on product direction.",
      "Take the lead on key architectural decisions as Chord expands its customer base and extends its functionality.",
      "Combine existing best practices with new approaches to support novel human–AI and human–human collaboration patterns.",
      "Push the boundaries of what's possible using AI to accelerate product development while maintaining high standards.",
      "Help shape the engineering culture and mentor future hires as the team grows."
    ],
    goodFit: [
      "You have 7+ years experience building full-stack web applications.",
      "You move quickly and thrive in fast-paced iterative environments.",
      "You're an expert in modern web development architectures.",
      "You're proficient in both Python (FastAPI) and TypeScript (React/Next.js).",
      "You've been experimenting extensively with AI-assisted software development and you're continuously iterating on your workflow to increase your velocity.",
      "You believe the development of AI poses extremely important questions for humanity, and you're excited to improve our capability for making good collective decisions."
    ],
    bonuses: [
      "You've previously worked at a startup where you built a product from zero to one.",
      "You have strong design skills and have built exceptional user experiences.",
      "You have experience building your own AI agents or agentic workflows.",
      "You have experience with complex data architectures, including distributed systems, real-time data streams, and information retrieval.",
      "You've built desktop and/or mobile applications."
    ],
    salary: "$100,000–$150,000 USD depending on your cash vs equity preference, with a market-adjustment review at Series A.",
    equity: "1–5% depending on experience and salary requirements. Negotiable for especially impressive candidates."
  }
];

export function getJob(slug: string): Job | undefined {
  return jobs.find(job => job.slug === slug);
}

export function getAllJobs(): Job[] {
  return jobs;
}
