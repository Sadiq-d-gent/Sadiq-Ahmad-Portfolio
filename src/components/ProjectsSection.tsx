import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import projectDashboard from '@/assets/project-dashboard.jpg';
import projectGurukul from '@/assets/project-gurukul.jpg';
import projectSocialPedia from '@/assets/project-socialpedia.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'GuruKul',
      description: 'A comprehensive e-learning platform featuring course management, interactive learning modules, and progress tracking. Built with modern web technologies for optimal user experience.',
      image: projectGurukul,
      technologies: ['React', 'Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/gurukul',
      live: 'https://github.com/Sadiq-d-gent',
      featured: true
    },
    {
      title: 'SocialPedia',
      description: 'A modern social networking platform with real-time messaging, post sharing, and user interactions. Features responsive design and optimized performance.',
      image: projectSocialPedia,
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      github: 'https://github.com/yourusername/socialpedia',
      live: 'https://snr-elder.vercel.app/',
      featured: true
    },
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive data visualization dashboard with real-time analytics, interactive charts, and customizable reports for business intelligence.',
      image: projectDashboard,
      technologies: ['React', 'TypeScript', 'Chart.js', 'Prisma', 'PostgreSQL'],
      github: 'https://github.com/Sadiq-d-gent/React-Crypto-Dashboard',
      live: 'https://dashboard-demo.vercel.app',
      featured: false
    },
    {
      title: 'Story Sail',
      description: 'An interactive storytelling platform where users can create, share, and discover engaging stories with multimedia content and collaborative features.',
      image: projectDashboard, // Using dashboard image as placeholder
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      github: 'https://github.com/Sadiq-d-gent/Snr-Elder',
      live: 'https://story-sail-demo.vercel.app',
      featured: false
    },
    {
      title: 'FigPro',
      description: 'A collaborative design tool inspired by Figma, featuring real-time editing, vector graphics, and team collaboration capabilities.',
      image: projectGurukul, // Using gurukul image as placeholder
      technologies: ['React', 'Canvas API', 'WebSocket', 'Node.js', 'Redis'],
      github: 'https://github.com/Sadiq-d-gent/AlphaLog',
      live: 'https://figpro-demo.vercel.app',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating expertise in frontend development, 
            user experience design, and modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="overflow-hidden border-2 border-transparent hover:border-primary/20 card-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Project Content */}
                <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-primary">Featured</Badge>
                      </div>
                      <h3 className="text-3xl font-heading font-bold">{project.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 pt-4">
                      <Button asChild className="inline-flex items-center gap-2">
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <Play className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild className="inline-flex items-center gap-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="space-y-8" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-center">
            Other <span className="gradient-text">Projects</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="overflow-hidden card-hover border-2 border-transparent hover:border-primary/20"
                data-aos="zoom-in"
                data-aos-delay={300 + index * 100}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" asChild className="h-8 w-8 p-0">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild className="h-8 w-8 p-0">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" asChild className="inline-flex items-center gap-2">
            <a href="https://github.com/Sadiq-d-gent" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
