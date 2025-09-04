import { X } from 'lucide-react';

interface SkillTagProps {
  skill: string;
  removable?: boolean;
  onRemove?: () => void;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, removable = false, onRemove }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
      {skill}
      {removable && onRemove && (
        <button
          onClick={onRemove}
          className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-blue-200 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </span>
  );
};

export default SkillTag;