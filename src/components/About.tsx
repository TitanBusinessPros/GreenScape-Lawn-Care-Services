import React from 'react';
import { Button } from '@/components/ui/button';
import { Award, Users, Clock, MapPin } from 'lucide-react';

console.log('📖 About component loaded');

const About = () => {
  const stats = [
  { icon: Users, number: '500+', label: 'Happy Customers' },
  { icon: Clock, number: '10+', label: 'Years Experience' },
  { icon: Award, number: '100%', label: 'Satisfaction Rate' },
  { icon: MapPin, number: '50+', label: 'Service Areas' }];


  const scrollToContact = () => {
    console.log('About section - scrolling to contact');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop"
              alt="Professional lawn care team at work"
              className="rounded-2xl shadow-lg w-full" />

          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose GreenScape?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over a decade of experience in professional lawn care, we've built our reputation 
              on delivering exceptional results and outstanding customer service. Our team of certified 
              professionals uses the latest equipment and proven techniques to ensure your lawn stays 
              healthy and beautiful year-round.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                console.log(`Rendering stat: ${stat.label}`);

                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>);

              })}
            </div>

            <div className="space-y-4 mb-8">
              



              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600"><strong>Professional Equipment:</strong> Latest tools for superior results</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600"><strong>Satisfaction Guarantee:</strong> We stand behind our work</p>
              </div>
            </div>

            <Button onClick={scrollToContact} size="lg">
              Get Your Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default About;