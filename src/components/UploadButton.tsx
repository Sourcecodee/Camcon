import React from 'react';

interface UploadButtonProps {
  onUpload: (file: File) => void;
}

const UploadButton: React.FC<UploadButtonProps> = ({ onUpload }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onUpload(e.target.files[0]);
    }
  };

  return (
    <label className="btn cursor-pointer">
      Upload Certificate
      <input type="file" className="hidden" onChange={handleChange} />
    </label>
  );
};

export default UploadButton;
