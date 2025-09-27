import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
    <div>
      <section className="py-20 bg-blue-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <Badge className="mb-4 bg-blue-100 text-blue-800">About US</Badge>
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
                  <div className="text-3xl font-bold text-blue-600">40+</div>
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
    </div>
  );
};

export default About;
