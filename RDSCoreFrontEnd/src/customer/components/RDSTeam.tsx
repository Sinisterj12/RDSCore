import React from 'react';
import { Mail } from 'lucide-react';
import { useTechnicians } from '../../shared/contexts/TechnicianContext';

const RDSTeam: React.FC = () => {
  const { technicians } = useTechnicians();

  return (
    <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">RDS Support Team</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technicians.map((tech) => (
          <div
            key={tech.id}
            className="bg-gray-50 rounded-lg p-4 border border-gray-200"
          >
            <div className="flex items-center space-x-3 mb-3">
              {tech.avatar && (
                <img
                  src={tech.avatar}
                  alt={tech.name}
                  className="w-12 h-12 rounded-full"
                />
              )}
              <div>
                <h4 className="font-semibold">{tech.name}</h4>
                <span className={`text-sm ${
                  tech.status === 'available' ? 'text-green-600' :
                  tech.status === 'busy' ? 'text-yellow-600' :
                  'text-gray-600'
                }`}>
                  {tech.status.charAt(0).toUpperCase() + tech.status.slice(1)}
                </span>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <a 
                href={`mailto:${tech.email}`} 
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
              >
                <Mail className="w-4 h-4" />
                <span>{tech.email}</span>
              </a>
              <div className="text-gray-600">
                <span className="text-gray-500">Proficiencies: </span>
                {tech.proficiencies.join(', ')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RDSTeam;