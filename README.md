# 🤖 AI Desktop Assistant (Powered by Ollama)

## 📌 Overview
AI Desktop Assistant is a locally hosted intelligent assistant built using Flask and Ollama (Mistral model). 

The assistant can:
- Answer general questions using a local LLM
- Perform system-level tasks
- Open applications
- Control the camera
- Provide voice-based responses
- Execute system commands

---

## 🚀 Key Features

### 🧠 AI Chat (Local LLM)
- Uses Ollama with Mistral model
- Fully offline AI response generation
- No external API required

### 🎤 Voice Integration
- Speech Recognition for input
- Text-to-Speech using pyttsx3
- Multi-threaded speech processing

### 💻 System Automation
- Open Google, YouTube
- Open Notepad, Calculator, WhatsApp
- Shutdown & Restart system
- Get current time

### 📷 Camera Control
- Open and close webcam
- Real-time camera streaming using OpenCV

---

## 🛠️ Technologies Used
- Python
- Flask
- Ollama (Mistral Model)
- OpenCV
- pyttsx3
- SpeechRecognition
- HTML, CSS, JavaScript

---

## ▶️ How to Run

1. Install Ollama
2. Pull Mistral model:
   ollama pull mistral

3. Install dependencies:
   pip install -r requirements.txt

4. Run:
   python ai.py

5. Open:
   http://127.0.0.1:5000/

---

## 🧩 Architecture
User → Flask Backend → 
  ↳ System Commands
  ↳ Ollama LLM (Mistral)
  ↳ Voice Engine
  ↳ Camera Control

---

## 👩‍💻 Author
Rachna R 
B.Voc AI & ML
