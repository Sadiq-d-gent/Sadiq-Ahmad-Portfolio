import { Code, Database, Globe, Server, Sparkles, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Frontend Excellence',
      description: 'Crafting responsive, intuitive user interfaces with React and Next.js'
    },
    {
      icon: Server,
      title: 'Backend Mastery',
      description: 'Building robust APIs and server-side solutions with Node.js'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Designing efficient databases with MongoDB and Prisma ORM'
    },
    {
      icon: Globe,
      title: 'Frontend Focus',
      description: 'Specialized in creating engaging user interfaces and experiences'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm Sadiq! a passionate frontend developer currently pursuing my Info.Tech in Computer Science 
                (2nd semester). My journey in programming began with curiosity and has evolved into a 
                deep commitment to creating beautiful, user-centric digital experiences.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                With expertise in <span className="text-primary font-semibold">React</span>, 
                <span className="text-primary font-semibold"> Next.js</span>, 
                <span className="text-primary font-semibold"> Node.js</span>, and 
                <span className="text-primary font-semibold"> TypeScript</span>, I specialize in 
                building scalable web applications that solve real-world problems.
              </p>
              
              <p className="text-lg leading-relaxed">
                My experience with <span className="text-primary font-semibold">MongoDB</span> and 
                <span className="text-primary font-semibold"> Prisma</span> enables me to design 
                efficient data architectures. I've solved <span className="text-primary font-semibold">500+ DSA questions</span> 
                and maintain a <span className="text-primary font-semibold">Codeforces rating of 1200+</span>, 
                demonstrating my problem-solving capabilities.
              </p>
              
              <p className="text-lg leading-relaxed">
                Currently gaining industry experience as a <span className="text-primary font-semibold">Front-End Developer at Skillbee</span>, 
                where I contribute to building innovative solutions that impact users globally.
              </p>
            </div>

            {/* Education */}
            <div className="p-6 bg-card rounded-xl border">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Education
              </h3>
              <div className="space-y-1">
                <p className="font-medium">Bachelor of Information Technology - Computer Science</p>
                <p className="text-muted-foreground">2nd Semester • Expected Graduation: 2027</p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left" data-aos-delay="200">
            {highlights.map((item, index) => (
              <Card key={index} className="card-hover border-2 border-transparent hover:border-primary/20" data-aos="zoom-in" data-aos-delay={300 + index * 100}>
                <CardContent className="p-4 lg:p-6 text-center space-y-4">
                  <div className="mx-auto w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <item.icon className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
                  </div>
                  <h3 className="text-base lg:text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Open to collaborations and new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;