# 🩸 Anemic Disease Detection System

A modern, AI-powered web application for detecting anemia using machine learning analysis of blood parameters. This system provides quick, accurate predictions to assist in early diagnosis and treatment planning.

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-2.3.3-green.svg)
![Machine Learning](https://img.shields.io/badge/ML-Scikit--Learn-orange.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 🌟 Features

- **AI-Powered Analysis**: Advanced machine learning algorithms provide accurate predictions
- **Quick Results**: Get instant predictions within seconds
- **Modern UI**: Beautiful, responsive web interface with tabbed navigation
- **Comprehensive Information**: Detailed explanations of blood parameters
- **Medical Grade**: Designed with healthcare professionals in mind
- **Educational**: Learn about anemia and blood parameters

## 🧬 Blood Parameters Analyzed

The system analyzes the following key blood parameters:

- **Hemoglobin (Hb)**: Iron-containing protein that carries oxygen
- **MCH**: Mean Corpuscular Hemoglobin - average hemoglobin per red blood cell
- **MCHC**: Mean Corpuscular Hemoglobin Concentration - hemoglobin concentration
- **MCV**: Mean Corpuscular Volume - average size of red blood cells
- **Gender**: Biological sex (affects normal ranges)

## 🚀 Quick Start

### Prerequisites

- Python 3.8-3.11 (Python 3.12 has compatibility issues with some packages)
- pip (Python package installer)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/anemic-disease-detection.git
   cd anemic-disease-detection
   ```

2. **Create a virtual environment** (recommended)
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**
   ```bash
   cd Flask
   python app.py
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000`

## 📁 Project Structure

```
anemic-disease-detection/
├── Flask/
│   ├── app.py                 # Main Flask application
│   ├── model.pkl             # Trained machine learning model
│   ├── templates/
│   │   ├── index.html        # Main page with tabs
│   │   └── predict.html      # Results page
│   ├── static/
│   │   ├── style.css         # Styling
│   │   └── script.js         # JavaScript functionality
│   └── readme.txt
├── demo.py                   # Demo script (Iris dataset)
├── requirements.txt          # Python dependencies
├── .gitignore               # Git ignore file
└── README.md                # This file
```

## 🔧 Usage

1. **Navigate to the Predict tab** in the web interface
2. **Enter blood parameters**:
   - Select gender (Male/Female)
   - Enter Hemoglobin level (g/dL)
   - Enter MCH value (pg)
   - Enter MCHC value (g/dL)
   - Enter MCV value (fL)
3. **Click "Predict Anemia Risk"**
4. **View results** with detailed recommendations

### Normal Ranges

| Parameter | Normal Range |
|-----------|--------------|
| Hemoglobin | 12-16 g/dL (Women), 14-18 g/dL (Men) |
| MCH | 27-31 pg |
| MCHC | 32-36 g/dL |
| MCV | 80-100 fL |

## 🏥 Medical Disclaimer

⚠️ **Important**: This tool is for educational and screening purposes only. It should not replace professional medical diagnosis, advice, or treatment. Always consult with a qualified healthcare provider for proper medical evaluation.

## 🛠️ Development

### Running in Development Mode

```bash
cd Flask
python app.py
```

The app will run in debug mode on `http://localhost:5000`

### Model Training

The machine learning model (`model.pkl`) was trained on clinical data. To retrain or modify the model, you would need access to the training dataset and appropriate machine learning tools.

## 🌐 Deployment Options

### Option 1: Heroku

1. Create a `Procfile`:
   ```
   web: gunicorn Flask.app:app
   ```

2. Deploy to Heroku:
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

### Option 2: Railway

1. Connect your GitHub repository to Railway
2. Railway will automatically detect the Flask app and deploy it

### Option 3: Render

1. Connect your GitHub repository to Render
2. Set build command: `pip install -r requirements.txt`
3. Set start command: `gunicorn Flask.app:app`

### Option 4: PythonAnywhere

1. Upload your code to PythonAnywhere
2. Configure the web app to use your Flask application
3. Set the working directory to your project folder

## 📊 API Endpoints

- `GET /` - Main page with application interface
- `POST /predict` - Predict anemia risk based on blood parameters

### Predict Endpoint

**POST** `/predict`

**Parameters:**
- `Gender` (float): 0 for Female, 1 for Male
- `Hemoglobin` (float): Hemoglobin level in g/dL
- `MCH` (float): Mean Corpuscular Hemoglobin in pg
- `MCHC` (float): Mean Corpuscular Hemoglobin Concentration in g/dL
- `MCV` (float): Mean Corpuscular Volume in fL

**Response:**
- HTML page with prediction results and recommendations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Medical professionals who provided guidance on blood parameter interpretation
- The open-source community for the amazing tools and libraries
- Healthcare workers worldwide for their dedication

## 📞 Support

If you have any questions or need help with deployment, please:

1. Check the [Issues](https://github.com/yourusername/anemic-disease-detection/issues) page
2. Create a new issue if your problem isn't already addressed
3. Contact the maintainers

---

**Remember**: This is a screening tool. Always consult with healthcare professionals for medical decisions.
