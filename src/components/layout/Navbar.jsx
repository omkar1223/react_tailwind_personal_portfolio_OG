import { useEffect, useState } from "react";
import { Button } from "../ReusableCom/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // console.log(isScrolled);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navlinks = [
    { href: "#About", label: "About" },
    { href: "#Projects", label: "Projects" },
    { href: "#Experience", label: "Experience" },
    { href: "#Testimonials", label: "Testimonials" },
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} transition-all duration-500   z-50`}
    >
      <nav className="container z-10 flex mx-auto justify-between px-6 items-center">
        <a
          className="text-xl font-bold tracking-tight hover:text-primary"
          href="/"
        >
          PM <span className="text-primary">.</span>
        </a>

        {/*Desktop Nav*/}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navlinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/*CTA button */}
        <div href="#Contact" className="md:block hidden">
          <Button size={"sm"} children={"Contact me"} />
        </div>

        {/*CTA mobile*/}
        <div className="md:hidden block cursor-pointer">
          {expand ? (
            <X onClick={() => setExpand((prev) => !prev)} />
          ) : (
            <Menu onClick={() => setExpand((prev) => !prev)} size={24} />
          )}
        </div>
      </nav>
      {/*Mobile nav */}
      {expand && (
        <div className="md:hidden flex flex-col gap-2 glass px-6 py-2 animate-fade-in">
          {navlinks.map((obj, index) => (
            <a
              className="text-md text-muted-foreground py-2 hover:text-foreground"
              key={index}
              href={obj.href}
              onClick={() => setExpand(false)}
            >
              {obj.label}
            </a>
          ))}
          <Button href='#Contact' onClick={() => setExpand(false)} size={"sm"}>
            Contact me
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
