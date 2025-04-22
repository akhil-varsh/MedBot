import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const features = [
  { title: 'Case Assistant', description: 'AI-powered clinical case analysis and recommendations' },
  { title: 'Procedure Reviewer', description: 'Step-by-step surgical procedure breakdowns' },
  { title: 'Voice Mode', description: 'Hands-free learning during procedures' },
  { title: 'Adaptive Quizzes', description: 'Personalized assessments based on your progress' },
  { title: 'EMR Sandbox', description: 'Practice with realistic electronic medical records' },
]

const testimonials = [
  {
    type: 'Student',
    quote: 'MedBot has revolutionized how I approach clinical cases. The AI assistance is invaluable.',
    author: 'Sarah Chen, Medical Student'
  },
  {
    type: 'Intern',
    quote: 'The surgical atlas feature helped me prepare thoroughly for my rotations.',
    author: 'Dr. James Wilson, First-year Resident'
  },
  {
    type: 'Surgeon',
    quote: 'An excellent tool for teaching surgical concepts to residents.',
    author: 'Dr. Emily Rodriguez, Chief of Surgery'
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="font-poetson text-2xl text-medical-600">MedBot</div>
          <div className="flex gap-6">
            <a href="#features" className="nav-link">Features</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="/dashboard" className="nav-link">Login</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero-gradient text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold mb-6">
                Smarter Clinical Learning Starts Here
              </h1>
              <p className="text-xl mb-8 font-crimson">
                Empower your medical journey with AI-driven case review, surgery breakdowns, and smart learning paths.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="btn-secondary">
                  Explore Case Simulator
                </button>
                <button className="btn-primary flex items-center gap-2">
                  Review Surgical Atlas
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16">Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl shadow-md card-hover bg-gray-50"
                >
                  <h3 className="text-xl font-semibold mb-3 text-medical-600">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-crimson">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.type}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-md card-hover"
                >
                  <p className="text-sm text-medical-600 mb-4">{testimonial.type}</p>
                  <blockquote className="text-lg mb-4 font-crimson">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="text-sm text-gray-600">{testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-poetson text-xl mb-4">MedBot</h3>
              <p className="text-gray-400 text-sm">
                Empowering the next generation of medical professionals
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="/beta" className="text-gray-400 hover:text-white">Join Beta</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}