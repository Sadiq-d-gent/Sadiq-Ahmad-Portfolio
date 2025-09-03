import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sadiqahmadelif01@gmail.com',
      link: 'mailto:sadiqahmadelif01@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+234 8132694876',
      link: 'tel:+2348132694876'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kano City, State',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: 'GitHub',
      username: '@Sadiq-d-gent',
      link: 'https://github.com/Sadiq-d-gent',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      username: '/in/sadiq-ahmad',
      link: 'https://linkedin.com/in/sadiq-ahmad',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      title: 'Twitter',
      username: '@Sadiq_ahmad_',
      link: 'https://twitter.com/Sadiq_ahmad_',
      color: 'hover:text-blue-400'
    },
    {
      icon: MessageCircle,
      title: 'Discord',
      username: 'Sadiq#1234',
      link: 'https://discord.com/users/youruserid',
      color: 'hover:text-indigo-500'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate? I'm always excited to work on innovative projects 
            and connect with fellow developers. Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-hover border-2 border-transparent hover:border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="transition-colors focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="sadiqahmadelif01@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="transition-colors focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="transition-colors focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello!"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="transition-colors focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="card-hover border-2 border-transparent hover:border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="card-hover border-2 border-transparent hover:border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Connect on Social</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-3 rounded-lg border border-border hover:border-primary/40 transition-all duration-200 hover:shadow-md ${social.color}`}
                  >
                    <div className="p-2 bg-secondary rounded-lg">
                      <social.icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">{social.title}</p>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="p-6 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-xl border border-primary/20">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold">Let's Build Something Great!</h3>
                <p className="text-muted-foreground">
                  Whether you have a project in mind or just want to chat about technology, 
                  I'm always open to new opportunities and collaborations.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild variant="outline">
                    <a href="mailto:your.email@example.com">
                      Quick Email
                    </a>
                  </Button>
                  <Button asChild>
                    <a href="https://calendly.com/yourusername" target="_blank" rel="noopener noreferrer">
                      Schedule a Call
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;