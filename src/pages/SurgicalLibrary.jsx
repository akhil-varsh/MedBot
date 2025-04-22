import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MagnifyingGlassIcon,
  BookmarkIcon,
  ClockIcon,
  StarIcon,
} from '@heroicons/react/24/outline'

const procedures = [
  {
    id: 1,
    title: 'Laparoscopic Cholecystectomy',
    specialty: 'General Surgery',
    difficulty: 'Intermediate',
    duration: '1-2 hours',
    rating: 4.8,
    views: 1234,
  },
  {
    id: 2,
    title: 'Total Hip Arthroplasty',
    specialty: 'Orthopedics',
    difficulty: 'Advanced',
    duration: '2-3 hours',
    rating: 4.9,
    views: 2156,
  },
  {
    id: 3,
    title: 'Coronary Artery Bypass',
    specialty: 'Cardiothoracic',
    difficulty: 'Expert',
    duration: '4-6 hours',
    rating: 4.7,
    views: 1876,
  },
]

export default function SurgicalLibrary() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('All')

  const specialties = ['All', 'General Surgery', 'Orthopedics', 'Cardiothoracic', 'Neurosurgery']

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Surgical Library</h1>
        <p className="text-gray-600 font-crimson">Explore detailed surgical procedures and techniques</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters */}
        <div className="lg:w-64 space-y-6">
          <div className="relative">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search procedures..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>

          <div className="card">
            <h3 className="font-semibold mb-4">Specialties</h3>
            <div className="space-y-2">
              {specialties.map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedSpecialty === specialty
                      ? 'bg-medical-50 text-medical-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Procedures Grid */}
        <div className="flex-1">
          <div className="grid md:grid-cols-2 gap-6">
            {procedures.map((procedure) => (
              <motion.div
                key={procedure.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card card-hover"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-medical-600">{procedure.title}</h3>
                  <BookmarkIcon className="w-6 h-6 text-gray-400 hover:text-medical-600 cursor-pointer" />
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600">{procedure.specialty}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      {procedure.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4" />
                      {procedure.rating}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">{procedure.views} views</span>
                    <button className="btn-secondary text-sm px-4 py-2">View Details</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}