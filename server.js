const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Use original filename
    cb(null, file.originalname);
  }
});

// File filter to accept only .mp4, .asf, .flv
const fileFilter = (req, file, cb) => {
  const allowedExtensions = ['.mp4', '.asf', '.flv'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedExtensions.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Only .mp4, .asf, and .flv files are allowed'));
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

app.use((req, res, next) => {
  // Allow CORS for local frontend
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/upload', upload.array('videoFiles'), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded' });
  }
  res.json({ message: 'Files uploaded successfully', files: req.files.map(f => f.originalname) });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
