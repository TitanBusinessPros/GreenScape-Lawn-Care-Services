import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

console.log('🦶 Footer component loaded')

const Footer = () => {
  const currentYear = new Date().getFullYear()
  console.log('Current year:', currentYear)

  const scrollToTop = () => {
    console.log('Scrolling to top')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    console.log('Footer - scrolling to section:', sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-2xl font-bold">GreenScape</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional lawn care and landscaping services that transform your outdoor space 
              into a beautiful, healthy environment you'll love.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Licensed & Insured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Lawn Mowing & Maintenance</li>
              <li>Fertilization Programs</li>
              <li>Weed & Pest Control</li>
              <li>Tree & Shrub Care</li>
              <li>Landscape Design</li>
              <li>Lawn Renovation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-white font-medium">(555) 123-4567</p>
                  <p className="text-sm text-gray-400">Mon-Fri, 8AM-6PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-white font-medium">info@greenscape.com</p>
                  <p className="text-sm text-gray-400">24hr response time</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Greater Metro Area</p>
                  <p className="text-sm text-gray-400">50+ service locations</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Emergency Service</p>
                  <p className="text-sm text-gray-400">Storm cleanup available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} GreenScape Lawn Care. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Back to Top
              </button>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">Privacy Policy</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer