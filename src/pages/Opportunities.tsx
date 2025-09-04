import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Menu, Search, Filter, MapPin, Clock, DollarSign, Users, Star } from 'lucide-react';

const Opportunities = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('relevance');

  // Mock data - in real app, this would come from API
  const opportunities = [
    {
      id: 1,
      title: 'Frontend Developer for E-commerce Platform',
      company: 'TechStart Inc.',
      location: 'Remote',
      type: 'Part-time',
      duration: '3 months',
      budget: '$2,000',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      description: 'We are looking for a talented frontend developer to help us build a modern e-commerce platform. You will work with our team to create responsive, user-friendly interfaces.',
      posted: '2 days ago',
      applicants: 12,
      rating: 4.8,
      match: 95
    },
    {
      id: 2,
      title: 'Mobile App Development',
      company: 'InnovateLab',
      location: 'San Francisco, CA',
      type: 'Full-time',
      duration: '2 months',
      budget: '$1,500',
      skills: ['React Native', 'Firebase', 'JavaScript', 'Redux'],
      description: 'Join our team to develop a cross-platform mobile app for task management. Experience with React Native and Firebase is required.',
      posted: '1 week ago',
      applicants: 8,
      rating: 4.6,
      match: 87
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      company: 'Analytics Pro',
      location: 'New York, NY',
      type: 'Contract',
      duration: '1 month',
      budget: '$1,200',
      skills: ['D3.js', 'Python', 'SQL', 'Chart.js'],
      description: 'Create interactive dashboards for business analytics. Strong experience with data visualization libraries required.',
      posted: '3 days ago',
      applicants: 15,
      rating: 4.9,
      match: 82
    },
    {
      id: 4,
      title: 'Backend API Development',
      company: 'CloudTech Solutions',
      location: 'Remote',
      type: 'Part-time',
      duration: '4 months',
      budget: '$3,000',
      skills: ['Python', 'Django', 'PostgreSQL', 'AWS'],
      description: 'Develop robust backend APIs for our cloud platform. Experience with Django and AWS services preferred.',
      posted: '5 days ago',
      applicants: 6,
      rating: 4.7,
      match: 78
    }
  ];

  const allSkills = ['React', 'TypeScript', 'Node.js', 'Python', 'JavaScript', 'Django', 'PostgreSQL', 'AWS', 'React Native', 'Firebase', 'D3.js', 'SQL', 'Tailwind CSS', 'Redux', 'Chart.js'];

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSkills = selectedSkills.length === 0 || 
                         selectedSkills.some(skill => opp.skills.includes(skill));
    
    return matchesSearch && matchesSkills;
  });

  const getMatchColor = (match: number) => {
    if (match >= 90) return 'bg-green-100 text-green-800';
    if (match >= 80) return 'bg-blue-100 text-blue-800';
    if (match >= 70) return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
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
              <h1 className="text-2xl font-bold text-gray-900">Opportunities</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search opportunities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-6">
                  <div className="flex items-center mb-4">
                    <Filter className="w-5 h-5 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                  </div>

                  {/* Skills Filter */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Skills</h4>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {allSkills.map((skill) => (
                        <label key={skill} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedSkills.includes(skill)}
                            onChange={() => toggleSkill(skill)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">{skill}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Sort By */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Sort By</h4>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="relevance">Relevance</option>
                      <option value="newest">Newest</option>
                      <option value="budget">Budget (High to Low)</option>
                      <option value="duration">Duration</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Opportunities List */}
              <div className="lg:col-span-3">
                <div className="mb-4">
                  <p className="text-gray-600">
                    Showing {filteredOpportunities.length} of {opportunities.length} opportunities
                  </p>
                </div>

                <div className="space-y-4">
                  {filteredOpportunities.map((opportunity) => (
                    <div key={opportunity.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">
                                <Link 
                                  to={`/opportunity/${opportunity.id}`}
                                  className="hover:text-blue-600 transition-colors"
                                >
                                  {opportunity.title}
                                </Link>
                              </h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMatchColor(opportunity.match)}`}>
                                {opportunity.match}% match
                              </span>
                            </div>
                            <p className="text-gray-600 mb-2">{opportunity.company}</p>
                            <p className="text-gray-700 text-sm">{opportunity.description}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{opportunity.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{opportunity.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            <span>{opportunity.budget}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            <span>{opportunity.applicants} applicants</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                            <span>{opportunity.rating}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {opportunity.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">Posted {opportunity.posted}</span>
                            <Link
                              to={`/opportunity/${opportunity.id}`}
                              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredOpportunities.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                      <Search className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No opportunities found</h3>
                    <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
