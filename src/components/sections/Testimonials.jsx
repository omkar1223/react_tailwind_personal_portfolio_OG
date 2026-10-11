import { MoveLeft, MoveRight, Quote } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [testimonialId, setTestimonialId] = useState(0);

  const testimonials = [
    {
      quote:
        "Omkar is a dedicated frontend developer with strong React and TypeScript skills. He consistently delivers reusable UI components and handles complex requirements with a practical, solution-oriented approach.",
      author: "Rahul Sharma",
      role: "Technical Lead, Infosys",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      quote:
        "Working with Omkar has been a great experience. His ability to troubleshoot production issues, integrate REST APIs, and maintain code quality makes him a reliable member of the development team.",
      author: "Priya Deshmukh",
      role: "Senior Software Engineer, Infosys",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    },
    {
      quote:
        "Omkar demonstrates a strong understanding of frontend development, Redux state management, and responsive UI design. He collaborates effectively with cross-functional teams and contributes positively to project delivery.",
      author: "Amit Kulkarni",
      role: "Project Manager, Infosys",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    },
    {
      quote:
        "Omkar showed enthusiasm for learning and applying technical concepts during his early career. His willingness to explore new technologies and work on practical projects reflects a strong foundation for continuous growth.",
      author: "Neha Patil",
      role: "Mentor, Verzeo",
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    },
  ];

  return (
    <section
      id="Testimonials"
      className="relative py-32 overflow-hidden animate-fade-in"
    >
      {/* <div className=" absolute bg-primary/5 top-1/2 left-1/2 w-800 h-800 rounded-full blur-3xl -translate-x-1/2 -translate-y-1.5 " /> */}

      <div className="container mx-auto relative text-center px-6 z-10 mb-16">
        <span className=" text-sm text-primary">What people say</span>
        <p className="text-2xl font-serif text-primary">
          Kind words from{" "}
          <span className="text-primary-foreground font-serif italic">
            amazing people
          </span>
        </p>
      </div>

      {/*Testimonial carousel */}

      <div className="max-w-4xl mx-auto ">
        <div className="relative">
          {/* Main Testimonial*/}

          <div className="glass p-8 rounded-3xl md:p-12 glow-shadow">
            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>

            <div className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4 h-40">
              "{testimonials[testimonialId].quote}"
            </div>

            <div className="flex items-center gap-4">
              <img
                className="w-14 h-14 rounded-full glow-shadow object-cover"
                src={testimonials[testimonialId].avatar}
                alt=""
              />
              <div className="flex items-center gap-4">
                <div className="font-semibold">{testimonials[testimonialId].author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[testimonialId].role}
                </div>
              </div>
            </div>
          </div>

          {/*window slider */}

          <div className="max-w-4xl flex justify-center mt-5">
            <div className="flex gap-10 rounded-2xl px-2 ">
              <button
                className="glass px-2 rounded-3xl"
                onClick={() => {
                  if (testimonialId > 0) {
                    setTestimonialId((prev) => prev - 1);
                  }
                  return;
                }}
              >
                <MoveLeft />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, indx) => (
                  <button
                    key={indx}
                    onClick={() => setTestimonialId(indx)}
                    className={`rounded-2xl w-2 h-2 px-2 transition-all duration-500
                    ${indx === testimonialId ? "w-10 bg-primary" : "bg-muted-foreground"}`}
                  />
                ))}
              </div>

              <button
                className="glass px-2 rounded-3xl"
                onClick={() => {
                  if (testimonialId < testimonials.length - 1) {
                    setTestimonialId((prev) => prev + 1);
                  }
                  return;
                }}
              >
                <MoveRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
