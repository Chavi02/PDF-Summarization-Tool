const express = require('express');
const { extractAndSummarizePDF } = require('../controllers/pdfController');

const router = express.Router();

router.post('/upload-pdf', extractAndSummarizePDF);

module.exports = router;
