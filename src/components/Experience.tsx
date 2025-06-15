
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-8 text-center">{children}</h2>
);

const Experience = () => {
  return (
    <section id="experience" className="section bg-card/50">
      <div className="container mx-auto px-4 md:px-6 animate-fade-in-up">
        <SectionTitle>Experience</SectionTitle>
        <div className="max-w-2xl mx-auto">
            <Card className="bg-background/50">
                <CardHeader className="grid items-start gap-4 space-y-0">
                    <div className="space-y-1">
                        <CardTitle className="flex items-center gap-3"><Briefcase className="text-primary"/> Openturf Technologies</CardTitle>
                        <CardDescription>Software Engineer Intern</CardDescription>
                        <p className="text-sm text-muted-foreground">July 2024 – Present</p>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        During my internship, I am gaining hands-on experience in backend development, contributing to services, and collaborating with the engineering team to build and improve software solutions. This role allows me to apply my skills in a professional environment and learn industry best practices.
                    </p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
