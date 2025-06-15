
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const projectsData = [
  {
    title: "Intrusion Detection System for Connected Vehicles",
    description: "An ML-based system to detect anomalies and potential intrusions in smart city vehicle networks.",
    tech: ["Python", "Machine Learning", "Scikit-learn"],
    role: "Developed and trained machine learning models for anomaly detection, achieving high accuracy in identifying potential threats in simulated vehicle-to-infrastructure communication data."
  },
  {
    title: "Library Management System",
    description: "A comprehensive system for managing books, users, and borrowing/returning logic.",
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL"],
    role: "Led backend development, designing the database schema and implementing RESTful APIs for all core functionalities, including user authentication and book management."
  },
  {
    title: "E-commerce Shopping Cart",
    description: "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and checkout functionalities.",
    tech: ["Spring MVC", "Hibernate", "Bootstrap", "JSP", "MySQL"],
    role: "Engineered the backend logic, including session management for shopping carts and integration with a MySQL database for product and user data persistence."
  },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-8 text-center">{children}</h2>
);

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4 md:px-6 animate-fade-in-up">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-1 flex flex-col cursor-pointer">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <Badge key={i} variant="secondary">{t}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0">View Details</Button>
                  </CardFooter>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription>{project.description}</DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-4">
                    <h4 className="font-semibold">My Role</h4>
                    <p className="text-muted-foreground">{project.role}</p>
                    <h4 className="font-semibold">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                        <Badge key={i} variant="secondary">{t}</Badge>
                        ))}
                    </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
