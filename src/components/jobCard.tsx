import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface JobCardProps {
  title: string;
  href: string;
  image: string;
  description: string;
  company?: string;
  date?: string;
  tags?: string[];
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  href,
  image,
  description,
  company,
  date,
  tags = [],
}) => {
  return (
    <div className="group relative h-full rounded-2xl transition-transform duration-200 hover:scale-[1.01] cursor-none">
      {/* Main card container */}
      <div
        className="
        relative h-full flex flex-col
        bg-neutral-800/90
        rounded-2xl
        border border-neutral-700/50
        shadow-lg shadow-black/20
        transition-all duration-200
        overflow-hidden
        
        group-hover:shadow-xl
        group-hover:border-neutral-600/60
        group-hover:translate-y-[-1px]
        cursor-none
      "
      >
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col h-full cursor-none"
        >
          {/* Image container */}
          <div className="relative overflow-hidden rounded-t-2xl">
            <img src={image} alt={title} className="w-full h-48 object-cover" />

            {/* External link icon */}
            <div className="absolute top-3 right-3">
              <div className="w-8 h-8 bg-neutral-800/80 backdrop-blur-sm border border-neutral-600/50 rounded-lg flex items-center justify-center transition-colors duration-200 group-hover:bg-neutral-700/80">
                <ExternalLink size={12} className="text-gray-300" />
              </div>
            </div>
          </div>

          {/* Content container */}
          <div className="flex-1 flex flex-col p-6 gap-3">
            {/* Header section */}
            <div className="flex-1">
              {/* Company and date */}
              {(company || date) && (
                <div className="flex items-center justify-between mb-2">
                  {company && (
                    <span className="text-sm text-blue-400 font-medium">
                      {company}
                    </span>
                  )}
                  {date && (
                    <span className="text-xs text-gray-500">{date}</span>
                  )}
                </div>
              )}

              {/* Title */}
              <h3
                className="
                text-xl font-semibold text-white mb-3
                transition-colors duration-200
                group-hover:text-blue-300
                line-clamp-2
              "
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className="
                text-sm text-gray-400 leading-relaxed
                line-clamp-3
              "
              >
                {description}
              </p>
            </div>

            {/* Tags section */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="
                      px-2 py-1 text-xs
                      bg-neutral-700/50 text-gray-300
                      border border-neutral-600/30
                      rounded-lg
                    "
                  >
                    {tag}
                  </span>
                ))}
                {tags.length > 3 && (
                  <span className="px-2 py-1 text-xs text-gray-500">
                    +{tags.length - 3} more
                  </span>
                )}
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
