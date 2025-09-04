# Camcon - Student Opportunity Platform

A modern platform that connects talented students with real project opportunities, helping them build portfolios and gain valuable experience.

## Features

### For Students
- **Smart Profiles**: Create comprehensive profiles showcasing skills, projects, and achievements
- **AI-Powered Matching**: Get personalized opportunity recommendations based on your skills
- **Real Projects**: Access genuine project opportunities from real companies
- **Portfolio Building**: Showcase your work and track your progress
- **Skill Development**: Discover new technologies and improve existing skills

### For Employers
- **Post Opportunities**: Share project opportunities with talented students
- **Find Talent**: Discover skilled students for your projects
- **Manage Applications**: Review and manage student applications
- **Quality Assurance**: Access to vetted student profiles and portfolios

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Routing**: React Router v7
- **Authentication**: Mock Authentication (ready for backend integration)
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd camcon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   ├── ProfileCard.tsx
│   ├── SkillTag.tsx
│   ├── ProjectCard.tsx
│   ├── RecommendationCard.tsx
│   ├── StatCard.tsx
│   ├── UploadButton.tsx
│   └── ProtectedRoute.tsx
├── contexts/           # React contexts
│   └── AuthContext.tsx
├── pages/             # Page components
│   ├── LandingPage.tsx
│   ├── Login.tsx
│   ├── Signup.tsx
│   ├── Dashboard.tsx
│   ├── Profile.tsx
│   ├── Opportunities.tsx
│   ├── OpportunityDetails.tsx
│   └── EmployerDashboard.tsx
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Overview

### Landing Page
- Hero section with compelling value proposition
- Feature highlights
- Statistics and testimonials
- Call-to-action sections

### Authentication
- Student/Employer role selection
- Mock authentication system (ready for backend integration)
- Protected routes

### Student Dashboard
- AI-powered opportunity recommendations
- Quick stats and progress tracking
- Recent activity feed

### Profile Management
- Comprehensive profile creation
- Skills management with tags
- Project portfolio showcase
- Document uploads (certificates, resume)

### Opportunity Board
- Advanced filtering and search
- Detailed opportunity cards
- Match percentage indicators
- Application tracking

### Employer Dashboard
- Post and manage opportunities
- View applicant statistics
- Edit/delete posted gigs

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@camcon.com or join our Discord community.

---

Built with ❤️ for students and employers worldwide.