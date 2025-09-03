import React from 'react';

interface ProfileCardProps {
  name: string;
  course: string;
  skills: string[];
  github?: string;
  linkedin?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, course, skills, github, linkedin }) => (
  <div className="p-6 bg-white rounded shadow flex flex-col items-start mb-4">
    <div className="font-bold text-xl mb-2">{name}</div>
    <div className="text-gray-600 mb-2">{course}</div>
    <div className="mb-2">Skills: {skills.join(', ')}</div>
    <div className="flex space-x-2">
      {github && <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a>}
      {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a>}
    </div>
  </div>
);

export default ProfileCard;
