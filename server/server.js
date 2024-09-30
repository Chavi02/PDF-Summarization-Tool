const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors'); // Add this line
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Add this line to allow CORS
app.use(express.json());
app.use(fileUpload());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

