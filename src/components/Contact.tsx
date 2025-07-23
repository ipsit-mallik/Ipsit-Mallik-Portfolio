
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-8 text-center">{children}</h2>
);

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
            toast({
                title: "Incomplete Form",
                description: "Please fill out all fields before sending.",
                variant: "destructive",
            });
            return;
        }

        if (!form.current) return;

        setIsLoading(true);

        emailjs.sendForm('service_fuj4sco', 'template_6p1mery', form.current, 'zQUk0Zj0bPCT9c9T6')
            .then(
                () => {
                    toast({
                        title: "Message Sent!",
                        description: "Thank you for reaching out. I'll get back to you soon.",
                    });
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                },
                (error) => {
                    toast({
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem sending your message. Please try again.",
                        variant: "destructive",
                    });
                    console.error('EMAILJS FAILED...', error);
                }
            )
            .finally(() => {
                setIsLoading(false);
            });
    };

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
                            <div className="flex items-center gap-3">
                                <MapPin className="text-primary"/>
                                <span className="text-muted-foreground">Mundamarai, Odisha, India - 761114</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <Card className="bg-background/50">
                            <CardContent className="p-6">
                                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                    <Input
                                        placeholder="Name"
                                        name="from_name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        disabled={isLoading}
                                    />
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        name="from_email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={isLoading}
                                    />
                                    <Input
                                        placeholder="Subject"
                                        name="subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        disabled={isLoading}
                                    />
                                    <Textarea
                                        placeholder="Message"
                                        rows={5}
                                        name="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        disabled={isLoading}
                                    />
                                    <Button type="submit" className="w-full" disabled={isLoading}>
                                        {isLoading ? "Sending..." : "Send Message"}
                                    </Button>
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
