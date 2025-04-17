# 🚀 AI Resume Builder

<div align="center">
  <img src="/Frontend/public/logo.svg" alt="AI Resume Builder Logo" width="200"/>
  
  [![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.3.1-brightgreen)](https://vitejs.dev/)
  [![Node.js](https://img.shields.io/badge/Node.js-20.0.0-green)](https://nodejs.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-Latest-success)](https://www.mongodb.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-blue)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
</div>

## 📋 Overview

A modern AI-powered resume builder that helps users create professional resumes with ease. Leveraging Google's Gemini AI, this application provides intelligent suggestions and automated content generation to make resume creation effortless and professional.

## 🎯 Project Objectives

1. **AI-Powered Content Generation**
   - Smart summary generation based on job titles
   - Intelligent experience descriptions
   - Automated project descriptions
   - Context-aware content suggestions

2. **Professional Resume Creation**
   - Modern, clean templates
   - Customizable sections
   - Real-time preview
   - Multiple format support

3. **User Experience**
   - Intuitive interface
   - Step-by-step guidance
   - Easy content editing
   - Instant AI suggestions

## 🌟 Key Features

<table>
  <tr>
    <td width="25%">
      <div align="center">
        <h3>🤖 AI Integration</h3>
        <ul align="left">
          <li>Gemini AI powered</li>
          <li>Smart suggestions</li>
          <li>Content generation</li>
          <li>Context awareness</li>
        </ul>
      </div>
    </td>
    <td width="25%">
      <div align="center">
        <h3>📝 Resume Building</h3>
        <ul align="left">
          <li>Multiple sections</li>
          <li>Custom templates</li>
          <li>Real-time preview</li>
          <li>Easy editing</li>
        </ul>
      </div>
    </td>
    <td width="25%">
      <div align="center">
        <h3>💾 Data Management</h3>
        <ul align="left">
          <li>Secure storage</li>
          <li>Easy updates</li>
          <li>Version control</li>
          <li>Data backup</li>
        </ul>
      </div>
    </td>
    <td width="25%">
      <div align="center">
        <h3>🎨 Customization</h3>
        <ul align="left">
          <li>Color themes</li>
          <li>Font selection</li>
          <li>Layout options</li>
          <li>Section ordering</li>
        </ul>
      </div>
    </td>
  </tr>
</table>

## 🛠️ Technical Stack

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-5.3.1-brightgreen?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Node.js-20.0.0-green?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/MongoDB-Latest-success?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Tailwind-3.0-blue?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/Google_Gemini-AI-orange?style=for-the-badge&logo=google&logoColor=white" alt="Gemini AI"/>
</div>

## 🚀 Getting Started

### Prerequisites
- Node.js 20.0.0 or higher
- MongoDB
- Google Gemini API Key

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/Ai-Resume-Builder.git
cd Ai-Resume-Builder
```

2. Install backend dependencies
```bash
cd Backend
npm install
```

3. Install frontend dependencies
```bash
cd Frontend
npm install
```

4. Set up environment variables
```bash
# Frontend/.env.local
VITE_GEMENI_API_KEY=your-gemini-api-key
VITE_APP_URL=http://localhost:5001/

# Backend/.env
MONGODB_URI=your-mongodb-uri
PORT=5001
```

5. Start the backend server
```bash
cd Backend
npm start
```

6. Start the frontend development server
```bash
cd Frontend
npm run dev
```

7. Access the application at `http://localhost:5173`

## 📁 Project Structure

```
Ai-Resume-Builder/
├── Frontend/                # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   └── features/      # Redux features
│   └── public/            # Static assets
├── Backend/                # Node.js backend server
│   ├── controllers/       # Route controllers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   └── services/         # Business logic
└── README.md             # Project documentation
```

## 🔐 Security Features

- JWT Authentication
- Secure API endpoints
- Environment variable protection
- Input validation
- Error handling

## 🌐 Performance Optimization

- Code splitting
- Lazy loading
- Image optimization
- Caching strategies
- API response optimization

## 📈 Future Roadmap

- [ ] Additional resume templates
- [ ] PDF export improvements
- [ ] Enhanced AI suggestions
- [ ] Multi-language support
- [ ] ATS optimization
- [ ] LinkedIn integration
- [ ] Mobile app version
- [ ] Advanced customization options

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

For any queries or support, please contact the team members:
- GitHub: [Project Repository](https://github.com/yourusername/Ai-Resume-Builder)

---

<div align="center">
  <p>© 2024 AI Resume Builder</p>
</div>
