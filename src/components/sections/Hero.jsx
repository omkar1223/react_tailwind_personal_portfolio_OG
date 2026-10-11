import {
  ArrowRight,
  ChevronDown,
  Download,
  MessageSquareText,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "../ReusableCom/Button";
import AnimatedButton from "../ReusableCom/AnimatedButton";

const Hero = () => {
  const skills = [
    "React.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "Redux",
    "HTML5",
    "CSS3",
    "SCSS",
    "Tailwind CSS",
    "Reusable Components",
    "Responsive UI",
    "State Management",
    "REST API Integration",
    "Node.js",
    "Express.js",
    "REST APIs",
    "Jest",
    "React Testing Library",
    "Functional Testing",
    "Git",
    "GitHub",
    "GitLab",
    "Jira",
    "Postman",
    "npm",
    "Vite",
    "CI/CD",
    "Agile/Scrum",
    "GitHub Copilot",
    "MongoDB",
    "PostgreSQL",
  ];
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/*Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/*Green dots*/}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute h-1.5 w-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `flikker ${15 * Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
            key={i}
          />
        ))}
      </div>

      {/*Content*/}

      <div className="container z-10 mx-auto relative lg:mt-0 px-6 py-6 pt-28 pb-20">
        <div className="grid  md:grid-cols-2 items-center gap-12">
          {/*Left content*/}
          <div className="space-y-8">
            <div className="animate-fade-in animate-delay-100">
              <span className="inline-flex items-center gap-2 px-2 py4 text-primary rounded-full glass">
                <span className="w-2 h-2 bg-primary rounded-full text-sm text-primary animate-pulse" />
                Software Engineer -- React Developer
              </span>
            </div>

            {/*HeadLine*/}

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl spin-text">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experience with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-500">
                Hi, I am Omkar Gample - a software engineer specializing in
                React, Next.js amd Typescript. I build scalable, performant web
                applications that users love
              </p>

              {/*CTA button */}

              <div className="flex gap-10 animate-fade-in animate-delay-600">
                <Button>
                  Contact me <ArrowRight className="w-5 h-5" />
                </Button>
                <AnimatedButton>
                  <Download /> Download CV
                </AnimatedButton>
              </div>

              {/*Social links */}
              <div className="flex gap-4 items-center">
                <span className="text-muted-foreground">Follow: </span>
                {[
                  { icon: FaGithub, href: "#" },
                  { icon: FaLinkedin, href: "#" },
                  { icon: FaTwitter, href: "#" },
                ].map((social, indx) => (
                  <a
                    key={indx}
                    className="p-2 rounded-full glass transition-all duration-300 hover:bg-primary/20 hover:text-primary"
                    href={social.href}
                  >
                    {<social.icon className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/*Right Content*/}
          <div className="relative animate-fade-in animate-delay-600 ">
            {/*Profile pic */}
            <div className="relative max-w-md mx-auto ">
              <div className="absolute inset-0 bg-primary/30 animate-pulse rounded-3xl blur-2xl -z-10" />
              <div className="relative glass rounded-3xl p-2 glow-shadow">
                <img
                  src="/DSC_5655.jpg"
                  alt="Omkar Gample"
                  className="w-full object-cover aspect-[4/5] rounded-2xl"
                />

                {/*Floating Badge */}
                <div className="absolute z-10 glass rounded-full px-2 animate-bounce -bottom-4 -right-4 flex items-center gap-2">
                  <div className="rounded-full bg-green-400 w-2 h-2 animate-pulse" />
                  <span>Available for work</span>
                </div>
                {/*Stats badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-2 animate-bounce">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="">years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Skills section */}
        <div className="mt-20 animate-fade-in animate-delay-600 mt-15">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {skills.map((skill, indx) => (
                <div className="flex-shrink-0 px-8 py-4" key={indx}>
                  <span className="text-xl text-center flex items-center text-muted-foreground hover:text-foreground transition-all">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*Swipe down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <a href="#About" className=" flex flex-col items-center text-muted-foreground gap-2 transition-colors group">
          <span className="text-xs uppercase tracking-wider">scroll</span>
          <ChevronDown className=" w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section> 
  );
};

export default Hero;
