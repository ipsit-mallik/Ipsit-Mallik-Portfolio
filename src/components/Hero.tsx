
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="section relative overflow-hidden flex items-center"
      style={{
        backgroundImage: `url('https://i.postimg.cc/brTDMBTY/istockphoto-1278802737-612x612.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div
        className="absolute inset-0 bg-black/60"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12 xl:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left lg:col-span-3">
            <div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none text-white">
                Ipsit Mallik
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mt-4">Software Engineer – Backend Developer</p>
            </div>
            <p className="max-w-[600px] text-gray-300 md:text-xl mx-auto lg:mx-0 text-left">
              Building scalable and reliable backend systems with a passion for problem-solving, quick adaptability, and collaborative learning. Specializing in Java, Node.js, and Spring Boot.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
              <a href="#projects">
                <Button size="lg" className="w-full sm:w-auto">
                  View My Work
                  <ArrowRight className="ml-2" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Contact Me
                  <Mail className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:col-span-2">
            <div className="relative">
              <img src="https://i.postimg.cc/43TsnH0D/Profile-photo.jpg" alt="Ipsit Mallik" className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shadow-[0_0_25px_hsl(var(--primary)/0.3)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
