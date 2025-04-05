import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GithubIcon, LinkedinIcon, MailIcon, SendIcon } from 'lucide-react';

function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thanks for your message! This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="mb-16 pt-4 relative" id="contact">
      {/* Background blob effect */}
      <div className="blob-effect w-96 h-96 opacity-20 left-[15%] top-[10%]"></div>
      
      <div className="section-container">
        <div className="mb-8 relative z-10">
          <h2 className="section-title">Contact Me</h2>
          <p className="text-muted-foreground dark:text-gray-300 transition-colors duration-300">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <Card className="glassmorphism p-6 md:p-8 shadow-lg border-0 relative before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-primary/40 before:to-blue-600/40 dark:before:from-blue-400/40 dark:before:to-primary-foreground/40 before:rounded-lg before:-z-10">
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-primary-foreground">
              Get In Touch
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 text-primary dark:text-blue-400" />
                <a href="mailto:albertobuenolamana@gmail.com" className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300 animated-underline">
                  albertobuenolamana@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <LinkedinIcon className="h-5 w-5 text-primary dark:text-blue-400" />
                <a href="https://linkedin.com/in/alberto-bueno-6b0344185/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300 animated-underline">
                  /in/alberto-bueno-6b0344185/
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <GithubIcon className="h-5 w-5 text-primary dark:text-blue-400" />
                <a href="https://github.com/albertobuenolamana" target="_blank" rel="noopener noreferrer" className="text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300 animated-underline">
                  github.com/albertobuenolamana
                </a>
              </div>
            </div>
          </Card>
          
          <Card className="glassmorphism p-6 md:p-8 shadow-lg border-0 relative before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-blue-600/40 before:to-purple-600/40 dark:before:from-blue-400/40 dark:before:to-purple-400/40 before:rounded-lg before:-z-10">
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-primary/20 focus:border-primary/50 dark:border-blue-400/30 dark:focus:border-blue-400/60 bg-transparent"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-primary/20 focus:border-primary/50 dark:border-blue-400/30 dark:focus:border-blue-400/60 bg-transparent"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] border-primary/20 focus:border-primary/50 dark:border-blue-400/30 dark:focus:border-blue-400/60 bg-transparent"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 hover:shadow-md hover:shadow-blue-600/20 dark:hover:shadow-blue-500/20 transform hover:scale-[1.02] transition-all duration-200"
              >
                <SendIcon className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Contact; 