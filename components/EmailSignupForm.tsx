'use client'

import { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

interface EmailSignupFormProps {
  placeholder?: string
  buttonText?: string
  onSubmit?: (email: string) => void
  className?: string
}

const EmailSignupForm = ({ 
  placeholder = "Enter your email", 
  buttonText = "Join Waitlist",
  onSubmit,
  className = ""
}: EmailSignupFormProps) => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setMessage('Thank you! You\'ve been added to our waitlist.')
        setEmail('')
        onSubmit?.(email)
      } else {
        const error = await response.json()
        setStatus('error')
        setMessage(error.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please check your connection and try again.')
    }
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300"
            disabled={status === 'loading'}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Joining...' : buttonText}
        </button>
      </form>

      {/* Status Message */}
      {message && (
        <div className={`mt-3 flex items-center space-x-2 text-sm ${
          status === 'success' ? 'text-green-600' : 'text-red-600'
        }`}>
          {status === 'success' ? (
            <CheckCircle size={16} />
          ) : (
            <AlertCircle size={16} />
          )}
          <span>{message}</span>
        </div>
      )}
    </div>
  )
}

export default EmailSignupForm