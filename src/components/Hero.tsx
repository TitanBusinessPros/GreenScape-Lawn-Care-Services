import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, CheckCircle } from 'lucide-react';

console.log('🎯 Hero component loaded');

const Hero = () => {
  const scrollToContact = () => {
    console.log('Scrolling to contact section');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const callNow = () => {
    console.log('Call button clicked');
    window.location.href = 'tel:+1234567890';
  };

  return (
    <section id="hero" className="hero-gradient text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Lawn Into a 
              <span className="block text-green-200">Green Paradise</span>
            </h1>
            <p className="text-xl mb-8 text-green-100 leading-relaxed">
              Professional lawn care services that keep your property looking pristine year-round. 
              From regular maintenance to complete landscaping solutions.
            </p>
            
                                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-primary hover:bg-green-50 font-semibold">

                Get Free Quote
              </Button>
              








            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-green-100">
              



              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5" />
                <span>Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5" />
                <span>Free Estimates</span>
              </div>
            </div>
          </div>

          <div className="lg:text-right">
                        <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop"
              alt="Beautiful well-maintained lawn and landscaping"
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto lg:mx-0" />

          </div>
        </div>
      </div>
    </section>);

};

export default Hero;