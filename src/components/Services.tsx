import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Scissors, Droplets, Bug, TreePine, Flower, Wrench } from 'lucide-react'

console.log('🛠️ Services component loaded')

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: 'Lawn Mowing',
      description: 'Regular mowing service to keep your grass at the perfect height with clean, professional edges.',
      features: ['Weekly/Bi-weekly service', 'Edge trimming included', 'Grass clipping cleanup']
    },
    {
      icon: Droplets,
      title: 'Fertilization',
      description: 'Custom fertilization programs to promote healthy, thick, and vibrant grass growth.',
      features: ['Seasonal treatments', 'Soil analysis', 'Organic options available']
    },
    {
      icon: Bug,
      title: 'Weed & Pest Control',
      description: 'Comprehensive weed control and pest management to protect your lawn investment.',
      features: ['Pre & post-emergent', 'Targeted treatments', 'Eco-friendly solutions']
    },
    {
      icon: TreePine,
      title: 'Tree & Shrub Care',
      description: 'Professional pruning, trimming, and health maintenance for all your trees and shrubs.',
      features: ['Expert pruning', 'Disease treatment', 'Seasonal care']
    },
    {
      icon: Flower,
      title: 'Landscaping',
      description: 'Complete landscape design and installation services to enhance your property value.',
      features: ['Custom designs', 'Plant installation', 'Hardscape features']
    },
    {
      icon: Wrench,
      title: 'Lawn Renovation',
      description: 'Complete lawn restoration including aeration, overseeding, and soil improvement.',
      features: ['Core aeration', 'Overseeding', 'Soil conditioning']
    }
  ]

  return (
    <section id="services" className="py-20 service-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive lawn care and landscaping services to keep your property 
            looking its absolute best throughout every season.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            console.log(`Rendering service: ${service.title}`)
            
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services