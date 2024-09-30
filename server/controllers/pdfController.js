require('dotenv').config();
const axios = require('axios');
const pdfParse = require('pdf-parse');

const extractTextFromPDF = async (pdfBuffer) => {
  const data = await pdfParse(pdfBuffer);
  return data.text;
};

const summarizeText = async (text) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',  // Updated model
        messages: [
          {
            role: 'user',
            content: `Summarize the following text:\n\n${text}`,
          },
        ],
        max_tokens: 1000,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error in summarizeText:', error.response ? error.response.data : error.message);
    throw error;
  }
};

const extractAndSummarizePDF = async (req, res) => {
  try {
    // Check if a file is uploaded
    if (!req.files || !req.files.file) {
      return res.status(400).send('No file was uploaded.');
    }

    const pdfBuffer = req.files.file.data; // Access the file buffer
    const text = await extractTextFromPDF(pdfBuffer);
    const summary = await summarizeText(text);

    res.json({ summary });
  } catch (error) {
    console.error('Error in extractAndSummarizePDF:', error.message); // Logs to the backend console
    if (error.response) {
      // If it's an error from the OpenAI API, log the detailed response
      console.error('OpenAI API Error:', error.response.data);
      return res.status(500).send(error.response.data);
    }
    res.status(500).send('Error processing PDF');
  }
};


module.exports = { extractAndSummarizePDF };
