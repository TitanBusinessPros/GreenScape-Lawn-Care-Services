import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

console.log('⭐ Testimonials component loaded');

const Testimonials = () => {
  const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Residential Customer',
    rating: 5,
    text: "GreenScape transformed our front yard completely! Their team is professional, reliable, and the results speak for themselves. Our lawn has never looked better.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Mike Chen',
    location: 'Business Owner',
    rating: 5,
    text: "We've been using GreenScape for our office complex for 3 years. Consistent quality service and great communication. Highly recommend for commercial properties.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Emily Rodriguez',
    location: 'Homeowner',
    rating: 5,
    text: "The attention to detail is incredible. They don't just mow - they truly care for your lawn. Fair pricing and excellent customer service. A+ experience!",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
  }];


  const renderStars = (rating: number) => {
    console.log(`Rendering ${rating} stars`);
    return Array.from({ length: 5 }, (_, index) =>
    <Star
      key={index}
      className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />

    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from satisfied customers who trust 
            GreenScape with their lawn care needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            console.log(`Rendering testimonial from: ${testimonial.name}`);

            return (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  










                  
                  


                  
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>);

          })}
        </div>
      </div>
    </section>);

};

export default Testimonials;