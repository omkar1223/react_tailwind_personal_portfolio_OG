import { ArrowUpRight } from "lucide-react";
import React from "react";
import AnimatedButton from "../ReusableCom/AnimatedButton";

const Projects = () => {
  const projects = [
    {
      title: "Fintech Dashboard",
      description:
        "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
      image: "/projects/project1.png",
      tags: ["React", "Typescript", "NodeJS"],
      link: "#",
      github: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
      image: "/projects/project2.png",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      link: "#",
      github: "#",
    },
    {
      title: "AI Writing Assistant",
      description:
        "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
      image: "/projects/project3.png",
      tags: ["React", "OpenAI", "Python", "FastAPI"],
      link: "#",
      github: "#",
    },
    {
      title: "Project Management Tool",
      description:
        "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
      image: "/projects/project4.png",
      tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="Projects" className="py-32 relative overflow-hidden">
      <div className="container relative z-20 mx-auto px-6">
        {/*Section header */}
        <div className="space-y-8 text-center mx-auto mb-16">
          <span className="text-muted-foreground text-sm text-primary">
            Featured work
          </span>
          <h2 className="text-primary mt-4 mb-6 text-4xl animate-fade-in animate-delay-600">
            Projects that{" "}
            <span className="text-foreground italic">make an Impact.</span>
          </h2>

          <p className="text-md text-muted-foreground">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/*Projects section */}

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {projects.map((Obj, indx) => (
            <div
              className="group glass rounded-2xl overflow-hidden md:row-span-1 animate-fade-in h-full w-full"
              style={{ animationDelay: `${(indx + 1) * 100}ms` }}
              key={indx}
            >
              {/*Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={Obj.image}
                  className=" w-full h-full object-cover transition-transform  duration-700 group-hover:scale-110"
                />

                {/* <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                /> */}

                <div className="absolute inset-0 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    className="rounded-full bg-muted-foreground p-2 hover:bg-primary hover:text-primary-foreground-foreground"
                    href={Obj.link}
                  >
                    <ArrowUpRight />
                  </a>
                  <a
                    className="rounded-full bg-muted-foreground p-2 hover:bg-primary hover:text-primary-foreground-foreground"
                    href={Obj.github}
                  >
                    Github
                  </a>
                </div>
              </div>

              {/*Content */}

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg text-primary">{Obj.title}</h3>{" "}
                  <span>
                    <ArrowUpRight />
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {Obj.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {Obj.tags.map((items, indx) => (
                    <span
                      className="glass rounded-2xl px-3 text-muted-foreground hover:text-foreground text-sm"
                      key={indx}
                    >
                      {items}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <AnimatedButton>
            View all projects <ArrowUpRight />
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
