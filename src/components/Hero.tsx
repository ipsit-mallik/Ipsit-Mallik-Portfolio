
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="section flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="space-y-4 text-center lg:text-left">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Ipsit Mallik
              </h1>
              <p className="text-xl text-primary font-semibold mt-2 text-glow">Software Engineer – Backend Developer</p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Building scalable and reliable backend systems with a passion for problem-solving, quick adaptability, and collaborative learning. Specializing in Java, Node.js, and Spring Boot.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a href="#projects"><Button size="lg">View My Work</Button></a>
              <a href="#contact"><Button size="lg" variant="secondary">Contact Me</Button></a>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="Ipsit Mallik"
              className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-primary/50 shadow-lg shadow-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
