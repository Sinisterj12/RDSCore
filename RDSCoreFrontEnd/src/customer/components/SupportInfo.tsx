import React from 'react';
import { Phone, Mail } from 'lucide-react';

interface SupportInfoProps {
  phone: string;
  email: string;
}

const SupportInfo: React.FC<SupportInfoProps> = ({ phone, email }) => {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-blue-900 mb-4">Tech Support Contact</h2>
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-blue-600" />
          <a href={`tel:${phone}`} className="text-blue-700 hover:text-blue-800">
            {phone}
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-blue-600" />
          <a href={`mailto:${email}`} className="text-blue-700 hover:text-blue-800">
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SupportInfo;