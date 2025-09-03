import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => (
  <div className="p-4 bg-white rounded shadow mb-4">
    <div className="font-semibold text-lg mb-1">{title}</div>
    <div className="text-gray-600 mb-2">{description}</div>
    {link && <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Project</a>}
  </div>
);

export default ProjectCard;
