import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';
import RecommendationCard from '../components/RecommendationCard';
import StatCard from '../components/StatCard';
import { Menu, Bell, Search, TrendingUp, Users, Briefcase, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock data - in real app, this would come from API
  const recommendations = [
    {
      id: 1,
      title: 'Frontend Developer for E-commerce Platform',
      company: 'TechStart Inc.',
      match: 95,
      skills: ['React', 'TypeScript', 'Tailwind CSS'],
      description: 'Build a modern e-commerce platform with React and TypeScript',
      duration: '3 months',
      budget: '$2,000'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      company: 'InnovateLab',
      match: 87,
      skills: ['React Native', 'Firebase', 'JavaScript'],
      description: 'Develop a cross-platform mobile app for task management',
      duration: '2 months',
      budget: '$1,500'
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      company: 'Analytics Pro',
      match: 82,
      skills: ['D3.js', 'Python', 'SQL'],
      description: 'Create interactive dashboards for business analytics',
      duration: '1 month',
      budget: '$1,200'
    }
  ];

  const stats = [
    {
      title: 'Applications Submitted',
      value: '12',
      change: '+3 this week',
      icon: Briefcase,
      color: 'blue' as const
    },
    {
      title: 'Projects Completed',
      value: '5',
      change: '+1 this month',
      icon: CheckCircle,
      color: 'green' as const
    },
    {
      title: 'Profile Views',
      value: '48',
      change: '+12 this week',
      icon: Users,
      color: 'purple' as const
    },
    {
      title: 'Success Rate',
      value: '85%',
      change: '+5% this month',
      icon: TrendingUp,
      color: 'yellow' as const
    }
  ];

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
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search opportunities..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg">
                <Bell className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.email?.split('@')[0] || 'Developer'}! 👋
            </h2>
            <p className="text-gray-600">
              Here's what's happening with your opportunities today.
            </p>
            {!user && (
              <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-orange-800 text-sm">
                  🚀 <strong>Development Mode:</strong> You're viewing the dashboard without authentication. 
                  In production, users would need to sign in first.
                </p>
              </div>
            )}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
          </div>

          {/* AI Recommendations */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">AI Recommendations</h3>
              <span className="text-sm text-gray-500">Based on your skills and preferences</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {recommendations.map((recommendation) => (
                <RecommendationCard
                  key={recommendation.id}
                  title={recommendation.title}
                  company={recommendation.company}
                  match={recommendation.match}
                  skills={recommendation.skills}
                  description={recommendation.description}
                  duration={recommendation.duration}
                  budget={recommendation.budget}
                />
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Recent Activity</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      Application accepted for <span className="font-medium">Frontend Developer</span> at TechStart Inc.
                    </p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      New opportunity posted: <span className="font-medium">Mobile App Development</span>
                    </p>
                    <p className="text-xs text-gray-500">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      Profile viewed by <span className="font-medium">InnovateLab</span>
                    </p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
