import { Calendar, MapPin, ExternalLink, Award, Code2, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Front-End Developer',
      company: 'Skillbee',
      location: 'Remote',
      duration: 'Jan 2024 - Present',
      type: 'Internship',
      description: 'Contributing to innovative web solutions that serve a global user base. Working with modern frontend technologies and collaborating with cross-functional teams.',
      achievements: [
        'Developed responsive user interfaces using React and TypeScript',
        'Collaborated with design team to implement pixel-perfect UI components',
        'Optimized application performance resulting in 25% faster load times',
        'Participated in code reviews and maintained high coding standards'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Git'],
      link: 'https://skillbee.com'
    }
  ];

  const education = {
    degree: 'Bachelor of Information Technology',
    field: 'Computer Science',
    institution: 'Bayero University Kano',
    location: 'Kano, Nigeria',
    duration: '2022 - 2026',
    currentYear: '2nd Semester',
    gpa: '3.5/5',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Software Engineering',
      'Computer Networks',
      'Operating Systems',
      'Web Technologies'
    ]
  };

  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: '2023',
      credentialId: 'ABC123'
    },
    {
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: '2023',
      credentialId: 'DEF456'
    },
    {
      title: 'MongoDB for Developers',
      issuer: 'MongoDB University',
      date: '2023',
      credentialId: 'GHI789'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My journey in software development, from academic foundations to 
            real-world industry experience.
          </p>
        </div>

        <div className="space-y-12">
          {/* Professional Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-heading font-bold flex items-center gap-3">
              <Code2 className="h-6 w-6 text-primary" />
              Professional Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <Card key={index} className="card-hover border-2 border-transparent hover:border-primary/20">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="space-y-2">
                        <h4 className="text-2xl font-semibold">{exp.title}</h4>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <span className="text-lg font-medium text-primary">{exp.company}</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <Badge variant="secondary">{exp.type}</Badge>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-lg">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h5 className="font-semibold">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                    </div>

                    {/* Company Link */}
                    <Button variant="outline" asChild className="inline-flex items-center gap-2">
                      <a href={exp.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Visit {exp.company}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-heading font-bold flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              Education
            </h3>
            
            <Card className="card-hover border-2 border-transparent hover:border-primary/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="space-y-2">
                      <h4 className="text-2xl font-semibold">{education.degree}</h4>
                      <p className="text-lg text-primary font-medium">{education.field}</p>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <span className="font-medium">{education.institution}</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{education.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-left lg:text-right">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{education.duration}</span>
                      </div>
                      <Badge variant="secondary">{education.currentYear}</Badge>
                      <div className="text-lg font-semibold gradient-text">
                        GPA: {education.gpa}
                      </div>
                    </div>
                  </div>

                  {/* Coursework */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-lg">Relevant Coursework:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {education.coursework.map((course, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-heading font-bold flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-hover border-2 border-transparent hover:border-primary/20">
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg leading-tight">{cert.title}</h4>
                      <p className="text-primary font-medium">{cert.issuer}</p>
                      <p className="text-muted-foreground text-sm">{cert.date}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      ID: {cert.credentialId}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;