import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const FileUpload = ({ onFileSelect }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedFile.type === 'application/pdf') {
        setFile(selectedFile);
        setError('');
        onFileSelect(selectedFile);
      } else {
        setError('Please upload a PDF file.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-white">
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      {file && (
        <div className="mb-2">
          <Typography variant="body1" color="textSecondary">File Name: {file.name}</Typography>
        </div>
      )}
      {error && (
        <Typography variant="body1" color="error" className="mb-2">
          {error}
        </Typography>
      )}
     
    </div>
  );
};

export default FileUpload;














