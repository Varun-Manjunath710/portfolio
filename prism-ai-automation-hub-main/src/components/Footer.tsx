import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Prisim
              </span>
            </h3>
            <p className="text-foreground/70 mb-4 max-w-md">
              Empowering businesses with AI automation. We make every operation smarter, 
              faster, and more efficient through intelligent voice and workflow solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Services', 'How It Works', 'Case Studies', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-foreground/70">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                varuncena12@gmail.com
              </li>
              <li className="flex items-start gap-2 text-foreground/70">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                +91 9742502964
              </li>
              <li className="flex items-start gap-2 text-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                21, 1st Cross, Msre Road, Mathikere, Bengaluru, Karnataka 560054
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-foreground/60">
          <p>© {currentYear} Prisim AI. All rights reserved. Built with AI automation in mind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
