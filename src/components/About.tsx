
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-glow bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-8 text-center">{children}</h2>
);

const About = () => {
  return (
    <section id="about" className="section bg-card/50">
      <div className="container mx-auto px-4 md:px-6 animate-fade-in-up">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                    I'm a passionate and driven backend developer with a strong foundation in computer science and a love for building robust, scalable systems. My journey into software engineering began with a curiosity for how things work, which quickly evolved into a dedicated pursuit of creating efficient and reliable backend solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    Problem-solving is at the heart of what I do. I thrive on dissecting complex challenges and architecting elegant solutions. I'm a quick learner, always eager to adapt to new technologies and methodologies. I believe in the power of collaboration and am always open to learning from my peers to grow as a developer and a team player. My goal is to contribute to meaningful projects that push the boundaries of technology.
                </p>
            </div>
            <div className="lg:col-span-2 space-y-6">
                <Card className="bg-background/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3"><GraduationCap className="text-primary"/> Education</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="font-semibold">B.Tech in Computer Science Engineering</h3>
                            <p className="text-sm text-muted-foreground">National Institute of Science and Technology, Berhampur</p>
                            <p className="text-sm text-muted-foreground">2019 – 2023</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Java Development Course</h3>
                            <p className="text-sm text-muted-foreground">Jspiders, Marathahalli, Bengaluru</p>
                            <p className="text-sm text-muted-foreground">2023 – 2024</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
