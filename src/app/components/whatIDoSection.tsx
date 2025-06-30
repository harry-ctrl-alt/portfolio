import { Code, Smartphone, Palette, Server } from "lucide-react";
import { SubHeading } from "./text";
import SummaryCard from "./summaryCard";

const items = [
  {
    icon: <Smartphone size={24} className="text-blue-400" />,
    title: "Mobile Apps",
    desc: "Professional development of applications for Android and iOS.",
  },
  {
    icon: <Code size={24} className="text-blue-400" />,
    title: "Web Development",
    desc: "High-quality development of sites at the professional level.",
  },
  {
    icon: <Palette size={24} className="text-blue-400" />,
    title: "UI/UX Design",
    desc: "The most modern and high-quality design made at a professional level.",
  },
  {
    icon: <Server size={24} className="text-blue-400" />,
    title: "Backend Development",
    desc: "High-performance backend services designed for scalability and seamless user experience.",
  },
];

const WhatIDoSection = () => (
  <section className="mb-8">
    <SubHeading className="mb-4" bold>
      What I'm Doing
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
