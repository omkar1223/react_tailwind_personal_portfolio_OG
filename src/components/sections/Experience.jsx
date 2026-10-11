import React from "react";

const Experience = () => {
  const experienceData = [
    {
      period: "2022 — Present",
      role: "Frontend Developer",
      company: "Infosys Limited",
      description:
        "Developed and maintained scalable web applications using React.js, TypeScript, Redux, and REST APIs. Built reusable UI components, integrated APIs, resolved production bugs, and contributed to performance improvements, code reviews, CI/CD deployments, and release stabilization within an Agile/Scrum environment.",
      technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
      current: true,
    },
    {
      period: "Apr 2021 — May 2021",
      role: "Machine Learning Intern",
      company: "Verzeo",
      description:
        "Gained hands-on experience in machine learning concepts, data preprocessing, and model development. Worked on practical projects involving data analysis and predictive modeling.",
      technologies: ["Python", "Machine Learning", "Pandas", "NumPy"],
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
                  {exp.current && (
                    <span className="animate-ping absolute inset-0 rounded-full bg-primary" />
                  )}
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
                        <span key={indx} className="glass px-2 rounded-2xl">
                          {tech}
                        </span>
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
