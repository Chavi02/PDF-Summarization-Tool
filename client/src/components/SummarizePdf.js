import React, { useState } from 'react';
import axios from 'axios';
import { Button, CircularProgress, Typography } from '@mui/material';
import SummarizeIcon from '@mui/icons-material/Summarize';

const SummarizePdf = ({ pdfFile, onSummarize }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSummarizeClick = async () => {
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', pdfFile);

    try {
      const response = await axios.post('http://localhost:5000/api/upload-pdf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      const summarizedText = response.data.summary;
      onSummarize(summarizedText);
    } catch (err) {
      setError('Failed to summarize PDF. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Button
        variant="contained"
        color="primary"
        startIcon={<SummarizeIcon />}
        onClick={handleSummarizeClick}
        disabled={loading}
      >
        {loading ? 'Summarizing...' : 'Summarize PDF'}
      </Button>
      {loading && <CircularProgress className="mt-4" />}
      {error && (
        <Typography variant="body1" color="error" className="mt-4">
          {error}
        </Typography>
      )}
    </div>
  );
};

export default SummarizePdf;










