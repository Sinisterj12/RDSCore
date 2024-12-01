import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import type { Technician } from '../../../../Shared/types/technician';
import { useTechnicians } from '../../shared/contexts/TechnicianContext';

interface TeamManagerProps {}

const TeamManager: React.FC<TeamManagerProps> = () => {
  const { technicians, addTechnician, updateTechnician, deleteTechnician } = useTechnicians();
  const [isEditing, setIsEditing] = useState(false);
  const [editingTech, setEditingTech] = useState<Technician | null>(null);

  const handleSaveTechnician = (tech: Omit<Technician, 'id'>) => {
    if (editingTech) {
      updateTechnician({ ...tech, id: editingTech.id } as Technician);
    } else {
      addTechnician(tech);
    }
    setIsEditing(false);
    setEditingTech(null);
  };

  const handleDeleteTechnician = (id: string) => {
    deleteTechnician(id);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Team Management</h2>
        <button
          onClick={() => setIsEditing(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Technician</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technicians.map((tech) => (
          <div key={tech.id} className="bg-gray-800 border-2 border-gray-700 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={tech.avatar}
                  alt={tech.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-white">{tech.name}</h3>
                  <span className={`text-sm ${
                    tech.status === 'available' ? 'text-green-400' :
                    tech.status === 'busy' ? 'text-yellow-400' :
                    'text-gray-400'
                  }`}>
                    {tech.status.charAt(0).toUpperCase() + tech.status.slice(1)}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setEditingTech(tech);
                    setIsEditing(true);
                  }}
                  className="p-2 text-gray-400 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button
                  onClick={() => handleDeleteTechnician(tech.id)}
                  className="p-2 text-gray-400 hover:text-red-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{tech.email}</span>
              </div>
              <div>
                <span className="text-gray-500">Proficiencies: </span>
                {tech.proficiencies.join(', ')}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white">
                {editingTech ? 'Edit Technician' : 'Add New Technician'}
              </h3>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditingTech(null);
                }}
                className="text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <TechnicianForm
              initialData={editingTech}
              onSubmit={handleSaveTechnician}
              onCancel={() => {
                setIsEditing(false);
                setEditingTech(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

interface TechnicianFormProps {
  initialData?: Technician | null;
  onSubmit: (tech: Omit<Technician, 'id'>) => void;
  onCancel: () => void;
}

const TechnicianForm: React.FC<TechnicianFormProps> = ({
  initialData,
  onSubmit,
  onCancel
}) => {
  const [formData, setFormData] = useState<Partial<Technician>>(
    initialData || {
      name: '',
      email: '',
      status: 'available',
      proficiencies: [],
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    }
  );
  const [showAvatarInput, setShowAvatarInput] = useState(false);

  // Define a type for the status values
  const statusOptions = ['available', 'busy', 'offline'] as const;
  type Status = typeof statusOptions[number];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData as Omit<Technician, 'id'>);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Profile Picture
        </label>
        <div className="flex items-center space-x-4">
          <img
            src={formData.avatar}
            alt={formData.name || 'Profile'}
            className="w-16 h-16 rounded-full object-cover"
          />
          <button
            type="button"
            onClick={() => setShowAvatarInput(!showAvatarInput)}
            className="px-3 py-1 text-sm bg-gray-700 text-white rounded-md hover:bg-gray-600"
          >
            Change Picture
          </button>
        </div>
        {showAvatarInput && (
          <div className="mt-2">
            <input
              type="url"
              value={formData.avatar}
              onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
              placeholder="Enter image URL"
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white text-sm"
            />
            <p className="text-xs text-gray-400 mt-1">
              Enter a URL for the profile picture (e.g., https://example.com/image.jpg)
            </p>
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Status
        </label>
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value as Status })}
          className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
        >
          <option value="available">Available</option>
          <option value="busy">Busy</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Proficiencies (comma-separated)
        </label>
        <input
          type="text"
          value={formData.proficiencies?.join(', ')}
          onChange={(e) => setFormData({
            ...formData,
            proficiencies: e.target.value.split(',').map(s => s.trim())
          })}
          className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
        />
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-400 hover:text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {initialData ? 'Save Changes' : 'Add Technician'}
        </button>
      </div>
    </form>
  );
};

export default TeamManager;
