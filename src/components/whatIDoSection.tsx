import { Code, GitBranch, Users, Rocket } from "lucide-react";
import { SubHeading } from "./text";
import SummaryCard from "./summaryCard";

const items = [
  {
    icon: <Code size={24} className="text-blue-400" />,
    title: "Frontend Development",
    desc: "React applications with Next.js, TypeScript, and Tailwind CSS. Built component libraries using Storybook for consistent, reusable UI components.",
  },
  {
    icon: <GitBranch size={24} className="text-blue-400" />,
    title: "Full-Stack Integration",
    desc: "Integrated REST APIs with frontend applications, and worked with AWS Cognito for handling user authentication flows.",
  },
  {
    icon: <Users size={24} className="text-blue-400" />,
    title: "Team Collaboration & Development Practices",
    desc: "Experience with Git workflows, PR reviews, sprint retrospectives, and agile development. Managed tickets through Linear and maintained high code quality.",
  },
  {
    icon: <Rocket size={24} className="text-blue-400" />,
    title: "Production-Ready Features",
    desc: "Built complex fullt-stack features including wallet creation, order processing, and multi-organisation user management for real-world applications.",
  },
];

const WhatIDoSection = () => (
  <section className="mb-8">
    <SubHeading className="mb-4" bold>
      What I&apos;m Doing
    </SubHeading>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, idx) => (
        <SummaryCard
          key={idx}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  </section>
);

export default WhatIDoSection;
