import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

console.log('📞 Contact component loaded');

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(`Form field updated: ${name} = ${value}`);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    info: '(555) 123-4567',
    subtext: 'Mon-Fri, 8AM-6PM'
  },
  {
    icon: Mail,
    title: 'Email Us',
    info: 'info@greenscape.com',
    subtext: 'We reply within 24hrs'
  },
  {
    icon: MapPin,
    title: 'Service Area',
    info: 'Greater Metro Area',
    subtext: '50+ neighborhoods'
  },
  {
    icon: Clock,
    title: 'Free Estimates',
    info: 'Schedule Today',
    subtext: 'No obligation'
  }];


  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Estimate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your lawn? Contact us today for a free, no-obligation estimate. 
            We'll assess your property and provide a customized service plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            

























































































          </Card>

          {/* Contact Information */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                console.log(`Rendering contact info: ${item.title}`);

                return (
                  <Card key={index} className="text-center hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-lg text-primary font-medium">{item.info}</p>
                      <p className="text-sm text-gray-600">{item.subtext}</p>
                    </CardContent>
                  </Card>);

              })}
            </div>

            <Card className="bg-primary text-white">
              














            </Card>
          </div>
        </div>
      </div>
    </section>);

};

export default Contact;