"use client";

import React from "react";
import { GraduationCap, Briefcase, FileText } from "lucide-react";
import { Heading, SubHeading, Title, Body } from "../components/text";
import IconBox from "../components/icon";
import Divider from "../components/divider";
import Button from "../components/button";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  details?: string[];
  current?: boolean;
  isLast?: boolean;
  lineHeight?: string; // Custom line height for each item
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  period,
  location,
  details,
  current = false,
  isLast = false,
  lineHeight = "100px", // Default height
}) => {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-2">
        <div
          className={`w-3 h-3 rounded-full ${
            current ? "bg-blue-400" : "bg-neutral-600"
          }`}
        />
        {/* Only show line if not the last item */}
        {!isLast && (
          <div
            className="absolute left-1.5 w-0.5 bg-neutral-700"
            style={{
              top: "-10x", // Adjusted to move line 50px upward (3px original top - 50px)
              height: `calc(${lineHeight} + 25px)`, // Extend line by 50px
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <Title bold textColour="text-white">
          {title}
        </Title>
        <Body size="large" textColour="text-gray-300">
          {subtitle}
        </Body>
        <div className="flex items-center gap-4 text-blue-400">
          <Body size="small" bold textColour="text-blue-400">
            {period}
          </Body>
          {location && (
            <Body size="small" textColour="text-gray-400">
              {location}
            </Body>
          )}
        </div>

        {details && (
          <ul className="mt-4 space-y-3">
            {details.map((detail, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <Body
                  size="medium"
                  textColour="text-gray-300"
                  className="leading-relaxed"
                >
                  {detail}
                </Body>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const ResumePage: React.FC = () => {
  // Education items with specific line heights
  const educationItems = [
    {
      title: "St. Patricks College Banbridge",
      subtitle: "GCSEs: 2A*, 3A, 4B. A-Level: ABB",
      period: "2014 - 2021",
      location: "",
      lineHeight: "120px", // Height to reach the next item
    },
    {
      title: "Ulster University Belfast - Software Engineering",
      subtitle:
        "Year 1 Average - 65%, Year 2 Average: 66%, Year 3: 74%, Year 4: In Progress",
      period: "2021 - Present",
      location: "",
      current: true,
      isLast: true, // Mark as last to not show line
    },
  ];

  // Experience items with specific line heights
  const experienceItems = [
    {
      title: "Intern Software Developer",
      subtitle: "Ctrl Alt",
      period: "2024 - 2025 • 1 Year Placement",
      location: "Belfast, UK",
      current: true,
      lineHeight: "650px", // Longer line due to details
      details: [
        "Full-Stack Development & Version Control Mastery - Built expertise in GitHub workflows including frequent commits, merge conflict resolution, and PR management, while setting up Docker-based local development environments and onboarding new team members through comprehensive documentation.",
        "Quality Assurance & Testing Excellence - Implemented comprehensive testing strategies including unit tests, snapshot tests, and end-to-end testing with Jest Playwright, maintaining high test coverage monitored through CodeCov and following DRY principles with reusable utility functions.",
        "Frontend Component Architecture - Developed a robust component library using Storybook for consistent UI elements, translated Figma designs into responsive React components, and managed complex component states based on user roles and feature flags across 3 different website variations.",
        "Authentication & User Management Systems - Built complete user flows including multi-organization switching, user registration with form validation using Tanstack, AWS Cognito integration for authentication, and wallet creation across multiple blockchains (Mantra, Ripple, Algorand) with secure mnemonic handling.",
        "Trading Platform & Order Management - Created end-to-end order flows for asset trading including wallet validation, token allocation, currency handling, and order status management, plus developed data visualization components like valuations graphs using time series data.",
      ],
    },
    {
      title: "Freelance Graphic Design",
      subtitle: "Fiverr",
      period: "2018 - 2023",
      location: "Remote",
      isLast: true, // Mark as last to not show line
      details: [
        "Client Management & Communication - Managed 80+ clients with a 5* satisfaction rate, developing stakeholder communication and requirement gathering skills essential for development projects.",
        "Visual Design & Branding - Created rebrands and social media assets, building UI/UX intuition that enhances frontend development and designer-developer collaboration.",
        "Adobe Creative Suite Proficiency - Advanced Photoshop, Illustrator, and After Effects skills enable better asset optimization and accurate design-to-code implementation.",
        "Design-Development Bridge - Graphic design experience provides understanding of responsive principles, typography, and layout composition for pixel-perfect web applications.",
        "Iterative Feedback Process - Freelance revision cycles mirror agile methodologies, improving rapid prototyping and user feedback integration skills.",
      ],
    },
  ];

  return (
    <div className="mb-8">
      {/* Header */}
      <div className="mb-4">
        <Heading bold>Resume</Heading>
        <Divider />
      </div>

      {/* Education Section */}
      <section className="mb-12">
        <div className="group flex items-center gap-3 mb-6">
          <IconBox size="md" variant="default" withHoverEffect>
            <GraduationCap className="text-blue-400" />
          </IconBox>
          <SubHeading bold>Education</SubHeading>
        </div>

        <div className="ml-6">
          {educationItems.map((item, idx) => (
            <TimelineItem key={idx} {...item} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <div className="group flex items-center gap-3 mb-6">
          <IconBox size="md" variant="default" withHoverEffect>
            <Briefcase className="text-blue-400" />
          </IconBox>
          <SubHeading bold>Experience</SubHeading>
        </div>

        <div className="ml-6">
          {experienceItems.map((item, idx) => (
            <TimelineItem key={idx} {...item} />
          ))}
        </div>
      </section>

      {/* Download CV Button */}
      <div className="flex justify-end mt-12 group">
        <Button
          text="Download CV"
          downloadUrl="/harry_murray_cv.pdf"
          fileName="Harry_Murray_CV.pdf"
          openInNewTab={true}
        />
      </div>
    </div>
  );
};

export default ResumePage;
