import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import developerHero from '@/assets/me.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section-padding min-h-screen flex items-center bg-gradient-to-br from-background via-background to-accent/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="flex flex-col space-y-6 lg:space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <p className="text-primary font-medium text-lg tracking-wide uppercase">
                Frontend Developer
              </p>
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                Building the
                <span className="gradient-text"> future </span>
                one line at a time
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Passionate Info.Tech student specializing in React, Next.js, Node.js, and TypeScript. 
                Transforming ideas into elegant, scalable solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">DSA Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">1200+</div>
                <div className="text-sm text-muted-foreground">Codeforces Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-3">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-hero-primary inline-flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-hero-secondary inline-flex items-center gap-2"
              >
                Get in Touch
                <Mail className="h-5 w-5" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <Button variant="ghost" size="sm" className="p-2" asChild>
                <a href="https://github.com/Sadiq-d-gent" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-2" asChild>
                <a href="https://linkedin.com/in/sadiq-ahmad" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="p-2" asChild>
                <a href="mailto:sadiqahmadelif01@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="inline-flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span className="text-sm">Resume</span>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="relative">
              {/* Floating background elements */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-full blur-3xl floating"></div>
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br from-primary-glow/20 to-primary/20 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
              
              {/* Main image */}
              <div className="relative z-10">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={developerHero}
                    alt="Professional developer portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative border */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-3xl opacity-20 blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;