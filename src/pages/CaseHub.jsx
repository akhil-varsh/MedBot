import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ClipboardDocumentIcon,
  BeakerIcon,
  ArrowPathIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

export default function CaseHub() {
  const [caseData, setCaseData] = useState({
    title: '',
    patientAge: '',
    patientGender: 'male',
    symptoms: '',
    vitals: {
      bloodPressure: '',
      heartRate: '',
      temperature: '',
      oxygenSaturation: '',
    },
    hypothesis: '',
  })

  const [analysis, setAnalysis] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name.includes('.')) {
      const [parent, child] = name.split('.')
      setCaseData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }))
    } else {
      setCaseData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsAnalyzing(true)
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis({
        differentialDiagnoses: [
          'Acute Coronary Syndrome',
          'Pulmonary Embolism',
          'Aortic Dissection',
        ],
        investigations: [
          'Complete Blood Count',
          'Cardiac Enzymes',
          'Chest X-ray',
          'ECG',
        ],
        surgicalRecommendations: {
          required: true,
          procedures: ['Coronary Angiography', 'Possible PCI'],
          urgency: 'Immediate',
        },
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Case Hub</h1>
        <p className="text-gray-600 font-crimson">Upload and analyze patient cases with AI assistance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Case Input Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Case Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={caseData.title}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="e.g., Acute Chest Pain Case"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Patient Age
                  </label>
                  <input
                    type="number"
                    name="patientAge"
                    value={caseData.patientAge}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Age"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Patient Gender
                  </label>
                  <select
                    name="patientGender"
                    value={caseData.patientGender}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Symptoms
                </label>
                <textarea
                  name="symptoms"
                  value={caseData.symptoms}
                  onChange={handleInputChange}
                  className="input-field h-32"
                  placeholder="Describe the patient's symptoms..."
                  required
                />
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Vitals</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Blood Pressure
                    </label>
                    <input
                      type="text"
                      name="vitals.bloodPressure"
                      value={caseData.vitals.bloodPressure}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="e.g., 120/80"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Heart Rate
                    </label>
                    <input
                      type="text"
                      name="vitals.heartRate"
                      value={caseData.vitals.heartRate}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="e.g., 72 bpm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Temperature
                    </label>
                    <input
                      type="text"
                      name="vitals.temperature"
                      value={caseData.vitals.temperature}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="e.g., 98.6°F"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      O2 Saturation
                    </label>
                    <input
                      type="text"
                      name="vitals.oxygenSaturation"
                      value={caseData.vitals.oxygenSaturation}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="e.g., 98%"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Initial Diagnosis Hypothesis
                </label>
                <textarea
                  name="hypothesis"
                  value={caseData.hypothesis}
                  onChange={handleInputChange}
                  className="input-field h-32"
                  placeholder="What do you think might be the diagnosis?"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isAnalyzing}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                {isAnalyzing ? (
                  <>
                    <ArrowPathIcon className="w-5 h-5 animate-spin" />
                    Analyzing Case...
                  </>
                ) : (
                  <>
                    <BeakerIcon className="w-5 h-5" />
                    Analyze Case
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Analysis Results */}
        <div className="space-y-6">
          {analysis && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="card">
                <div className="flex items-center gap-2 mb-4">
                  <ClipboardDocumentIcon className="w-6 h-6 text-medical-600" />
                  <h3 className="text-xl font-semibold">Differential Diagnoses</h3>
                </div>
                <ul className="space-y-2">
                  {analysis.differentialDiagnoses.map((diagnosis, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-medical-500" />
                      {diagnosis}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <div className="flex items-center gap-2 mb-4">
                  <BeakerIcon className="w-6 h-6 text-medical-600" />
                  <h3 className="text-xl font-semibold">Recommended Investigations</h3>
                </div>
                <ul className="space-y-2">
                  {analysis.investigations.map((investigation, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-medical-500" />
                      {investigation}
                    </li>
                  ))}
                </ul>
              </div>

              {analysis.surgicalRecommendations.required && (
                <div className="card border-2 border-medical-600">
                  <div className="flex items-center gap-2 mb-4">
                    <BeakerIcon className="w-6 h-6 text-medical-600" />
                    <h3 className="text-xl font-semibold">Surgical Recommendations</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-red-600 font-semibold">
                      Urgency: {analysis.surgicalRecommendations.urgency}
                    </p>
                    <ul className="space-y-2">
                      {analysis.surgicalRecommendations.procedures.map((procedure, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <CheckCircleIcon className="w-5 h-5 text-medical-500" />
                          {procedure}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}