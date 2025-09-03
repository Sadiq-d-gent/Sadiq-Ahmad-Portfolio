import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom">
        {/* Back to Top Button */}
        <div className="py-8 border-b border-border">
          <div className="flex justify-center">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="lg"
              className="inline-flex items-center gap-2 hover:translate-y-[-2px] transition-transform"
            >
              <ArrowUp className="h-4 w-4" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold gradient-text">
                  Sadiq Ahmad
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  Frontend Developer passionate about creating innovative web solutions 
                  and building beautiful digital experiences.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="p-2 hover:scale-110 transition-transform"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Button
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  className="inline-flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Let's Work Together
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Services</h4>
              <div className="space-y-3">
                <p className="text-muted-foreground hover:text-primary transition-colors">
                  Frontend Development
                </p>
                <p className="text-muted-foreground hover:text-primary transition-colors">
                  Backend Development
                </p>
                <p className="text-muted-foreground hover:text-primary transition-colors">
                  Frontend Solutions
                </p>
                <p className="text-muted-foreground hover:text-primary transition-colors">
                  UI/UX Design
                </p>
                <p className="text-muted-foreground hover:text-primary transition-colors">
                  Technical Consulting
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© {currentYear} Sadiq Ahmad. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & TypeScript</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;