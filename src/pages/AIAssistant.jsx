import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  PaperAirplaneIcon,
  UserCircleIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline'

const initialMessages = [
  {
    id: 1,
    type: 'assistant',
    content: 'Hello! I\'m your medical AI assistant. How can I help you today?',
  },
  {
    id: 2,
    type: 'user',
    content: 'Can you explain the steps of a laparoscopic appendectomy?',
  },
  {
    id: 3,
    type: 'assistant',
    content: 'A laparoscopic appendectomy involves several key steps:\n\n1. Patient positioning and port placement\n2. Identification of the appendix\n3. Mesoappendix dissection\n4. Base ligation\n5. Appendix removal\n6. Inspection and irrigation\n\nWould you like me to explain any of these steps in more detail?',
  },
]

export default function AIAssistant() {
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: newMessage,
    }

    setMessages([...messages, userMessage])
    setNewMessage('')

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'assistant',
        content: 'I understand your question. Let me analyze that and provide a detailed response...',
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Assistant</h1>
        <p className="text-gray-600 font-crimson">Your personal medical knowledge companion</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2 card min-h-[600px] flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${
                  message.type === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                {message.type === 'user' ? (
                  <UserCircleIcon className="w-8 h-8 text-medical-600" />
                ) : (
                  <ComputerDesktopIcon className="w-8 h-8 text-medical-600" />
                )}
                <div
                  className={`rounded-lg p-4 max-w-[80%] ${
                    message.type === 'user'
                      ? 'bg-medical-600 text-white'
                      : 'bg-gray-100'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Ask a medical question..."
              className="input-field flex-1"
            />
            <button
              type="submit"
              className="btn-primary px-4 flex items-center gap-2"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
              Send
            </button>
          </form>
        </div>

        {/* Quick Access Panel */}
        <div className="space-y-6">
          <div className="card">
            <h3 className="font-semibold mb-4">Quick Topics</h3>
            <div className="space-y-2">
              {['Anatomy', 'Procedures', 'Medications', 'Lab Values'].map((topic) => (
                <button
                  key={topic}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-4">Recent Conversations</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                <p className="font-medium">Appendectomy Procedure</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
              <div className="p-3 rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                <p className="font-medium">ECG Interpretation</p>
                <p className="text-sm text-gray-500">Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}