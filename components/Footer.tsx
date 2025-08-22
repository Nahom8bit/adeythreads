'use client'

import { useState } from 'react'
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react'
import EmailSignupForm from './EmailSignupForm'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (email: string) => {
    setEmail('')
    // Email submission is handled by EmailSignupForm component
  }

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-sm">AT</span>
              </div>
              <span className="font-playfair font-bold text-xl text-white">
                Adey Threads
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Premium Habesha fashion that celebrates culture, heritage, and craftsmanship. 
              Join our community and be the first to experience our exclusive collection.
            </p>
            
            {/* Email Signup */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Join Our Waitlist</h3>
              <EmailSignupForm 
                placeholder="Enter your email"
                buttonText="Subscribe"
                onSubmit={handleEmailSubmit}
                className="max-w-sm"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="/policies" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a 
                href="mailto:support@adeythreads.com" 
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Mail size={16} />
                <span>support@adeythreads.com</span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/adeythreads" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://twitter.com/adeythreads" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://facebook.com/adeythreads" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Adey Threads. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer