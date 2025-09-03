import React from 'react';

interface SkillTagProps {
  skill: string;
  onRemove?: () => void;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, onRemove }) => (
  <span className="inline-flex items-center px-3 py-1 bg-gray-200 rounded-full text-sm mr-2 mb-2">
    {skill}
    {onRemove && (
      <button onClick={onRemove} className="ml-2 text-red-500">&times;</button>
    )}
  </span>
);

export default SkillTag;
