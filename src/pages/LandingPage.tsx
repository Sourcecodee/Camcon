import { Link } from 'react-router-dom';
import { Lock, Bot, DollarSign, Handshake, Star, BarChart3, Network, FileText, Clock, Target, Hexagon, Database, Brain, Globe, Atom, Circle, Package, Gem } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold text-orange-600 mb-6">
            Bridge the Experience Gap
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Move beyond traditional hiring barriers. Camcon helps students demonstrate real capabilities through blockchain-verified skills, flexible scheduling, and performance-based reputation building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
            >
              Start Building Your Portfolio
            </Link>
            <Link 
              to="/opportunities" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Explore Opportunities
            </Link>
            <Link 
              to="/dashboard" 
              className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-gray-700 font-semibold rounded-lg hover:bg-yellow-500 transition-colors text-sm"
            >
              <Network className="w-4 h-4 mr-2" />
              Access Dashboard (Dev)
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Student Opportunity Gap
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Traditional hiring practices often overlook student talent due to experience requirements, scheduling constraints, and limited ways to demonstrate real capabilities. Meanwhile, universities are filled with innovative minds ready to contribute meaningful work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Experience Requirements</h3>
              <p className="text-gray-600">
                Many opportunities require 2-3 years of experience, creating a catch-22 for talented students ready to contribute.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scheduling Assumptions</h3>
              <p className="text-gray-600">
                Concerns about student availability and competing priorities often overshadow their flexibility and dedication.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skill Demonstration</h3>
              <p className="text-gray-600">
                Limited ways to showcase real capabilities beyond traditional resumes and academic transcripts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Solutions That Work
            </h2>
            <p className="text-xl text-gray-600">
              Practical tools to demonstrate capability and build professional credibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Row 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Verified Skills Portfolio</h3>
              <p className="text-gray-600">
                Blockchain-certified proof of your technical abilities and project contributions that goes beyond traditional credentials.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Opportunity Matching</h3>
              <p className="text-gray-600">
                AI-powered matching based on demonstrated skills and availability, connecting you with the right opportunities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Fair Payment</h3>
              <p className="text-gray-600">
                Smart contract escrow ensures timely, fair compensation for your work with built-in protection.
              </p>
            </div>

            {/* Row 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Collaboration</h3>
              <p className="text-gray-600">
                Work with companies that understand student schedules and value your unique perspective and fresh ideas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance-Based Reputation</h3>
              <p className="text-gray-600">
                Build a reputation based on actual project outcomes and client satisfaction, not just years of experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Portable Professional Profile</h3>
              <p className="text-gray-600">
                Your verified skills and achievements follow you throughout your career, creating lasting professional value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built on Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-600">
              Leveraging blockchain, AI, and web3 for transparent skill verification
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Hexagon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-900">Polygon</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="font-semibold text-gray-900">Ceramic</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">OpenAI</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">Web3.js</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">React</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Circle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-900">Node.js</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-orange-300" />
              </div>
              <h3 className="font-semibold text-gray-900">IPFS</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Gem className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-900">Solidity</h3>
            </div>
          </div>
      </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Breaking Through Barriers
            </h2>
            <p className="text-xl text-gray-600">
              Students proving capabilities despite traditional hiring constraints
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-700 font-semibold">MJ</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Maria, Computer Science</h3>
                  <p className="text-gray-600 text-sm">Junior at UC Berkeley</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Every application asked for 2+ years experience I didn't have. Through Camcon's skill verification, I demonstrated my React expertise with real projects and landed a flexible $25/hour remote role that works with my class schedule."
              </p>
              <div className="flex justify-between items-center">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">React Certified</span>
                <span className="text-gray-600 font-medium">$1,200 earned</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-700 font-semibold">DL</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">David, Graphic Design</h3>
                  <p className="text-gray-600 text-sm">Sophomore at RISD</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Companies worried about my availability during finals and breaks. My Camcon profile showed consistent delivery and client satisfaction ratings. Now I work with Fortune 500 companies who trust my reliability."
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">4.9★ Rating</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">98% On-time</span>
      </div>
      </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-700 font-semibold">SP</span>
      </div>
      <div>
                  <h3 className="font-bold text-gray-900">Sophia, Data Science</h3>
                  <p className="text-gray-600 text-sm">Senior at MIT</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Job postings wanted 3-5 years experience for 'entry-level' positions. Camcon's AI matching found opportunities focused on skill demonstration rather than years. I secured a full-time offer based on verified project outcomes."
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">AI Matched 94%</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Offer Secured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Your Skills Deserve Recognition
          </h2>
          <p className="text-xl mb-8">
            Don't let experience requirements limit your potential. Join students who are building careers based on demonstrated capability and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Demonstrating Skills
            </Link>
            <Link 
              to="/opportunities" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              See Success Stories
            </Link>
      </div>
      </div>
      </section>
  </div>
);
};

export default LandingPage;
