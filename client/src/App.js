import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import SummarizePdf from './components/SummarizePdf';
import { Box, Typography } from '@mui/material';

function App() {
  const [pdfFile, setPdfFile] = useState(null);
  const [summary, setSummary] = useState(null);

  const handleFileSelect = (file) => {
    setPdfFile(file);
  };

  const handleSummarize = (summarizedText) => {
    setSummary(summarizedText);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#f0f4f8',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Text Summarization Tool
      </Typography>

      <Box
        sx={{
          width: '100%',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          padding: '20px',
        }}
      >
        <FileUpload onFileSelect={handleFileSelect} />

        {pdfFile && (
          <>
            <SummarizePdf pdfFile={pdfFile} onSummarize={handleSummarize} />
          </>
        )}
      </Box>

      {summary && (
        <Box
          sx={{
            width: '100%',
            maxWidth: '600px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            padding: '20px',
            marginTop: '20px',
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Summarized Text
          </Typography>
          <Typography variant="body1">
            {summary}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default App;





