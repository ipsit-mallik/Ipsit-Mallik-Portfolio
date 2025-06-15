
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-8 text-center">{children}</h2>
);

const Contact = () => {
    return (
        <section id="contact" className="section bg-card/50">
            <div className="container mx-auto px-4 md:px-6 animate-fade-in-up">
                <SectionTitle>Get In Touch</SectionTitle>
                <div className="grid gap-12 lg:grid-cols-5">
                    <div className="lg:col-span-2 space-y-6">
                        <p className="text-muted-foreground">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
                        </p>
                        <div className="space-y-4">
                            <a href="mailto:ipsitmallik397@gmail.com" className="flex items-center gap-3 group">
                                <Mail className="text-primary"/>
                                <span className="text-muted-foreground group-hover:text-primary transition-colors">ipsitmallik397@gmail.com</span>
                            </a>
                            <a href="tel:7750936888" className="flex items-center gap-3 group">
                                <Phone className="text-primary"/>
                                <span className="text-muted-foreground group-hover:text-primary transition-colors">7750936888</span>
                            </a>
                            <a href="https://linkedin.com/in/ipsit-mallik-b46390219" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                                <Linkedin className="text-primary"/>
                                <span className="text-muted-foreground group-hover:text-primary transition-colors">LinkedIn Profile</span>
                            </a>
                            <div className="flex items-center gap-3">
                                <MapPin className="text-primary"/>
                                <span className="text-muted-foreground">Mundamarai, Odisha, India - 761114</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <Card className="bg-background/50">
                            <CardContent className="p-6">
                                <form className="space-y-4">
                                    <Input placeholder="Name" />
                                    <Input type="email" placeholder="Email" />
                                    <Textarea placeholder="Message" rows={5} />
                                    <Button type="submit" className="w-full">Send Message</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
