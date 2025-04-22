import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  CameraIcon,
} from '@heroicons/react/24/outline'
import BackButton from '../components/BackButton'

export default function Profile() {
  const [user, setUser] = useState({
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@medbot.com',
    phone: '+1 (555) 123-4567',
    specialization: 'Cardiology',
    institution: 'Memorial Medical Center',
    bio: 'Board certified cardiologist with 10+ years of experience in interventional procedures and cardiac imaging. I joined MedBot to enhance my diagnostic skills and stay updated on the latest treatment protocols.',
    avatar: null,
  })

  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({ ...user })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    setUser(editForm)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditForm({ ...user })
    setIsEditing(false)
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <BackButton />
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
        <p className="text-gray-600 font-crimson">Manage your account information and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card text-center"
          >
            <div className="relative w-32 h-32 rounded-full bg-gray-200 mx-auto mb-6 overflow-hidden">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="object-cover w-full h-full" />
              ) : (
                <UserCircleIcon className="w-full h-full text-gray-400" />
              )}
              {isEditing && (
                <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer">
                  <CameraIcon className="w-10 h-10 text-white" />
                  <input type="file" className="hidden" />
                </label>
              )}
            </div>

            <h2 className="text-2xl font-semibold mb-1">{user.name}</h2>
            <p className="text-medical-600 mb-4">{user.specialization}</p>
            
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">{user.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">{user.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <BuildingOfficeIcon className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">{user.institution}</span>
              </div>
            </div>

            {!isEditing && (
              <button 
                onClick={() => setIsEditing(true)}
                className="w-full btn-secondary mt-6"
              >
                Edit Profile
              </button>
            )}
          </motion.div>
        </div>

        {/* Profile Details / Edit Form */}
        <div className="lg:col-span-2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card"
          >
            <h3 className="text-xl font-semibold mb-6">
              {isEditing ? 'Edit Profile Information' : 'Profile Information'}
            </h3>

            {isEditing ? (
              <form onSubmit={handleSave}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={editForm.name}
                        onChange={handleInputChange}
                        className="input-field"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={editForm.email}
                        onChange={handleInputChange}
                        className="input-field"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={editForm.phone}
                        onChange={handleInputChange}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Specialization
                      </label>
                      <input
                        type="text"
                        name="specialization"
                        value={editForm.specialization}
                        onChange={handleInputChange}
                        className="input-field"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Institution
                      </label>
                      <input
                        type="text"
                        name="institution"
                        value={editForm.institution}
                        onChange={handleInputChange}
                        className="input-field"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bio
                      </label>
                      <textarea
                        name="bio"
                        value={editForm.bio}
                        onChange={handleInputChange}
                        rows={4}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="btn-primary flex-1"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="btn-secondary flex-1"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">
                    Biography
                  </h4>
                  <p className="text-gray-700">
                    {user.bio}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">
                    Platform Statistics
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500">Cases Analyzed</p>
                      <p className="text-xl font-semibold">237</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500">Procedures Reviewed</p>
                      <p className="text-xl font-semibold">42</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">
                    Certifications
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <AcademicCapIcon className="w-6 h-6 text-medical-500" />
                      <div>
                        <p className="font-medium">Board Certified - Cardiology</p>
                        <p className="text-sm text-gray-500">American Board of Internal Medicine</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <AcademicCapIcon className="w-6 h-6 text-medical-500" />
                      <div>
                        <p className="font-medium">Advanced Cardiac Life Support (ACLS)</p>
                        <p className="text-sm text-gray-500">American Heart Association</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {!isEditing && (
            <div className="mt-6 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-4">Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-gray-500">Receive updates on new features and cases</p>
                    </div>
                    <label className="relative inline-flex items-center">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-medical-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-500">Add an extra layer of security</p>
                    </div>
                    <label className="relative inline-flex items-center">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-medical-600"></div>
                    </label>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}