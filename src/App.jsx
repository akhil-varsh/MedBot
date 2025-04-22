import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import CaseHub from './pages/CaseHub'
import SurgicalLibrary from './pages/SurgicalLibrary'
import AIAssistant from './pages/AIAssistant'
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/case-hub" element={<CaseHub />} />
        <Route path="/surgical-library" element={<SurgicalLibrary />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App