import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

const ContactSection = () => {
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
      content: "+91 98765 43210",
      action: "tel:+919876543210",
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      content: "info@assetsense.com",
      action: "mailto:info@assetsense.com",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      content: "Gurgaon, Delhi NCR",
      action: "#",
    },
    {
      icon: FaClock,
      title: "Working Hours",
      content: "Mon-Sat: 9AM-7PM",
      action: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          <div className="font-semibold">Consultation Request Sent!</div>
          <div className="text-sm">
            We'll contact you within 24 hours to discuss your property
            transformation.
          </div>
        </div>
      )}

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
                      placeholder="+91 98765 43210"
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
                    placeholder="your.email@example.com"
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
                      window.open("https://wa.me/919876543210", "_blank")
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
                      <div key={index} className="flex items-center space-x-4">
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

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
