import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { 
  Menu, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Users, 
  Calendar, 
  DollarSign,
  MapPin,
  Clock,
  Star
} from 'lucide-react';

const EmployerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showGigForm, setShowGigForm] = useState(false);
  const [editingGig, setEditingGig] = useState(null);

  // Mock data - in real app, this would come from API
  const postedGigs = [
    {
      id: 1,
      title: 'Frontend Developer for E-commerce Platform',
      description: 'Looking for a talented frontend developer to help build our e-commerce platform...',
      skills: ['React', 'TypeScript', 'Tailwind CSS'],
      budget: '$2,000',
      duration: '3 months',
      location: 'Remote',
      applicants: 12,
      status: 'active',
      posted: '2 days ago',
      views: 45
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Need a React Native developer for our task management app...',
      skills: ['React Native', 'Firebase', 'JavaScript'],
      budget: '$1,500',
      duration: '2 months',
      location: 'San Francisco, CA',
      applicants: 8,
      status: 'active',
      posted: '1 week ago',
      views: 32
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'Create interactive dashboards for business analytics...',
      skills: ['D3.js', 'Python', 'SQL'],
      budget: '$1,200',
      duration: '1 month',
      location: 'New York, NY',
      applicants: 15,
      status: 'closed',
      posted: '2 weeks ago',
      views: 67
    }
  ];

  const [gigForm, setGigForm] = useState({
    title: '',
    description: '',
    skills: '',
    budget: '',
    duration: '',
    location: '',
    type: 'part-time'
  });

  const handleSubmitGig = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, this would save to database
    console.log('Gig submitted:', gigForm);
    setShowGigForm(false);
    setGigForm({
      title: '',
      description: '',
      skills: '',
      budget: '',
      duration: '',
      location: '',
      type: 'part-time'
    });
  };

  const handleEditGig = (gig: any) => {
    setEditingGig(gig);
    setGigForm({
      title: gig.title,
      description: gig.description,
      skills: gig.skills.join(', '),
      budget: gig.budget,
      duration: gig.duration,
      location: gig.location,
      type: 'part-time'
    });
    setShowGigForm(true);
  };

  const handleDeleteGig = (gigId: number) => {
    if (confirm('Are you sure you want to delete this gig?')) {
      // In real app, this would delete from database
      console.log('Gig deleted:', gigId);
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
              <h1 className="text-2xl font-bold text-gray-900">Employer Dashboard</h1>
            </div>
            
            <button
              onClick={() => setShowGigForm(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              Post New Gig
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="max-w-6xl mx-auto">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Gigs</p>
                    <p className="text-2xl font-bold text-gray-900">{postedGigs.length}</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Applicants</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {postedGigs.reduce((sum, gig) => sum + gig.applicants, 0)}
                    </p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Gigs</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {postedGigs.filter(gig => gig.status === 'active').length}
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Eye className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Views</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {postedGigs.reduce((sum, gig) => sum + gig.views, 0)}
                    </p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Star className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Posted Gigs */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">Your Posted Gigs</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {postedGigs.map((gig) => (
                  <div key={gig.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{gig.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            gig.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {gig.status}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{gig.description}</p>
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{gig.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{gig.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            <span>{gig.budget}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            <span>{gig.applicants} applicants</span>
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            <span>{gig.views} views</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {gig.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        <button
                          onClick={() => handleEditGig(gig)}
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteGig(gig.id)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gig Form Modal */}
      {showGigForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">
                {editingGig ? 'Edit Gig' : 'Post New Gig'}
              </h3>
            </div>
            
            <form onSubmit={handleSubmitGig} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  required
                  value={gigForm.title}
                  onChange={(e) => setGigForm({ ...gigForm, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Frontend Developer"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  required
                  rows={4}
                  value={gigForm.description}
                  onChange={(e) => setGigForm({ ...gigForm, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe the role, responsibilities, and requirements..."
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Required Skills
                  </label>
                  <input
                    type="text"
                    required
                    value={gigForm.skills}
                    onChange={(e) => setGigForm({ ...gigForm, skills: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., React, TypeScript, Node.js"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget
                  </label>
                  <input
                    type="text"
                    required
                    value={gigForm.budget}
                    onChange={(e) => setGigForm({ ...gigForm, budget: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., $2,000"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <input
                    type="text"
                    required
                    value={gigForm.duration}
                    onChange={(e) => setGigForm({ ...gigForm, duration: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 3 months"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    required
                    value={gigForm.location}
                    onChange={(e) => setGigForm({ ...gigForm, location: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Remote, San Francisco, CA"
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowGigForm(false);
                    setEditingGig(null);
                    setGigForm({
                      title: '',
                      description: '',
                      skills: '',
                      budget: '',
                      duration: '',
                      location: '',
                      type: 'part-time'
                    });
                  }}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  {editingGig ? 'Update Gig' : 'Post Gig'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployerDashboard;
