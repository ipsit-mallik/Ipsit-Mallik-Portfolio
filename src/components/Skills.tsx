
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Coffee, Database, GitBranch, Layers, Server, Palette, MonitorSmartphone } from 'lucide-react';
import React from "react";

const skillsData = [
    { title: "Java", icon: <Coffee /> },
    { title: "Node.js", icon: <Server /> },
    { title: "HTML", icon: <Code /> },
    { title: "CSS", icon: <Palette /> },
    { title: "MySQL", icon: <Database /> },
    { title: "Spring Boot", icon: <Layers /> },
    { title: "Hibernate", icon: <Layers /> },
    { title: "Git", icon: <GitBranch /> },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-glow bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-8 text-center">{children}</h2>
);

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container mx-auto px-4 md:px-6 animate-fade-in-up">
                <SectionTitle>Core Skills</SectionTitle>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {skillsData.map((skill, index) => (
                        <Card key={index} className="bg-card/80 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
                            <CardContent className="p-6 flex flex-col items-center justify-center gap-4">
                                <div className="text-primary">{React.cloneElement(skill.icon, { size: 32 })}</div>
                                <h3 className="text-lg font-semibold text-center">{skill.title}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
