
import { Link } from 'react-router-dom';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="w-full py-12 px-8 bg-gray-900 text-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-2xl text-orange-400 mb-4">Camcon</h3>
          <p className="text-gray-300 mb-4">
            Turn student skills into real opportunities. Connect talented students with meaningful projects.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-orange-400">For Students</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/opportunities" className="hover:text-white transition-colors">Find Opportunities</Link></li>
            <li><Link to="/profile" className="hover:text-white transition-colors">Build Profile</Link></li>
            <li><Link to="/dashboard" className="hover:text-white transition-colors">Get Recommendations</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-orange-400">For Employers</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/employer" className="hover:text-white transition-colors">Post Opportunities</Link></li>
            <li><Link to="/opportunities" className="hover:text-white transition-colors">Find Talent</Link></li>
            <li><Link to="/employer" className="hover:text-white transition-colors">Manage Applications</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-orange-400">Contact</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>contact@camcon.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Camcon. All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
    </div>
  </footer>
);

export default Footer;
