import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div
      className="py-20 px-4 sm:px-6 lg:px-8 w-full"
      style={{ backgroundColor: "rgb(27, 27, 27)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Side - Newsletter */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4 leading-tight">
                Stay Up To Date
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed normal-text">
                Sign Up For Our Newsletter
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                NEWSLETTER
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="normal-text flex-1 bg-transparent border-b border-gray-600 py-4 px-0 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors duration-300"
                />
                <button className="ml-4 p-4 hover:bg-[goldenrod] transition-colors duration-300 rounded">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Address */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                ADDRESS
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300 font-light leading-relaxed normal-text">
                    123 Creative District
                    <br />
                    New York, NY 10001
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                CONTACT
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <a
                    href="tel:+1234567890"
                    className="normal-text text-gray-300 font-light hover:text-white transition-colors duration-300"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <a
                    href="mailto:hello@silkywriters.com"
                    className="normal-text text-gray-300 font-light hover:text-white transition-colors duration-300"
                  >
                    hello@silkywriters.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700 mb-20"></div>

        {/* Brand Name */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl lg:text-[200px] font-normal text-white/80 tracking-widest uppercase leading-none">
            SILKYWRITERS
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-gray-700">
          {/* Social Links */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider text-center md:text-left">
              SOCIALS
            </p>
            <div className="flex gap-6 text-gray-400 font-light normal-text">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              <span>•</span>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Copyright and Links */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-500 normal-text">
            <span>© SILKYWRITERS, 2025</span>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-300 uppercase tracking-wider"
              >
                Privacy
              </a>
              <a
                href="https://isaacanyim-iota.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-300 uppercase tracking-wider"
              >
                Website by{" "}
                <span className="font-bold underline">CreatorLZ </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
