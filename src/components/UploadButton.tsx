import { Upload, File } from 'lucide-react';
import { useState } from 'react';

interface UploadButtonProps {
  title: string;
  description: string;
  accept: string;
  onUpload?: (file: File) => void;
}

const UploadButton: React.FC<UploadButtonProps> = ({
  title,
  description,
  accept,
  onUpload
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileSelect = (file: File) => {
    setUploadedFile(file);
    if (onUpload) {
      onUpload(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
      {uploadedFile ? (
        <div className="flex items-center justify-center space-x-3">
          <File className="w-8 h-8 text-green-600" />
          <div className="text-left">
            <p className="text-sm font-medium text-gray-900">{uploadedFile.name}</p>
            <p className="text-xs text-gray-500">
              {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
          <button
            onClick={() => setUploadedFile(null)}
            className="text-red-600 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      ) : (
        <div
          className={`${isDragOver ? 'border-blue-400 bg-blue-50' : ''}`}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
        >
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
          <h4 className="text-sm font-medium text-gray-900 mb-1">{title}</h4>
          <p className="text-xs text-gray-500 mb-3">{description}</p>
          
          <label className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 cursor-pointer transition-colors">
            Choose File
            <input
              type="file"
              accept={accept}
              onChange={handleFileInput}
              className="hidden"
            />
          </label>
          
          <p className="text-xs text-gray-400 mt-2">
            or drag and drop here
          </p>
        </div>
      )}
    </div>
  );
};

export default UploadButton;