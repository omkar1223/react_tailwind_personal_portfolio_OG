import React from "react";

const Experience = () => {
  const experienceData = [
    {
      period: "2022 — Present",
      role: "Senior Frontend Engineer",
      company: "Tech Innovators Inc.",
      description:
        "Leading frontend architecture for a suite of fintech products. Implemented micro-frontend architecture, reduced bundle size by 40%, and mentored a team of 5 developers.",
      technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
      current: true,
    },
    {
      period: "2020 — 2022",
      role: "Frontend Engineer",
      company: "Digital Solutions Co.",
      description:
        "Built and maintained multiple React applications for enterprise clients. Introduced automated testing practices that improved code coverage to 85%.",
      technologies: ["React", "Redux", "Jest", "Cypress"],
      current: false,
    },
    {
      period: "2019 — 2020",
      role: "Junior Developer",
      company: "StartUp Labs",
      description:
        "Contributed to the development of a SaaS platform from MVP to production. Collaborated with designers to implement pixel-perfect UI components.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      current: false,
    },
    {
      period: "2018 — 2019",
      role: "Freelance Developer",
      company: "Self-Employed",
      description:
        "Delivered custom web solutions for small businesses and startups. Built 15+ websites and applications, handling everything from design to deployment.",
      technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
      current: false,
    },
  ];

  return (
    <section id="Experience" className="py-32 relative ">
      <div className="container relative z-20 mx-auto px-6">
        <div className="w-full mb-16 space-y-8 text-center">
          <h2 className="text-primary text-sm uppercase">Career Journey</h2>
          <h2 className="text-primary text-2xl">
            Experience that{" "}
            <span className="italic text-foreground">speaks volumes.</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/*Timeline */}
        <div className="relative">
          <div className=" timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/*Expereince section */}

          <div className="space-y-12">
            {experienceData.map((exp, indx) => (
              <div
                key={indx}
                className="relative grid sm:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(indx + 1) * 150}ms` }}
              >
                {/*Timeline dot */}
                <div className="absolute w-3 h-3 bg-primary rounded-full left-0 md:left-1/2 -translate-x-1/2 md:-translate-x-1/2 ring-4 ring-background z-10 top-0">
                  {exp.current && (<span className="animate-ping absolute inset-0 rounded-full bg-primary" />)}
                </div>

                {/*Content */}
                <div
                  className={`pl-8 md:pl-0 ${indx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-8"}`}
                >
                  <div className="glass p-6 rounded-2xl border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-primary">{exp.period}</span>
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <p className="text-muted-foreground font-light">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap mt-4 ${indx % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, indx) => (
                        <span key={indx} className="glass px-2 rounded-2xl">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
