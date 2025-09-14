# 🤖 SpringBot

<div align="center">

![SpringBot Logo](client/public/springbot-logo-primary.svg)

**A Modern AI-Powered Chatbot**

[![Java](https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=java)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.5-green?style=for-the-badge&logo=spring)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Latest-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![SCSS](https://img.shields.io/badge/SCSS-Sass-pink?style=for-the-badge&logo=sass)](https://sass-lang.com/)

*Intelligent conversations powered by modern technology*

</div>

## ✨ Features

### 🎨 **Modern UI/UX**
- **Dark Green Theme**: Sophisticated dark green color palette with glassmorphism effects
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Real-time Chatbot Interface**: Smooth animations and auto-scrolling conversation experience
- **Markdown Support**: Rich text formatting for bot responses including code blocks, lists, and more
- **Custom Typography**: Beautiful Urbanist font family throughout the interface

### 🚀 **Advanced Functionality**
- **Auto-Scroll**: Automatic scrolling to latest messages for optimal UX
- **Loading States**: Professional loading indicators with smooth animations
- **Message History**: Persistent conversation history during session
- **Error Handling**: Graceful error handling with user-friendly messages
- **Clear Chat**: One-click conversation history clearing functionality

### 🛠️ **Technical Excellence**
- **Spring Boot Backend**: Robust Java-based REST API
- **React Frontend**: Modern React 19+ with hooks and functional components
- **SCSS Styling**: Organized and maintainable styling with Sass
- **TypeScript Ready**: Modern development practices
- **Hot Reload**: Development server with instant updates

## 🏗️ Architecture

```
SpringBot/
├── 📁 client/                 # React Frontend Interface
│   ├── 📁 public/            # Static assets & logos
│   ├── 📁 src/               # Source code
│   │   ├── 📁 components/    # Reusable React components
│   │   │   ├── Navbar.jsx    # Navigation component
│   │   │   └── Navbar.scss   # Navigation styles
│   │   ├── App.jsx           # Main chatbot interface
│   │   ├── App.scss          # Global styles
│   │   ├── config.js         # Configuration settings
│   │   └── main.jsx          # Application entry point
│   ├── package.json          # Dependencies & scripts
│   └── vite.config.js        # Vite configuration
│
├── 📁 server/                # Spring Boot Backend
│   ├── 📁 src/main/java/com/cyclone/
│   │   ├── 📁 controller/    # REST API controllers
│   │   │   └── ChatController.java
│   │   └── 📁 start/         # Application entry point
│   │       └── Demo.java     # Spring Boot main class
│   ├── pom.xml               # Maven dependencies
│   └── 📁 target/           # Compiled classes
│
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Java 17+** - [Download here](https://www.oracle.com/java/technologies/downloads/)
- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Bun** (recommended) or npm - [Install Bun](https://bun.sh/)
- **Maven 3.8+** - [Install Maven](https://maven.apache.org/install.html)

### 🖥️ Backend Setup (Spring Boot)

1. **Clone the repository**
   ```bash
   git clone https://github.com/lord-cyclone100/Spring-Bot.git
   cd Spring-Bot
   ```

2. **Navigate to server directory**
   ```bash
   cd server
   ```

3. **Install dependencies & run**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

4. **Server will start on** `http://localhost:8080`

### 🎨 Frontend Setup (React + Vite)

1. **Navigate to client directory**
   ```bash
   cd client
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

4. **Client will start on** `http://localhost:5173`

### 🌐 Production Build

**Build the frontend for production:**
```bash
cd client
bun run build
# or
npm run build
```

## 🔧 Configuration

### Backend Configuration
- **Application**: Configure in `server/src/main/resources/application.properties`
- **CORS**: Configured to allow frontend connections
- **Port**: Default port is `8080`

### Frontend Configuration
- **Backend URL**: Configure in `client/src/config.js`
- **Development**: Auto-configured for `http://localhost:8080`

## 📱 API Endpoints

### Chatbot API
```http
POST /api/send
Content-Type: application/json

{
  "prompt": "Your message here"
}
```

**Response:**
```json
{
  "response": "Bot response with markdown support"
}
```

## 🎨 Theming & Customization

### Color Palette
```scss
// Primary Colors
$primary-dark: #0c1f1c;      // Ultra dark green
$primary-medium: #134e4a;     // Dark teal
$primary-light: #065f46;      // Forest green
$accent: #34d399;             // Emerald green

// Background Gradients
$bg-gradient: linear-gradient(135deg, #0f172a 0%, #134e4a 50%, #1f2937 100%);
$navbar-gradient: linear-gradient(135deg, #0c1f1c 0%, #0f2027 100%);
```

### Typography
- **Primary Font**: Urbanist (Google Fonts)
- **Code Font**: Monaco, Menlo, Ubuntu Mono
- **Weights**: 100-900 available

## 🛠️ Development

### Available Scripts

**Frontend (client/):**
```bash
bun run dev      # Start development server
bun run build    # Build for production
bun run preview  # Preview production build
bun run lint     # Run ESLint
```

**Backend (server/):**
```bash
mvn spring-boot:run    # Start Spring Boot application
mvn clean install     # Clean & install dependencies
mvn test              # Run tests
```

### Development Features
- **Hot Reload**: Instant updates during development
- **Auto-Scroll**: Messages automatically scroll to bottom
- **Error Boundaries**: Graceful error handling
- **Responsive Design**: Mobile-first approach

## 🧩 Tech Stack

<div align="center">

### Frontend Technologies
| Technology | Description | Documentation |
|------------|-------------|---------------|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | Modern UI library with latest features | [React Docs](https://reactjs.org/) |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) | Ultra-fast build tool and dev server | [Vite Docs](https://vitejs.dev/) |
| ![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) | Advanced CSS preprocessing | [Sass Docs](https://sass-lang.com/) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Modern JavaScript with latest features | [MDN Docs](https://developer.mozilla.org/) |
| ![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white) | Rich text rendering for chatbot messages | [React Markdown](https://github.com/remarkjs/react-markdown) |

### Backend Technologies
| Technology | Description | Documentation |
|------------|-------------|---------------|
| ![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white) | Modern Java with latest features | [Java Docs](https://docs.oracle.com/en/java/) |
| ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white) | Enterprise-grade framework | [Spring Docs](https://spring.io/projects/spring-boot) |
| ![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white) | Dependency management and build tool | [Maven Docs](https://maven.apache.org/) |
| ![Spring Web](https://img.shields.io/badge/Spring_Web-6DB33F?style=for-the-badge&logo=spring&logoColor=white) | RESTful API development | [Spring Web Docs](https://docs.spring.io/spring-framework/docs/current/reference/html/web.html) |

### AI & External APIs
| Technology | Description | Documentation |
|------------|-------------|---------------|
| ![Google Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white) | Advanced AI language model for intelligent responses | [Gemini API Docs](https://ai.google.dev/docs) |

### Development Tools & Runtime
| Technology | Description | Documentation |
|------------|-------------|---------------|
| ![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white) | Ultra-fast JavaScript runtime & package manager | [Bun Docs](https://bun.sh/) |
| ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) | JavaScript runtime environment | [Node.js Docs](https://nodejs.org/) |
| ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) | Code quality and consistency | [ESLint Docs](https://eslint.org/) |
| ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) | Version control system | [Git Docs](https://git-scm.com/) |
| ![VS Code](https://img.shields.io/badge/VS_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) | Recommended IDE | [VS Code Docs](https://code.visualstudio.com/) |

### Key Libraries & Dependencies
| Library | Purpose | Badge |
|---------|---------|-------|
| Axios | HTTP client for API communication | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) |
| React Hooks | State management and lifecycle | ![React](https://img.shields.io/badge/Hooks-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) |
| Google Fonts | Urbanist typography | ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white) |
| CSS3 Animations | Smooth transitions and effects | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) |

</div>

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Getting Started
1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** with proper commit messages
4. **Test thoroughly** - both frontend and backend
5. **Submit a pull request**

### Contribution Guidelines
- Follow existing code style and patterns
- Add appropriate comments and documentation
- Test your changes across different screen sizes
- Update README if you add new features
- Ensure both frontend and backend work together

### Areas for Contribution
- 🎨 UI/UX improvements and new themes
- 🚀 Performance optimizations
- 🧪 Additional testing coverage
- 📱 Mobile experience enhancements
- 🔧 New features and integrations
- 📚 Documentation improvements

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **[@lord-cyclone100](https://github.com/lord-cyclone100)** - *Initial work & Frontend Development*

## 🙏 Acknowledgments

- **Spring Boot Team** - For the amazing backend framework
- **React Team** - For the powerful frontend library
- **Vite Team** - For the lightning-fast build tool
- **Open Source Community** - For continuous inspiration

## 📞 Support

Having issues? We're here to help!

- 🐛 **Bug Reports**: [Open an issue](https://github.com/lord-cyclone100/Spring-Bot/issues)
- 💡 **Feature Requests**: [Request a feature](https://github.com/lord-cyclone100/Spring-Bot/issues)
- 📖 **Documentation**: Check this README and code comments
- 💬 **Discussions**: [Start a discussion](https://github.com/lord-cyclone100/Spring-Bot/discussions)

---

<div align="center">

**Made with ❤️ and ☕ by [@lord-cyclone100](https://github.com/lord-cyclone100)**

⭐ **Star this repo if you found it helpful!** ⭐

</div>