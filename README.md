
Built by https://www.blackbox.ai

---

```markdown
# Traffic Volume Count Survey

## Project Overview
The **Traffic Volume Count Survey** is a web application designed to allow users to upload CCTV video files for analyzing traffic volume. The frontend is built with HTML and Tailwind CSS, providing a responsive and user-friendly interface. The backend is powered by Node.js, using Express for handling requests and Multer for file uploads.

## Installation

To install and run the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd traffic-volume-count-survey
   ```

2. **Navigate to the server directory**:
   ```bash
   cd server
   ```

3. **Install dependencies using npm**:
   ```bash
   npm install
   ```

4. **Start the server**:
   ```bash
   npm start
   ```

5. **Open your browser and go to** `http://localhost:3000` to access the application.

## Usage

1. Upload your CCTV video files by either dragging and dropping them into the designated area or clicking to browse your files.
2. Select multiple video files that are in supported formats: `.mp4`, `.asf`, and `.flv`.
3. Click the "Upload" button to send your files to the server for processing.
4. You will receive a notification whether the upload was successful or not.

## Features
- User-friendly interface for uploading video files.
- Supports multiple file uploads (can upload more than one video file at a time).
- Validates file types to ensure only `.mp4`, `.asf`, and `.flv` files are accepted.
- Displays a list of selected files before upload.
- Built with responsive design using Tailwind CSS.

## Dependencies
The project includes the following dependencies defined in `package.json`:

- **express**: A web framework for Node.js, used for building web applications and APIs.
- **multer**: Middleware for handling multipart/form-data, which is primarily used for uploading files.

```json
"dependencies": {
  "express": "^4.18.2",
  "multer": "^1.4.5-lts.1"
}
```

## Project Structure

The project is structured as follows:

```
traffic-volume-count-survey/
│
├── index.html          # Frontend HTML file for user interaction
├── server.js           # Backend server code
└── package.json        # Node.js project configuration and dependencies
└── uploads/            # Directory where uploaded files are stored (created by the server)
```

## License
This project is open-source and available under the MIT License. Feel free to customize and use it according to your needs.
```