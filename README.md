

# Project README

## YouTube Video Summary Generator

This project enables users to input a YouTube video URL, analyzes the video, and generates a concise text summary. Additionally, the summary can be downloaded in PDF format for convenience.

---

## Features

- **Video Analysis:** Automatically extracts and summarizes the content of YouTube videos.
- **PDF Download:** Users can download the generated summary as a PDF.
- **User-Friendly Interface:** A modern front-end built with Angular ensures an intuitive user experience.
- **Efficient Backend:** Powered by a Flask API for seamless video analysis and text generation.

---

## Tech Stack

- **Frontend:** Angular
- **Backend:** Flask (served using Uvicorn)

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** and **npm** (for Angular)
- **Python** and **pip** (for Flask and related dependencies)
- **Uvicorn** (for serving the Flask API)

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository.git
   cd your-repository
   ```

2. Navigate to the frontend directory and install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Navigate to the backend directory and set up the Python environment:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

---

### Running the Application

#### Frontend
To start the Angular frontend:
```bash
cd frontend
ng serve -o
```

#### Backend
To run the Flask backend with Uvicorn:
```bash
cd backend
uvicorn main:app --reload
```

The backend will be available at `http://127.0.0.1:8000` by default.

---

## Usage

1. Open the application in your browser (automatically launched by `ng serve -o`).
2. Enter a YouTube video URL in the input field.
3. Click the "Analyze" button to generate the summary.
4. Optionally, click the "Download as PDF" button to save the summary.

---

## Project Structure

```plaintext
root/
│
├── frontend/          # Angular frontend code
│   ├── src/
│   ├── angular.json
│   └── package.json
│
├── backend/           # Flask backend code
│   ├── main.py        # Entry point for Uvicorn
│   ├── app/           # Flask app logic
│   └── requirements.txt
│
└── README.md          # Project documentation
```

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for review.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For any queries or support, please reach out at [your-email@example.com].