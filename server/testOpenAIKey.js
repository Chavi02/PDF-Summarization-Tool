const express = require('express');
const { analyzeCode } = require('./openaiAnalyzer');
const { fetchCodeFromGitHub } = require('./githubFetcher');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Analyze Code Endpoint
app.post('/analyze', async (req, res) => {
  const { code_snippet } = req.body;

  try {
    const analysis = await analyzeCode(code_snippet);
    res.json({ analysis });
  } catch (error) {
    res.status(500).send('Error analyzing code');
  }
});

// Fetch Code from GitHub Endpoint
app.get('/fetch-code/:owner/:repo/:path', async (req, res) => {
  const { owner, repo, path } = req.params;

  try {
    const content = await fetchCodeFromGitHub(owner, repo, path);
    res.json({ content });
  } catch (error) {
    res.status(500).send('Error fetching code from GitHub');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



