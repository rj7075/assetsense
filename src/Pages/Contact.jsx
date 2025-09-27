import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaShieldAlt,
  FaUsers,
  FaArrowRight,
  FaAward,
  FaPaperPlane,
  FaCheckCircle,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);

    // Hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      property: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Call Us",
      content: "+91 9907800600",
      action: "tel:+919907800600",
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      content: "info@assetsense.in",
      action: "mailto:info@assetsense.in",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      content:
        "207, 2nd Floor, Emaar The Palm Square, Rajesh Pilot Marg, Sector 66, Gurugram, Haryana - 122101",
      action: "#",
    },
    {
      icon: FaClock,
      title: "Working Hours",
      content: "Mon-Sat: 9AM-7PM",
      action: "#",
    },
  ];
  // Custom Button Component
  const Button = ({ children, className = "", ...props }) => (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  // Custom Input Component
  const Input = ({ className = "", ...props }) => (
    <input
      className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${className}`}
      {...props}
    />
  );

  // Custom Textarea Component
  const Textarea = ({ className = "", ...props }) => (
    <textarea
      className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${className}`}
      {...props}
    />
  );

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      id="contact"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            itemProp="headline"
          >
            Let's Build Your Business Together
          </h1>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            itemProp="description"
          >
            We'd love to hear from you! Whether you need a Virtual Office in
            India, GST registration help, commercial leasing in Gurugram & Delhi
            NCR, or interior design services - we're here to help.
          </p>
        </div> */}

        {/* <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Get in Touch
              </h2>

              <div
                className="space-y-4"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <div className="flex items-start space-x-3 group cursor-pointer">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <FaPhone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600" itemProp="telephone">
                      +91 9876543210
                    </p>
                    <p className="text-sm text-gray-500">
                      Mon-Sat: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group cursor-pointer">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <FaEnvelope className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600" itemProp="email">
                      contact@yourbusiness.com
                    </p>
                    <p className="text-sm text-gray-500">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group cursor-pointer">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <FaMapMarkerAlt className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600" itemProp="address">
                      DLF Cyber City, Gurugram
                      <br />
                      Haryana 122002, India
                    </p>
                    <p className="text-sm text-gray-500">
                      Serving Delhi NCR & Pan India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl shadow-xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <FaAward className="h-6 w-6 text-white mx-auto" />
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-white/90 text-sm">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <FaUsers className="h-6 w-6 text-white mx-auto" />
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-white/90 text-sm">Happy Clients</div>
                </div>
                <div className="space-y-2">
                  <FaShieldAlt className="h-6 w-6 text-white mx-auto" />
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-white/90 text-sm">Compliance</div>
                </div>
              </div>
            </div>

           
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <FaBuilding className="h-5 w-5 mr-2 text-blue-600" />
                Our Services
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Virtual Office Solutions",
                  "GST Registration & Filing",
                  "Commercial Property Leasing",
                  "Interior Design & Build",
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <FaCheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

         
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    Ready to Get Started?
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you with a
                    personalized solution.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-gray-700 font-medium"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-gray-700 font-medium"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-gray-700 font-medium"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-gray-700 font-medium"
                      >
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-gray-700 font-medium"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements - Virtual Office, GST solutions, commercial leasing, or interior design..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white flex items-center justify-center space-x-2 px-6 py-3 shadow-lg hover:shadow-xl"
                    >
                      <FaPaperPlane className="h-4 w-4" />
                      <span>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>
                    </Button>
                    <Button
                      type="button"
                      className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3"
                    >
                      Book Free Consultation
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> */}

        {/* another contact form */}

        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-4">
              <span className="text-sm font-medium text-blue-600">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Maximize Your Commercial Property Returns
              <span className="block text-blue-600">with Asset Sense</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to transform your property into a high-yield investment? Let
              our experts provide you with a comprehensive consultation and
              customized strategy for maximum returns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold mb-6">
                  Schedule Your Free Consultation
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Full Name*
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone Number*
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address*
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="property"
                      className="block text-sm font-medium mb-2"
                    >
                      Property Location
                    </label>
                    <input
                      id="property"
                      name="property"
                      type="text"
                      value={formData.property}
                      onChange={handleChange}
                      placeholder="City or area of your property"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your property and goals..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all h-24 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                  >
                    Get Free Consultation
                    <FaArrowRight className="ml-2" />
                  </button>
                </form>

                {/* WhatsApp CTA */}
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FaWhatsapp className="text-2xl text-green-600" />
                      <div>
                        <p className="font-medium text-green-800">
                          Quick WhatsApp Consultation
                        </p>
                        <p className="text-sm text-green-600">
                          Get instant response
                        </p>
                      </div>
                    </div>
                    <button
                      className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-200"
                      onClick={() =>
                        window.open("https://wa.me/919907800600", "_blank")
                      }
                    >
                      Chat Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in-up">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-4"
                        >
                          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                            <IconComponent className="text-xl text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">{info.title}</p>
                            <a
                              href={info.action}
                              className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              {info.content}
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Cities Presence */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <h4 className="font-semibold mb-4">
                    Our Presence Across India
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    {[
                      "Delhi",
                      "Gurgaon",
                      "Mumbai",
                      "Noida",
                      "Ahmedabad",
                      "Pune",
                      "Bangalore",
                      "Hyderabad",
                      "Gandhinagar",
                      "Guhati",
                    ].map((city) => (
                      <div key={city} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {city}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Success Story */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                  <h4 className="font-semibold mb-3 text-blue-600">
                    Recent Success
                  </h4>
                  <p className="text-sm text-gray-600 italic mb-3">
                    "A property owner in Gurgaon increased rental yield by 35%
                    after converting into a coworking hub with our execution
                    support."
                  </p>
                  <p className="text-xs text-blue-600 font-medium">
                    - Completed in 4 months
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Need Immediate Assistance?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our business experts are available to discuss your Virtual Office,
            GST, commercial leasing, and interior design needs right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 shadow-lg hover:shadow-xl"
              onClick={() => window.open("tel:+919876543210")}
            >
              <FaPhone className="h-4 w-4 mr-2" />
              Call Now: +91 9876543210
            </Button>
            <Button
              className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3"
              onClick={() =>
                window.open(
                  "https://wa.me/919876543210?text=Hi, I need assistance with business services"
                )
              }
            >
              <FaWhatsapp className="h-4 w-4 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Your Business Services",
            description:
              "Professional Virtual Office, GST Solutions, Commercial Leasing, and Interior Design services across India",
            url: "https://yourbusiness.com",
            telephone: "+91-9876543210",
            email: "contact@yourbusiness.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "DLF Cyber City",
              addressLocality: "Gurugram",
              addressRegion: "Haryana",
              postalCode: "122002",
              addressCountry: "IN",
            },
            areaServed: ["Delhi NCR", "India"],
            serviceType: [
              "Virtual Office",
              "GST Solutions",
              "Commercial Leasing",
              "Interior Design",
            ],
            foundingDate: "2009",
            numberOfEmployees: "50-100",
          }),
        }}
      />
    </section>
  );
};

export default Contact;
