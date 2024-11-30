import React, { useState } from 'react';
import { Mail, Plus, Edit2, Trash2, X } from 'lucide-react';
import type { Technician } from '../../customer/types';
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
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteTechnician(tech.id)}
                  className="p-2 text-gray-400 hover:text-red-400"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{tech.email}</span>
              </div>
              <div>
                <span className="text-gray-500">Specialties: </span>
                {tech.specialty.join(', ')}
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
                <X className="w-6 h-6" />
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
      specialty: [],
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
          Specialties (comma-separated)
        </label>
        <input
          type="text"
          value={formData.specialty?.join(', ')}
          onChange={(e) => setFormData({
            ...formData,
            specialty: e.target.value.split(',').map(s => s.trim())
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
