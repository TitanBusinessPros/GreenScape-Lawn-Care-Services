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

  return;












































};

export default Testimonials;