# **PDF Summarization Tool**

This project is a PDF summarization tool that leverages **OpenAI's GPT-4-32k model** for summarizing large PDF documents. The tool allows users to upload PDFs, extract the text, and generate concise summaries using advanced AI models.

## **Features**

- **PDF Text Extraction**: Extracts text from uploaded PDFs using the `pdf-parse` library.
- **GPT-4-32k Summarization**: Utilizes the powerful GPT-4-32k model, capable of handling up to 32,000 tokens, allowing it to summarize larger documents without requiring extensive chunking.
- **React Frontend**: A user-friendly interface built with React, enabling seamless interaction for PDF uploads and summarization.
- **Node.js & Express.js Backend**: A modular backend that processes PDFs, communicates with OpenAI's API, and sends summarized text back to the frontend.

## **Technology Stack**

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **AI Model**: OpenAI GPT-4-32k
- **PDF Parser**: `pdf-parse`
- **Environment Management**: dotenv

## **Installation and Setup**

### **Prerequisites**

Make sure you have the following installed:

- Node.js (v14 or above)
- npm or yarn
- OpenAI API Key

### **Clone the repository**

```bash
git clone https://github.com/Chavi02/PDF-Summarization-Tool.git
cd PDF-Summarization-Tool
```

### **Backend Setup**

1. Navigate to the backend directory:

   ```bash
   cd server
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory and add your OpenAI API key:

   ```plaintext
   OPENAI_API_KEY=your-openai-api-key
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

   The backend will run on `http://localhost:5000`.

### **Frontend Setup**

1. Navigate to the frontend directory:

   ```bash
   cd client
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

## **Usage**

1. Open the frontend at `http://localhost:3000`.
2. Upload a PDF file using the file chooser.
3. Click on the **Summarize PDF** button to generate the summary.
4. The summarized text will be displayed on the right side of the screen.

## **File Structure**

```plaintext
.
├── client                   # Frontend (React.js)
│   ├── src
│   │   ├── components
│   │   ├── App.js
│   │   ├── FileUpload.js
│   │   ├── SummarizePdf.js
│   │   └── ...
│   └── package.json
├── server                   # Backend (Node.js, Express.js)
│   ├── routes
│   ├── services
│   ├── controllers
│   ├── utils
│   ├── app.js
│   ├── server.js
│   ├── .env
│   └── package.json
└── README.md
```

## **API Endpoints**

### **POST /api/summarize**

- **Description**: Extracts text from an uploaded PDF and generates a summary using GPT-4-32k.
- **Request Body**: Multipart form data containing the uploaded PDF file.
- **Response**: JSON object containing the summarized text.

## **Environment Variables**

- `OPENAI_API_KEY`: Your OpenAI API key.

Create a `.env` file in the `server` directory and set up your environment variables:

```plaintext
OPENAI_API_KEY=your-openai-api-key
```

## **Future Improvements**

- **Multi-page PDF support**: Handle larger documents with more robust chunking mechanisms for summarization.
- **Customization**: Allow users to customize the summary length and style (bullet points, paragraphs, etc.).
- **File Type Support**: Extend support to other document types like Word, PowerPoint, etc.
