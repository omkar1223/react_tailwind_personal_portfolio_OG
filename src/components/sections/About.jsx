import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description:
        "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to bring ideas to life.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Staying ahead with the latest technologies and best practices.",
    },
  ];

  return (
    <section id="About" className="py-32 relative overflow-hidden">
      <div className="container mx-auto z-20 relative px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/*left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium">
                About me
              </span>
            </div>

            <h2 className="text-primary text-3xl md:text-4xl font-bold">
              Building the future,{" "}
              <span className="text-foreground font-serif italic">
                One component at a time.
              </span>
            </h2>

            <div className="space-y-6 text-lg animate-fade-in animate-delay-600 transition-all">
              <p>
                I'm a passionate software engineer with over 5 years of
                experience crafting digital products that make a difference. My
                journey started with a curiosity for how things work on the web,
                and it has evolved into a deep expertise in modern frontend
                technologies.
              </p>
              <p>
                I specialize in React, Redux, and TypeScript, building
                everything from sleek landing pages to complex enterprise
                applications. My approach combines technical excellence with a
                keen eye for design and user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            <div className="glass px-6 py-6 rounded-2xl glow-shadow">
              <p className="text-lg italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/*Right column */}

          <div className="grid sm:grid-cols-2 gap-5 mt-5">
            {highlights.map((items, indx) => (
              <div
                className="glass rounded-2xl p-6 animate-fade-in"
                style={{ animationDelay: `${(indx + 1) * 100}ms` }}
                key={indx}
              >
                <items.icon  className="w-12 h-12 rounded-xl glass p-2 text-primary hover:bg-primary/10 mb-5"/>
                <p className="font-semibold text-lg mb-2">{items.title}</p>
                <p className="text-sm text-muted-foreground">{items.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
