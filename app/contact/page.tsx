'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      setMessage('Please fill in all required fields')
      return
    }

    if (!formData.email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setMessage('Thank you! Your message has been sent successfully.')
        setFormData({ name: '', email: '', message: '' })
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-light">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-dark mb-6">
              Get in Touch
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
              We'd love to hear from you. Reach out to us with any questions, 
              feedback, or just to say hello.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark mb-6">
                Send us a Message
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Have a question or want to learn more about Adey Threads? 
                We're here to help and would love to hear from you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300"
                    placeholder="Your full name"
                    disabled={status === 'loading'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300"
                    placeholder="your.email@example.com"
                    disabled={status === 'loading'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                    disabled={status === 'loading'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Message */}
                {message && (
                  <div className={`flex items-center space-x-2 text-sm ${
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
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Here's how you can reach us. We typically respond within 24-48 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">Email</h3>
                    <a 
                      href="mailto:support@adeythreads.com" 
                      className="text-gray-700 hover:text-primary transition-colors duration-300"
                    >
                      support@adeythreads.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      For general inquiries and support
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">Location</h3>
                    <p className="text-gray-700">
                      Global Operations
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Serving customers worldwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">Response Time</h3>
                    <p className="text-gray-700">
                      24-48 hours
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      We aim to respond to all inquiries promptly
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-12 p-6 bg-light rounded-2xl">
                <h3 className="font-playfair font-bold text-lg text-dark mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Quick response within 24-48 hours</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Personalized assistance with your inquiries</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Updates on our upcoming collection launch</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Information about our cultural heritage and values</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-dark mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Find answers to common questions about Adey Threads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-playfair font-bold text-lg text-dark mb-3">
                When will you launch?
              </h3>
              <p className="text-gray-700">
                We're currently in development and will announce our launch date soon. 
                Join our waitlist to be the first to know!
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-playfair font-bold text-lg text-dark mb-3">
                What makes Adey Threads unique?
              </h3>
              <p className="text-gray-700">
                We blend traditional Habesha cultural heritage with modern design, 
                creating premium fashion that celebrates our rich traditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-playfair font-bold text-lg text-dark mb-3">
                Do you ship internationally?
              </h3>
              <p className="text-gray-700">
                Yes! We plan to offer worldwide shipping to share our cultural 
                heritage with people around the globe.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-playfair font-bold text-lg text-dark mb-3">
                How can I stay updated?
              </h3>
              <p className="text-gray-700">
                Join our waitlist and follow us on social media for the latest 
                updates, behind-the-scenes content, and cultural stories.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}