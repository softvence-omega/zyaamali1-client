import React from "react";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi"; // For a nice separator icon

interface BreadcrumbProps {
  paths: { name: string; link: string }[]; // Array of breadcrumb items
}

const TopBar: React.FC<BreadcrumbProps> = ({ paths }) => {
  return (
    <nav className="text-sm text-gray-600 mb-6 flex items-center">
      {paths.map((path, index) => (
        <span key={index} className="flex items-center">
          <Link
            to={path.link}
            className={`text-gray-600 hover:text-blue-600 transition-colors duration-300 ${
              index === paths.length - 1 ? "font-semibold text-gray-900" : ""
            }`} // Make last item bold
          >
            {path.name}
          </Link>
          {index < paths.length - 1 && (
            <HiChevronRight className="mx-2 text-gray-400" /> // Use Chevron icon for separation
          )}
        </span>
      ))}
    </nav>
  );
};

export default TopBar;
