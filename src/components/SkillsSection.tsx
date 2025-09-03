import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Palette, 
  Settings,
  Smartphone,
  Cloud,
  FileCode,
  Layers,
  Zap,
  Brush,
  Monitor
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CircularProgress from './CircularProgress';

const SkillsSection = () => {
  const frontendSkills = [
    { name: 'React', level: 90, icon: Code },
    { name: 'Next.js', level: 85, icon: Layers },
    { name: 'TypeScript', level: 80, icon: FileCode },
    { name: 'Tailwind CSS', level: 90, icon: Brush },
    { name: 'JavaScript', level: 85, icon: Zap },
    { name: 'HTML/CSS', level: 95, icon: Monitor }
  ];

  const backendSkills = [
    { name: 'Node.js', level: 80, icon: Server },
    { name: 'Express.js', level: 75, icon: Settings },
    { name: 'MongoDB', level: 85, icon: Database },
    { name: 'Prisma', level: 75, icon: Database }
  ];

  const additionalSkills = [
    { icon: Palette, title: 'UI/UX Design', description: 'User-centered design principles' },
    { icon: Smartphone, title: 'Responsive Design', description: 'Mobile-first development approach' },
    { icon: Globe, title: 'Web Performance', description: 'Optimization and Core Web Vitals' },
    { icon: Cloud, title: 'Cloud Deployment', description: 'Modern hosting and CI/CD' }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through continuous learning, hands-on projects, 
            and real-world frontend development.
          </p>
        </div>

        {/* Frontend Skills */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-2xl font-heading font-bold text-center mb-12">
            Frontend <span className="gradient-text">Development</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
            {frontendSkills.map((skill, index) => (
              <CircularProgress
                key={skill.name}
                percentage={skill.level}
                icon={skill.icon}
                skillName={skill.name}
              />
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-heading font-bold text-center mb-12">
            Backend <span className="gradient-text">Knowledge</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center max-w-2xl mx-auto">
            {backendSkills.map((skill, index) => (
              <CircularProgress
                key={skill.name}
                percentage={skill.level}
                icon={skill.icon}
                skillName={skill.name}
              />
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" data-aos="fade-up" data-aos-delay="300">
          {additionalSkills.map((skill, index) => (
            <Card key={skill.title} className="text-center card-hover border-2 border-transparent hover:border-primary/20">
              <CardContent className="pt-6 space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm lg:text-base">{skill.title}</h3>
                <p className="text-xs lg:text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Competitive Programming */}
        <Card className="p-6 lg:p-8 bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20" data-aos="fade-up" data-aos-delay="400">
          <div className="text-center space-y-6">
            <h3 className="text-xl lg:text-2xl font-heading font-bold">Competitive Programming</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="space-y-2">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm lg:text-base text-muted-foreground">DSA Problems Solved</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">1200+</div>
                <div className="text-sm lg:text-base text-muted-foreground">Codeforces Rating</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl lg:text-3xl font-bold gradient-text">Expert</div>
                <div className="text-sm lg:text-base text-muted-foreground">Problem Solving Level</div>
              </div>
            </div>
            <p className="text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Strong foundation in algorithms, data structures, and computational thinking 
              through consistent practice and competitive programming participation.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;