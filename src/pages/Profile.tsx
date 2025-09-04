import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';
import ProfileCard from '../components/ProfileCard';
import SkillTag from '../components/SkillTag';
import ProjectCard from '../components/ProjectCard';
import UploadButton from '../components/UploadButton';
import { Menu, Edit, Save, X, Plus, Github, Linkedin, Mail } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    course: 'Computer Science',
    university: 'University of Technology',
    year: 'Senior',
    bio: 'Passionate full-stack developer with experience in React, Node.js, and Python. Always eager to learn new technologies and take on challenging projects.',
    github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'AWS', 'Docker'],
    projects: [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce application built with React and Node.js',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: 'https://github.com/johndoe/ecommerce',
        demo: 'https://ecommerce-demo.com'
      },
      {
        id: 2,
        title: 'Task Management App',
        description: 'Collaborative task management tool with real-time updates',
        technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
        github: 'https://github.com/johndoe/taskapp',
        demo: 'https://taskapp-demo.com'
      }
    ]
  });

  const [newSkill, setNewSkill] = useState('');
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    technologies: '',
    github: '',
    demo: ''
  });

  const handleSave = () => {
    // In real app, this would save to database
    setIsEditing(false);
  };

  const addSkill = () => {
    if (newSkill.trim() && !profileData.skills.includes(newSkill.trim())) {
      setProfileData({
        ...profileData,
        skills: [...profileData.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setProfileData({
      ...profileData,
      skills: profileData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const addProject = () => {
    if (newProject.title.trim()) {
      const project = {
        id: Date.now(),
        title: newProject.title,
        description: newProject.description,
        technologies: newProject.technologies.split(',').map(t => t.trim()).filter(t => t),
        github: newProject.github,
        demo: newProject.demo
      };
      setProfileData({
        ...profileData,
        projects: [...profileData.projects, project]
      });
      setNewProject({ title: '', description: '', technologies: '', github: '', demo: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="lg:ml-64">
        {/* Top Bar */}
        <div className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
            </div>
            
            <div className="flex items-center space-x-2">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="max-w-4xl mx-auto">
            {/* Profile Header */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {profileData.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{profileData.name}</h2>
                  <p className="text-gray-600 mb-1">{profileData.course} • {profileData.university}</p>
                  <p className="text-gray-500 text-sm mb-4">{profileData.year} Year</p>
                  <p className="text-gray-700 mb-4">{profileData.bio}</p>
                  
                  <div className="flex items-center space-x-4">
                    <a href={profileData.github} className="flex items-center text-gray-600 hover:text-gray-900">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                    <a href={profileData.linkedin} className="flex items-center text-gray-600 hover:text-gray-900">
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </a>
                    <a href={`mailto:${user?.email}`} className="flex items-center text-gray-600 hover:text-gray-900">
                      <Mail className="w-5 h-5 mr-2" />
                      {user?.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Skills</h3>
                {isEditing && (
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Add a skill"
                      className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                      onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                    />
                    <button
                      onClick={addSkill}
                      className="p-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map((skill, index) => (
                  <SkillTag
                    key={index}
                    skill={skill}
                    removable={isEditing}
                    onRemove={() => removeSkill(skill)}
                  />
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Projects</h3>
                {isEditing && (
                  <button
                    onClick={() => {
                      // In real app, this would open a modal
                      const title = prompt('Project title:');
                      if (title) {
                        setNewProject({ ...newProject, title });
                        addProject();
                      }
                    }}
                    className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Project
                  </button>
                )}
              </div>
              <div className="space-y-4">
                {profileData.projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    github={project.github}
                    demo={project.demo}
                  />
                ))}
              </div>
            </div>

            {/* Certificates Section */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Certificates & Documents</h3>
              <div className="space-y-4">
                <UploadButton
                  title="Upload Certificate"
                  description="Add your academic or professional certificates"
                  accept=".pdf,.jpg,.png"
                />
                <UploadButton
                  title="Upload Resume"
                  description="Keep your resume updated"
                  accept=".pdf,.doc,.docx"
                />
                <UploadButton
                  title="Upload Portfolio"
                  description="Showcase your work samples"
                  accept=".pdf,.zip"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
