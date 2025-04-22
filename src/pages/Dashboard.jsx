import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  HomeIcon,
  BookOpenIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  BellIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

const specialties = ['Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Internal Medicine']

export default function Dashboard() {
  const [activeSpecialty, setActiveSpecialty] = useState('Cardiology')

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="font-poetson text-2xl text-medical-600 mb-8">MedBot</h1>
          <nav className="space-y-2">
            <Link to="/dashboard" className="flex items-center space-x-3 p-3 rounded-lg bg-medical-50 text-medical-600">
              <HomeIcon className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/case-hub" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
              <BookOpenIcon className="w-5 h-5" />
              <span>Case Hub</span>
            </Link>
            <Link to="/surgical-library" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
              <BeakerIcon className="w-5 h-5" />
              <span>Surgical Library</span>
            </Link>
            <Link to="/ai-assistant" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              <span>AI Assistant</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
              <UserCircleIcon className="w-5 h-5" />
              <span>Profile</span>
            </Link>
          </nav>
        </div>
      </aside>

      <div className="flex-1">
        {/* Top Bar */}
        <header className="bg-white shadow-sm h-16 flex items-center px-6">
          <div className="flex-1 flex items-center">
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search cases..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-medical-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative">
              <BellIcon className="w-6 h-6 text-gray-600" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Specialty Tabs */}
          <div className="flex space-x-2 mb-6">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setActiveSpecialty(specialty)}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  activeSpecialty === specialty
                    ? 'bg-medical-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>

          {/* Active Case */}
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h2 className="text-2xl font-semibold mb-4">Active Case: Patient #12345</h2>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-sm text-gray-500 mb-1">Blood Pressure</h3>
                    <p className="text-xl font-semibold">120/80 mmHg</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-sm text-gray-500 mb-1">Heart Rate</h3>
                    <p className="text-xl font-semibold">72 bpm</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-sm text-gray-500 mb-1">Temperature</h3>
                    <p className="text-xl font-semibold">98.6°F</p>
                  </div>
                </div>
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold mb-2">Case Summary</h3>
                  <p className="text-gray-600 font-crimson">
                    45-year-old male presenting with chest pain and shortness of breath for the past 2 hours.
                    History of hypertension and diabetes. ECG shows ST-segment elevation in leads V1-V4.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* AI Assistant Panel */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">AI Assistant</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">What's your diagnosis for this case?</p>
                </div>
                <div className="bg-medical-50 rounded-lg p-4">
                  <p className="text-sm text-medical-700">
                    Based on the symptoms and ECG findings, this appears to be an acute ST-elevation myocardial infarction (STEMI).
                    Immediate cardiac catheterization should be considered.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Ask a question..."
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-medical-500"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}