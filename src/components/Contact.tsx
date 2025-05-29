import React, { useState, FormEvent, useEffect } from 'react';
import ComicPanel from './ComicPanel';
import SpeechBubble from './SpeechBubble';
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init('WLsGw6u5xkDBazIXW');//==>public_key
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_abo', //==>service_id
        'template_eraajwb',//==>template_id
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'yousifhassan4247@gmail.com'
        }
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ComicPanel className="inline-block bg-purple-600 border-black border-4 transform -rotate-1 py-2 px-8 shadow-lg">
            <h2 className="text-4xl font-bold uppercase text-blue-900">Get In Touch</h2>
          </ComicPanel>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <ComicPanel className="bg-white p-6 h-full">
            <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none focus:border-blue-600"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none focus:border-blue-600"
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-bold mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none focus:border-blue-600"
                  placeholder="Message subject"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-bold mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none focus:border-blue-600"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`bg-orange-700 text-white  py-3 px-8 border-2 border-black transition-transform duration-200 hover:bg-orange-400 transform hover:scale-105 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </ComicPanel>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <SpeechBubble type="speech" position="left" className="bg-yellow-50">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Our Studio</h3>
                  <p className="text-gray-700">
                    Baghdad, Karrada
                  </p>
                </div>
              </div>
            </SpeechBubble>
            
            <SpeechBubble type="speech" position="left" className="bg-blue-50">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Email Us</h3>
                  <p className="text-gray-700">
                    <a href="mailto:yousifhassan4247@gmail.com" className="hover:underline">setton1@gmail.com</a>
                  </p>
                </div>
              </div>
            </SpeechBubble>
            
            <SpeechBubble type="speech" position="left" className="bg-green-50">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-gray-800 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Call Us</h3>
                  <p className="text-gray-700">
                    <a href="tel:+1234567890" className="hover:underline">+964775342678</a><br />
                    Monday - Friday, 9am - 5pm EST
                  </p>
                </div>
              </div>
            </SpeechBubble>
            
            <ComicPanel className="bg-purple-100 p-4">
              <h3 className="text-xl font-bold mb-2">Follow Our Social Media</h3>
              <p className="text-gray-700 mb-4">
                Stay up to date with our latest releases, behind-the-scenes content, and creator spotlights!
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                {/* <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a> */}
                <a href="#" className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </ComicPanel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;