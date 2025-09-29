import { useState } from "react";
import {
  FaBuilding,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import toast from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!email) {
      toast.error("Please enter your email address");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

  // Custom Button Component
  const Button = ({ children, className = "", ...props }) => (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  // Custom Input Component
  const Input = ({ className = "", ...props }) => (
    <input
      className={`w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 bg-gray-700 text-white placeholder-gray-400 ${className}`}
      {...props}
    />
  );

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <a href="/">
                <img className="h-25 w-35" src="/assetlogo.png" alt="logo" />
              </a>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering Businesses Since 2008
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Comprehensive business infrastructure services across India,
              delivering Virtual Office solutions, GST Registration Support,
              Commercial Leasing, and Interior Design solutions.
            </p>

            {/* Trust Elements */}
            <div className="pt-4 space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <span className="font-semibold text-blue-400">15+</span>
                <span className="ml-2">Years of Expertise</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="font-semibold text-blue-400">500+</span>
                <span className="ml-2">Clients Served</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="font-semibold text-blue-400">40+</span>
                <span className="ml-2">Cities Presence</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                {
                  href: "https://workspaces.assetsense.in/",
                  label: "Virtual Office in India",
                },
                {
                  href: "https://workspaces.assetsense.in/virtual-office-in-mumbai",
                  label: "Virtual Office in Mumbai",
                },
                {
                  href: "https://workspaces.assetsense.in/",
                  label: "GST Registration Solutions",
                },
                {
                  href: "/services",
                  label: "Commercial Leasing Gurugram & Delhi NCR",
                },
                {
                  href: "/services",
                  label: "Interior Design Solutions",
                },
                { href: "/contact", label: "Contact" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-blue-400  duration-200 text-sm hover:translate-x-1 transform transition-transform"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaPhone className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">+91 9907800600</p>
                  <p className="text-sm text-gray-400">
                    Business Infrastructure Services
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaEnvelope className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">info@assetsense.in</p>
                  <p className="text-sm text-gray-400">
                    24/7 Support Available
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">
                    Emaar The Palm Square 02-007 Second Floor Sector 66, Rajesh
                    Pilot Marg, Gurugram - 122101 Haryana, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="pt-2">
              <h5 className="text-sm font-medium mb-3 text-gray-300">
                Follow Us
              </h5>
              <div className="flex space-x-3">
                {[
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/company/asset-sense-pvt-ltd",
                    label: "LinkedIn",
                  },
                  {
                    icon: FaFacebook,
                    href: "https://www.facebook.com/AssetSenseIndia",
                    label: "Facebook",
                  },
                  {
                    icon: FaInstagram,
                    href: "https://www.instagram.com/assetsense1/#",
                    label: "Instagram",
                  },
                  {
                    icon: FaTwitter,
                    href: "https://x.com/mohan_skills",
                    label: "Twitter",
                  },
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300 group hover:scale-110"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-4 w-4 text-gray-300 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-sm text-gray-300">
              Get the latest updates on business solutions and industry
              insights.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-1 border rounded-md"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white group shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
                <FaArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </form>

            <p className="text-xs text-gray-400">
              By subscribing, you agree to receive updates about our Business
              Infrastructure Services including Virtual Office solutions and
              Commercial Leasing opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {currentYear} Asset Sense. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm">
              {[
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-and-conditions", label: "Terms & Conditions" },
                { href: "/refund-policy", label: "Refund Policy" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Asset Sense",
            description:
              "Comprehensive business infrastructure services including Virtual Office solutions, GST Registration, Commercial Leasing, and Interior Design",
            url: "https://assetsense.in",
            telephone: "+91-9876543210",
            email: "info@assetsense.in",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Emaar The Palm Square 02-007 Second Floor",
              addressLocality: "Gurugram",
              addressRegion: "Haryana",
              postalCode: "122101",
              addressCountry: "IN",
            },
            foundingDate: "2008",
            numberOfEmployees: "50-100",
            sameAs: ["#", "#", "#", "#"],
          }),
        }}
      />
    </footer>
  );
};

export default Footer;
