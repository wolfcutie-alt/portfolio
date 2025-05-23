import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section 
      id="contact" 
      className={`py-20 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out if you want to collaborate, have a question, 
            or just want to connect!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-6">
                I'm interested in freelance opportunities, especially ambitious or 
                large projects. However, if you have other requests or questions, 
                don't hesitate to contact me.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <MapPin className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Auckland, New Zealand</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <Mail className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="mailto:nathandoan24@gmail.com" className="hover:text-blue-500 transition-colors duration-300">
                        nathandoan24@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}>
                    <Phone className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="tel:+640212851357" className="hover:text-blue-500 transition-colors duration-300">
                        +64 021 285 1357
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 focus:border-blue-500' 
                      : 'bg-white border-gray-300 focus:border-blue-500'
                  } border outline-none transition-colors duration-300`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 focus:border-blue-500' 
                      : 'bg-white border-gray-300 focus:border-blue-500'
                  } border outline-none transition-colors duration-300`}
                  placeholder="Your email"
                />
                {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2">Subject (Optional)</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 focus:border-blue-500' 
                      : 'bg-white border-gray-300 focus:border-blue-500'
                  } border outline-none transition-colors duration-300`}
                  placeholder="Subject"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 focus:border-blue-500' 
                      : 'bg-white border-gray-300 focus:border-blue-500'
                  } border outline-none transition-colors duration-300`}
                  placeholder="Your message"
                />
                {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
              </div>
              
              <button 
                type="submit" 
                className={`px-6 py-3 bg-blue-500 text-white rounded-lg transition-colors duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-600'
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitSuccess && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;