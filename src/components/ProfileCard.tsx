import { User, Mail, MapPin, Calendar, GraduationCap } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  email: string;
  location?: string;
  course: string;
  university: string;
  year: string;
  bio: string;
  avatar?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  email,
  location,
  course,
  university,
  year,
  bio,
  avatar
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-start space-x-6">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
          {avatar ? (
            <img src={avatar} alt={name} className="w-20 h-20 rounded-full object-cover" />
          ) : (
            <User className="w-8 h-8 text-blue-600" />
          )}
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{name}</h2>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">{email}</span>
            </div>
            
            {location && (
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{location}</span>
              </div>
            )}
            
            <div className="flex items-center text-gray-600">
              <GraduationCap className="w-4 h-4 mr-2" />
              <span className="text-sm">{course} • {university}</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">{year} Year</span>
            </div>
          </div>
          
          <p className="text-gray-700 text-sm leading-relaxed">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;