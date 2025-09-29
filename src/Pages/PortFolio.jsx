import React, { useState } from "react";
import {
  FaBuilding,
  FaUsers,
  FaBriefcase,
  FaShoppingBag,
  FaTruck,
  FaGlobe,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import toast from "react-hot-toast";
import CompletedProjects from "../components/CompletedProject";
import { useNavigate } from "react-router-dom";

// Mock images (replace with actual imports in your project)
const mockImages = {
  virtualOffice1: "/asset1.jpg",
  commercialSpace1: "/asset2.jpg",
  interiorDesign1: "/asset3.jpg",
  gstVirtualOffice: "/asset4.jpg",
  corporateHq: "/asset5.jpg",
  startupSpace: "/asset6.jpg",
  retailSpace: "/asset7.jpg",
  meetingRoom: "/asset8.jpg",
  ecommerceSpace: "/asset9.jpg",
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Premium Virtual Office - Bangalore",
      description:
        "Provided GST-ready virtual office address with business registration support for a growing tech startup.",
      image: mockImages.gstVirtualOffice,
      category: "Virtual Office",
      location: "Bangalore, Karnataka",
    },
    {
      id: 2,
      title: "Corporate Headquarters - Gurugram",
      description:
        "Leased 15,000 sq. ft. modern corporate headquarters with complete interior design and fit-out.",
      image: mockImages.corporateHq,
      category: "Commercial Leasing",
      location: "Gurugram, Haryana",
    },
    {
      id: 3,
      title: "Executive Boardroom Design",
      description:
        "Complete interior transformation of C-suite boardroom with luxury finishes and AV integration.",
      image: mockImages.interiorDesign1,
      category: "Interior Design",
      location: "Mumbai, Maharashtra",
    },
    {
      id: 4,
      title: "Modern Co-working Space",
      description:
        "Designed and leased flexible co-working environment for 50+ startups and freelancers.",
      image: mockImages.startupSpace,
      category: "Commercial Leasing",
      location: "Pune, Maharashtra",
    },
    {
      id: 5,
      title: "Virtual Office Network",
      description:
        "Established multi-city virtual office presence with mail forwarding and business support services.",
      image: mockImages.virtualOffice1,
      category: "Virtual Office",
      location: "Delhi NCR",
    },
    {
      id: 6,
      title: "Retail Space - Prime Location",
      description:
        "Secured and designed 3,000 sq. ft. flagship retail store in premium shopping district.",
      image: mockImages.retailSpace,
      category: "Commercial Leasing",
      location: "Bangalore, Karnataka",
    },
    {
      id: 7,
      title: "Commercial Office Complex",
      description:
        "Complete interior design and space planning for 50,000 sq. ft. commercial complex.",
      image: mockImages.commercialSpace1,
      category: "Interior Design",
      location: "Chennai, Tamil Nadu",
    },
    {
      id: 8,
      title: "Conference Center Design",
      description:
        "State-of-the-art meeting rooms with video conferencing and collaborative spaces.",
      image: mockImages.meetingRoom,
      category: "Interior Design",
      location: "Hyderabad, Telangana",
    },
    {
      id: 9,
      title: "E-commerce Fulfillment Hub",
      description:
        "Optimized warehouse and office space design for major e-commerce operations.",
      image: mockImages.ecommerceSpace,
      category: "Commercial Leasing",
      location: "Noida, Uttar Pradesh",
    },
  ];

  const caseStudies = [
    {
      client: "TechStart Solutions",
      challenge:
        "Needed immediate business address for GST registration and compliance without physical office costs.",
      solution:
        "Provided premium virtual office with business registration support, mail handling, and meeting room access.",
      result:
        "Reduced operational costs by 70% while maintaining professional business presence across 3 cities.",
      industry: "Technology Startup",
      testimonial:
        "The virtual office solution helped us establish credibility with clients while keeping costs minimal during our growth phase.",
    },
    {
      client: "Global Manufacturing Corp",
      challenge:
        "Required 25,000 sq. ft. manufacturing facility with adjoining corporate offices within tight timeline.",
      solution:
        "Sourced and negotiated optimal industrial space, managed complete interior fit-out and regulatory approvals.",
      result:
        "Delivered turnkey facility 2 weeks ahead of schedule, saving 15% on initial budget estimates.",
      industry: "Manufacturing",
      testimonial:
        "Exceptional project management and attention to detail. They handled everything from space selection to final handover seamlessly.",
    },
    {
      client: "Premium Retail Chain",
      challenge:
        "Expanding retail presence needed 12 store locations across metro cities with consistent brand experience.",
      solution:
        "Strategic location scouting, lease negotiations, and standardized interior design across all locations.",
      result:
        "Successfully launched all 12 stores within 6 months, achieving 25% higher footfall than projected.",
      industry: "Retail",
      testimonial:
        "Their understanding of retail dynamics and customer psychology was evident in every store design.",
    },
  ];

  const industries = [
    { name: "Startups", icon: <FaGlobe className="w-6 h-6" />, count: "150+" },
    { name: "SMEs", icon: <FaBuilding className="w-6 h-6" />, count: "200+" },
    {
      name: "Corporate Houses",
      icon: <FaBriefcase className="w-6 h-6" />,
      count: "50+",
    },
    {
      name: "Retailers",
      icon: <FaShoppingBag className="w-6 h-6" />,
      count: "75+",
    },
    { name: "E-commerce", icon: <FaTruck className="w-6 h-6" />, count: "30+" },
    {
      name: "Manufacturing",
      icon: <FaUsers className="w-6 h-6" />,
      count: "25+",
    },
  ];

  const categories = [
    "All",
    "Virtual Office",
    "Commercial Leasing",
    "Interior Design",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Custom Button Component
  const Button = ({
    children,
    className = "",
    variant = "primary",
    ...props
  }) => {
    const baseStyles =
      "px-6 py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center";

    const variants = {
      primary:
        "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl",
      secondary:
        "bg-white text-blue-600 hover:bg-gray-50 border border-blue-600",
      outline:
        "border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600",
    };

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };

  // Custom Card Component
  const Card = ({ children, className = "", ...props }) => (
    <div
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}
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
      default: "bg-gray-100 text-gray-800",
      secondary: "bg-blue-100 text-blue-800",
      outline: "border border-blue-600 text-blue-600",
    };

    return (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
      >
        {children}
      </span>
    );
  };

  const handleContactClick = () => {
    toast.success("Redirecting to contact Us!");
    // In a real app, you might use react-router or next/link here
    setTimeout(() => {
      navigate("/contact");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-gray-700 to-gray-900 text-white py-50  px-4 bg-cover bg-center"
        style={{
          backgroundImage: `url('/asset3.jpg')`, // 👈 replace with your image from public folder
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gray-900/70"></div>

        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Work, Your Success
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Transforming businesses through strategic virtual office solutions,
            premium commercial spaces, and innovative interior design across
            India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Badge variant="secondary" className="text-base px-4 py-2">
              500+ Happy Clients
            </Badge>
            <Badge variant="secondary" className="text-base px-4 py-2">
              50+ Cities Covered
            </Badge>
            <Badge variant="secondary" className="text-base px-4 py-2">
              10+ Years Experience
            </Badge>
          </div>
        </div>
      </section>
      <CompletedProjects />

      {/* Filter Buttons */}
      {/* <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Featured Projects Grid */}
      {/* <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses across India establish their
              presence, optimize their spaces, and achieve their goals.
            </p>
          </div>
          <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeFilter === category
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-blue-600 font-medium"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaMapMarkerAlt className="w-4 h-4 mr-1 text-blue-500" />
                    {project.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Case Studies */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real challenges, innovative solutions, measurable results. See how
              we've transformed businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {study.client}
                    </h3>
                    <Badge
                      variant="outline"
                      className="text-blue-600 border-blue-600"
                    >
                      {study.industry}
                    </Badge>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Challenge
                      </h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Solution
                      </h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 flex items-center">
                        <FaCheckCircle className="w-4 h-4 mr-1 text-green-500" />
                        Result
                      </h4>
                      <p className="text-gray-600 font-medium">
                        {study.result}
                      </p>
                    </div>
                  </div>

                  <blockquote className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-700 italic text-sm">
                      "{study.testimonial}"
                    </p>
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From startups to enterprises, we understand the unique needs of
              every industry and deliver tailored solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                    {industry.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                  {industry.name}
                </h3>
                <p className="text-blue-600 font-medium text-sm">
                  {industry.count} clients
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Your Success Story Together
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Ready to transform your business with the perfect space solution?
            Our expert team is here to help you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center">
              <FaCheckCircle className="w-5 h-5 mr-2 text-green-300" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="w-5 h-5 mr-2 text-green-300" />
              <span>Customized Solutions</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="w-5 h-5 mr-2 text-green-300" />
              <span>End-to-End Support</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Button
              variant="secondary"
              className="text-sm cursor-pointer px-6 py-3"
              onClick={handleContactClick}
            >
              Get in Touch
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
