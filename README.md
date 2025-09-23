# Janardhan Reddy - Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing my skills, projects, and educational background. Features a sleek dark theme with smooth animations and mobile-first responsive design.

## 🚀 Live Demo

**[Visit Live Site](https://kokatam.vercel.app/)**

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-19.1.1-61dafb?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646cff?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-ffd600?style=for-the-badge&logo=javascript&logoColor=black)
![React Icons](https://img.shields.io/badge/React_Icons-5.5.0-f24e1e?style=for-the-badge&logo=react&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide_React-0.544.0-ff6b6b?style=for-the-badge&logo=lucide&logoColor=white)

## ✨ Features

- **Responsive Design**: Mobile-first approach with smooth breakpoints
- **Modern UI**: Dark theme with glassmorphism effects
- **Smooth Animations**: CSS transitions and hover effects
- **Interactive Navigation**: Sticky navbar with mobile hamburger menu
- **Project Showcase**: Detailed project cards with live links and GitHub repos
- **Skills Grid**: Interactive technical skills display
- **Timeline Education**: Clean education timeline with achievements
- **Social Links**: Direct links to GitHub, LinkedIn, Twitter, and email
- **Resume Download**: One-click resume download functionality
- **Oneko Cat**: Interactive animated cat (optional feature)

## 📁 Project Structure

```
frontend/
├── public/
│   ├── scripts/
│   │   └── oneko.js          # Interactive cat animation script
│   ├── oneko.gif             # Cat animation assets
│   └── thunderball.ico       # Favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Responsive navigation with mobile menu
│   │   ├── Footer.jsx        # Site footer with copyright
│   │   └── ProjectCard.jsx   # Reusable project display component
│   ├── sections/
│   │   ├── Hero.jsx          # Landing section with profile & social links
│   │   ├── Skills.jsx        # Technical skills grid
│   │   ├── Projects.jsx      # Featured projects showcase
│   │   └── Education.jsx     # Education timeline
│   ├── assets/
│   │   ├── profile.jpg       # Profile picture
│   │   ├── Janardhan Reddy.pdf # Resume file
│   │   └── [project-images]/ # Project screenshots
│   ├── App.jsx               # Main app component with layout
│   ├── main.jsx              # React entry point
│   └── index.css             # TailwindCSS imports
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Customization

### Personal Information
Update the following files with your information:

- **Hero Section**: `src/sections/Hero.jsx`
  - Profile image path
  - Name and title
  - Bio text
  - Social media links
  - Resume file path

- **Projects**: `src/sections/Projects.jsx`
  - Project data array
  - Project images in `src/assets/`

- **Skills**: `src/sections/Skills.jsx`
  - Skills array with icons and colors

- **Education**: `src/sections/Education.jsx`
  - Education timeline data

### Styling
- **Colors**: Modify TailwindCSS classes throughout components
- **Typography**: Update font families in component classes
- **Layout**: Adjust grid systems and spacing utilities

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set build command: `npm run build`
   - Set output directory: `dist`
   - Deploy!

3. **Custom Domain** (Optional)
   - Add your domain in Vercel dashboard
   - Update DNS settings as instructed

### Other Platforms

**Netlify:**
```bash
npm run build
# Upload dist/ folder to Netlify
```

**GitHub Pages:**
```bash
npm run build
# Deploy dist/ folder using GitHub Actions
```

## 📱 Mobile Responsiveness

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 768px (md)
- **Desktop**: > 768px (lg)

Key responsive features:
- Mobile hamburger navigation
- Stacked layouts on small screens
- Optimized image sizes
- Touch-friendly buttons and links

## 🔧 Configuration Files

- **vite.config.js**: Vite bundler configuration
- **tailwind.config.js**: TailwindCSS customization
- **eslint.config.js**: Code linting rules
- **package.json**: Project metadata and dependencies

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Contact

**Janardhan Reddy**
- GitHub: [@janardhan-2003](https://github.com/janardhan-2003)
- LinkedIn: [kokatam-janardhan-reddy](https://www.linkedin.com/in/kokatam-janardhan-reddy)
- Twitter: [@Jana_kokatam9](https://x.com/Jana_kokatam9)
- Email: jrkokatam.09@gmail.com

---

⭐ **Star this repository if you found it helpful!**