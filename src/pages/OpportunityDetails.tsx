import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { 
  Menu, 
  ArrowLeft, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Star, 
  Building,
  Calendar,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const OpportunityDetails = () => {
  const { id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);

  // Mock data - in real app, this would come from API based on id
  const opportunity = {
    id: 1,
    title: 'Frontend Developer for E-commerce Platform',
    company: 'TechStart Inc.',
    location: 'Remote',
    type: 'Part-time',
    duration: '3 months',
    budget: '$2,000',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Redux', 'Jest'],
    description: `We are looking for a talented frontend developer to help us build a modern e-commerce platform. You will work with our team to create responsive, user-friendly interfaces that provide an exceptional shopping experience.

## What you'll be doing:
- Develop responsive web applications using React and TypeScript
- Implement modern UI components with Tailwind CSS
- Work with REST APIs and integrate with backend services
- Write clean, maintainable, and well-tested code
- Collaborate with designers and backend developers
- Participate in code reviews and team meetings

## Requirements:
- Strong experience with React and TypeScript
- Proficiency in modern CSS frameworks (Tailwind CSS preferred)
- Experience with state management (Redux or similar)
- Knowledge of testing frameworks (Jest, React Testing Library)
- Understanding of responsive design principles
- Good communication skills and ability to work in a team

## Nice to have:
- Experience with e-commerce platforms
- Knowledge of performance optimization techniques
- Experience with CI/CD pipelines
- Familiarity with design systems`,
    posted: '2 days ago',
    applicants: 12,
    rating: 4.8,
    match: 95,
    companyInfo: {
      name: 'TechStart Inc.',
      description: 'A fast-growing startup focused on revolutionizing e-commerce through innovative technology solutions.',
      website: 'https://techstart.com',
      size: '10-50 employees',
      founded: '2020',
      industry: 'Technology'
    },
    requirements: [
      'Strong experience with React and TypeScript',
      'Proficiency in modern CSS frameworks',
      'Experience with state management',
      'Knowledge of testing frameworks',
      'Understanding of responsive design',
      'Good communication skills'
    ],
    benefits: [
      'Flexible working hours',
      'Remote work opportunity',
      'Competitive compensation',
      'Learning and development opportunities',
      'Collaborative team environment',
      'Portfolio building experience'
    ]
  };

  const handleApply = () => {
    setShowApplyModal(true);
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
              <Link
                to="/opportunities"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Opportunities
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{opportunity.title}</h1>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Building className="w-5 h-5 mr-2" />
                      <span className="font-medium">{opportunity.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Star className="w-5 h-5 mr-1 text-yellow-400 fill-current" />
                      <span>{opportunity.rating}</span>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {opportunity.match}% match
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleApply}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Apply Now
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <div>
                    <div className="text-sm font-medium">Location</div>
                    <div className="text-sm">{opportunity.location}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <div>
                    <div className="text-sm font-medium">Duration</div>
                    <div className="text-sm">{opportunity.duration}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="w-5 h-5 mr-2" />
                  <div>
                    <div className="text-sm font-medium">Budget</div>
                    <div className="text-sm">{opportunity.budget}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2" />
                  <div>
                    <div className="text-sm font-medium">Applicants</div>
                    <div className="text-sm">{opportunity.applicants}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {opportunity.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Description */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
                  <div className="prose prose-sm max-w-none">
                    {opportunity.description.split('\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-700 mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
                  <ul className="space-y-2">
                    {opportunity.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h2>
                  <ul className="space-y-2">
                    {opportunity.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Company Info */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">About {opportunity.companyInfo.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{opportunity.companyInfo.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Industry:</span>
                      <span className="text-gray-900">{opportunity.companyInfo.industry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Company Size:</span>
                      <span className="text-gray-900">{opportunity.companyInfo.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Founded:</span>
                      <span className="text-gray-900">{opportunity.companyInfo.founded}</span>
                    </div>
                  </div>
                  
                  <a
                    href={opportunity.companyInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 text-sm"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>

                {/* Job Details */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Posted:</span>
                      <span className="text-gray-900">{opportunity.posted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Type:</span>
                      <span className="text-gray-900">{opportunity.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Location:</span>
                      <span className="text-gray-900">{opportunity.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Duration:</span>
                      <span className="text-gray-900">{opportunity.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Budget:</span>
                      <span className="text-gray-900 font-medium">{opportunity.budget}</span>
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Apply?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    This opportunity matches {opportunity.match}% of your skills
                  </p>
                  <button
                    onClick={handleApply}
                    className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Apply for this Position
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Apply for Position</h3>
            <p className="text-gray-600 mb-6">
              Your application will be sent to {opportunity.company}. Make sure your profile is up to date.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowApplyModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // In real app, this would submit the application
                  setShowApplyModal(false);
                  alert('Application submitted successfully!');
                }}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpportunityDetails;
