import { MoveLeft, MoveRight, Quote } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [testimonialId, setTestimonialId] = useState(0);
  const testimonials = [
    {
      quote:
        "Pedro is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
      author: "Sarah Chen",
      role: "CTO, Tech Innovators Inc.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      quote:
        "Working with Pedro was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
      author: "Michael Rodriguez",
      role: "Product Manager, Digital Solutions",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    {
      quote:
        "Pedro's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
      author: "Emily Watson",
      role: "Engineering Lead, StartUp Labs",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      quote:
        "Not only is Pedro technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
      author: "David Kim",
      role: "CEO, Innovation Hub",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
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
                <div className="font-semibold">{testimonials[0].author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[testimonialId].role}
                </div>
              </div>
            </div>
          </div>

          {/*window slider */}

          <div className="max-w-4xl flex justify-center mt-5">
            <div className="flex gap-10 rounded-2xl px-2 ">
              <button className="glass px-2 rounded-3xl"
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
                  <button key={indx} onClick={()=>setTestimonialId(indx)}
                    className={`rounded-2xl w-2 h-2 px-2 transition-all duration-500
                    ${indx === testimonialId ? "w-10 bg-primary" : "bg-muted-foreground"}`}
                  />
                ))}
              </div>

              <button className="glass px-2 rounded-3xl"
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
