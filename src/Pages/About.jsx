import { useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaAward,
  FaUsers,
  FaBuilding,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaQuoteLeft,
  FaRocket,
  FaHandshake,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";

const About = () => {
  useEffect(() => {
    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all fade-in-up elements
    const animatedElements = document.querySelectorAll(".fade-in-up");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Custom Button Component
  const Button = ({
    children,
    variant = "default",
    size = "default",
    className = "",
    ...props
  }) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      default:
        "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",
      secondary:
        "bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl",
      outline:
        "border-2 border-white text-white hover:bg-white hover:text-blue-600 backdrop-blur-sm",
    };

    const sizes = {
      default: "h-10 py-2 px-4 text-sm",
      lg: "h-12 px-8 py-3 text-lg rounded-lg",
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <button className={classes} {...props}>
        {children}
      </button>
    );
  };

  // Custom Card Component
  const Card = ({ children, className = "", ...props }) => (
    <div
      className={`rounded-xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );

  const CardContent = ({ children, className = "" }) => (
    <div className={`p-6 ${className}`}>{children}</div>
  );

  // Custom Badge Component
  const Badge = ({ children, variant = "default", className = "" }) => {
    const variants = {
      default: "bg-blue-100 text-blue-800",
      secondary: "bg-orange-100 text-orange-800",
    };

    return (
      <span
        className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${variants[variant]} ${className}`}
      >
        {children}
      </span>
    );
  };

  // Sample images (replace with actual imports in your project)
  const heroCityscape =
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";
  const ceoHeadshot =
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
  const operationsDirector =
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
  const businessManager =
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCityscape})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <Badge className="mb-6 bg-orange-500 text-white font-medium text-lg px-6 py-3 shadow-lg">
            <FaRocket className="w-4 h-4 mr-2" />
            Since 2008 • Trusted by 10,000+ Businesses
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Virtual Office
            <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Success Partner
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Transforming businesses across India with premium virtual office
            solutions, commercial leasing, and unmatched customer service for
            over 15 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg transform hover:scale-105"
            >
              Get Your Virtual Office Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg transform hover:scale-105"
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-blue-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <Badge className="mb-4 bg-blue-100 text-blue-800">
                Our Story
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                15+ Years of Excellence in Virtual Office Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2008 with a vision to revolutionize how businesses
                operate, we've grown from a small startup to India's most
                trusted virtual office provider. Our journey began when
                traditional office spaces seemed limiting for ambitious
                entrepreneurs.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we're proud to have enabled thousands of businesses to
                establish their professional presence across India without the
                overhead costs of physical offices. Every solution we provide is
                crafted with care, innovation, and a deep understanding of
                modern business needs.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    10,000+
                  </div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Cities Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="fade-in-up">
              <Card className="shadow-xl hover:shadow-2xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    To empower businesses of all sizes with flexible,
                    professional, and cost-effective virtual office solutions
                    that enable growth without boundaries.
                  </p>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be India's most innovative and customer-centric virtual
                    office provider, setting new standards for business
                    flexibility and professional excellence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-orange-100 text-orange-800">
            Our Values
          </Badge>
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            Built on Trust, Driven by Excellence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-xl hover:shadow-2xl border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Trust & Reliability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every commitment we make is honored. Our clients trust us with
                  their business identity, and we deliver with unwavering
                  reliability.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-xl hover:shadow-2xl border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaAward className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We continuously evolve our services with cutting-edge
                  technology and forward-thinking solutions for modern
                  businesses.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-xl hover:shadow-2xl border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaUsers className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Customer First
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your success is our success. We go above and beyond to ensure
                  every client receives personalized, exceptional service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-blue-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Our Services
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From virtual offices to commercial leasing, we provide everything
              your business needs to establish a strong professional presence
              across India.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-xl hover:shadow-2xl border-0 hover:transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <FaBuilding className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Virtual Office Solutions
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Professional business addresses, mail handling, phone
                  answering, and meeting room access.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    GST Registration Support
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Professional Receptionist
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Mail Forwarding
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Meeting Room Access
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-xl hover:shadow-2xl border-0 hover:transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Commercial Leasing
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Premium office spaces and coworking solutions in prime
                  business locations.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Flexible Lease Terms
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Prime Locations
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Fully Furnished Spaces
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    IT Infrastructure Ready
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-xl hover:shadow-2xl border-0 hover:transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <FaUsers className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Business Support
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Complete administrative and legal support for smooth business
                  operations.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Company Registration
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Legal Documentation
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Accounting Support
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Business Consultation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pan-India Presence */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-800">
              Pan-India Network
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Nationwide Presence, Local Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With offices across major Indian cities, we provide localized
              service with national reach and consistency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: "Mumbai", desc: "Financial Capital Hub" },
              { city: "Delhi NCR", desc: "Corporate Headquarters" },
              { city: "Bangalore", desc: "Tech Innovation Center" },
              { city: "Chennai", desc: "South India Gateway" },
              { city: "Hyderabad", desc: "Cyberabad District" },
              { city: "Pune", desc: "Industrial Hub" },
              { city: "Kolkata", desc: "Eastern Commerce Center" },
              { city: "Ahmedabad", desc: "Business Capital of Gujarat" },
            ].map((location, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl border-0 text-center hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <FaMapMarkerAlt className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    {location.city}
                  </h3>
                  <p className="text-sm text-gray-600">{location.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-blue-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              Our Leadership
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Meet the Visionaries Behind Our Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced leadership team brings together decades of
              expertise in real estate, technology, and customer service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-xl hover:shadow-2xl border-0 hover:transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <img
                  src={ceoHeadshot}
                  alt="Rajesh Kumar - CEO & Founder"
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Rajesh Kumar
                </h3>
                <p className="text-orange-600 font-medium mb-4">
                  CEO & Founder
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  With 20+ years in real estate and business development, Rajesh
                  founded the company with a vision to democratize professional
                  business presence across India.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-xl hover:shadow-2xl border-0 hover:transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <img
                  src={operationsDirector}
                  alt="Priya Sharma - Director of Operations"
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Priya Sharma
                </h3>
                <p className="text-orange-600 font-medium mb-4">
                  Director of Operations
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Priya oversees our nationwide operations, ensuring consistent
                  service quality and operational excellence across all
                  locations with her 15+ years of experience.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-xl hover:shadow-2xl border-0 hover:transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <img
                  src={businessManager}
                  alt="Arjun Patel - Head of Business Development"
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Arjun Patel
                </h3>
                <p className="text-orange-600 font-medium mb-4">
                  Head of Business Development
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Arjun leads our expansion initiatives and client
                  relationships, bringing innovative solutions and strategic
                  partnerships that drive business growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-800">
              Client Success Stories
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              What Our Clients Say About Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-xl hover:shadow-2xl border-0 hover:transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8">
                <FaQuoteLeft className="text-orange-500 text-4xl mb-4" />
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "Their virtual office service transformed our startup. We got
                  a prestigious Mumbai address without the overhead costs. The
                  team is professional, responsive, and truly understands
                  business needs."
                </p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Vikash Mehta
                    </h4>
                    <p className="text-sm text-gray-600">
                      Founder, TechStart Solutions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-xl hover:shadow-2xl border-0 hover:transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8">
                <FaQuoteLeft className="text-orange-500 text-4xl mb-4" />
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "Excellent service quality and support. We've been using their
                  virtual office services for 3 years now, and they've been
                  instrumental in our expansion across multiple cities."
                </p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">Sneha Gupta</h4>
                    <p className="text-sm text-gray-600">
                      CEO, Digital Marketing Pro
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-xl hover:shadow-2xl border-0 hover:transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8">
                <FaQuoteLeft className="text-orange-500 text-4xl mb-4" />
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "Professional, reliable, and cost-effective. Their business
                  support services helped us navigate company registration and
                  compliance seamlessly. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">Amit Singh</h4>
                    <p className="text-sm text-gray-600">
                      Director, Green Energy Co.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Establish Your Professional Presence?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Join thousands of successful businesses who trust us with their
            virtual office needs. Get started today with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg transform hover:scale-105"
            >
              <FaPhone className="w-5 h-5 mr-2" />
              Call Now: +91-9876543210
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg transform hover:scale-105"
            >
              <FaEnvelope className="w-5 h-5 mr-2" />
              Get Free Quote
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            <FaHeadset className="w-4 h-4 inline mr-2" />
            No setup fees • Flexible plans • 24/7 support • Free consultation
          </p>
        </div>
      </section>

      {/* Add CSS for animations */}
      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
};

export default About;
