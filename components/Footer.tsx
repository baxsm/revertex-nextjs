import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import Logo from "./Logo";

const Footer: FC = () => {
  return (
    <footer className="bg-background relative z-10 py-16 w-full h-full border-t-[1px] border-border">
      <MaxWidthWrapper className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <Logo />
        <div className="flex flex-col gap-4">
          <h5 className="text-sm">Let&apos;s connect</h5>
          <p className="text-xs text-muted-foreground">
            4517 Washington Ave.
            <br />
            Manchester, Kentucky 39495
          </p>
          <p className="text-xs text-muted-foreground">
            organization@example.com
          </p>
          <p className="text-xs text-muted-foreground">(123) 456-7890</p>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-sm">Links</h5>
          <Link
            className="text-xs text-muted-foreground hover:text-indigo-400"
            href="#"
          >
            Testimonials
          </Link>
          <Link
            className="text-xs text-muted-foreground hover:text-indigo-400"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-xs text-muted-foreground hover:text-indigo-400"
            href="#"
          >
            Why Us
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-sm">Follow Us</h5>
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Github].map((Item, index) => {
              return (
                <Item
                  className="w-5 h-5 text-foreground cursor-pointer hover:text-indigo-500 duration-300"
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
