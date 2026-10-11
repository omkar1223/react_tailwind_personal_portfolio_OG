import React, { useState } from "react";
import { Button } from "../ReusableCom/Button";
import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "omkargample@gmail.com",
    href: "mailto:pedro@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8149787541",
    href: "tel:+918149787541",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Maharashtra, India",
    href: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, //Success || Fail
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    setFormData({ name: "", email: "", message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLICID = import.meta.env.VITE_EMAILJS_PUBLIC_ID;

      if (!serviceId || !templateId || !PUBLICID) {
        throw new Error(
          "Emailjs configuration is missing. Please check your environment variables",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLICID,
      );

      setSubmitStatus({
        type: "Success",
        message: "Email sent successfully",
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
      setSubmitStatus({
        type: "failed",
        message: error.text || "failed to send email",
      });
    }
  };

  return (
    <section id="Contact" className="relative py-28 ">
      <div className="p-6 container relative z-10 mx-auto">
        <div className="text-center mx-auto mb-16">
          {/*Section Heading */}

          <span className="text-primary/50 font-medium">GET IN TOUCH</span>

          <h2 className="text-muted-foreground mt-10 mb-6 text-3xl">
            <span className="text-primary font-serif">Let's build </span>
            something great
          </h2>

          <p className="text-sm text-muted-foreground">
            Have a project in mind?I'd love to hear about it. Send me a message
            and lets's discuss how we can work together
          </p>
        </div>

        {/*Contact containt */}

        <div className="grid lg:grid-cols-2 max-w-5xl mx-auto gap-12">
          <div className="glass p-8 rounded-3xl">
            <form action="" className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm" htmlFor="name">
                  Name
                </label>
                <input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="your name..."
                  type="text"
                  className="w-full glass rounded-1xl px-4 py-2 outline-none focus:border-primary transition-all duration-500"
                />
              </div>
              <div>
                <label className="text-sm block mb-2" htmlFor="">
                  Email
                </label>
                <input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  type="Email"
                  className="outline-none w-full glass rounded-1xl px-4 py-2 outline-none focus:border-primary transition-all duration-500"
                />
              </div>
              <div>
                <label className="text-sm block mb-2" htmlFor="">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  placeholder="your message..."
                  type="text"
                  className="resize-none w-full glass rounded-1xl px-4 py-3 outline-none focus:border-primary transition-all duration-500"
                />
              </div>
              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={loading}
              >
                {loading ? (
                  <div>Sending...</div>
                ) : (
                  <span className="flex gap-2">
                    Send Message
                    <Send />
                  </span>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex gap-10 glass px-5 py-2 ${submitStatus.type === "Success" ? "bg-green-300 text-black" : "bg-red-500"}`}
                >
                  {submitStatus.type === "Success" ? (
                    <CheckCircle />
                  ) : (
                    <AlertCircle />
                  )}
                  <p>{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
