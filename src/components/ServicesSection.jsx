import {
  HiUserGroup,
  HiHome,
  HiBuildingOffice,
  HiMapPin,
  HiAcademicCap,
  HiHeart,
} from "react-icons/hi2";

const ServicesSection = () => {
  const services = [
    {
      icon: HiUserGroup,
      title: "Coworking Spaces",
      description:
        "Transform your property into thriving coworking hubs with maximum occupancy and premium rental yields.",
      features: [
        "Flexible layouts",
        "Community management",
        "Technology integration",
      ],
    },
    {
      icon: HiHome,
      title: "Coliving Spaces",
      description:
        "Create modern coliving experiences that attract young professionals and maximize long-term rental income.",
      features: [
        "Furnished units",
        "Community amenities",
        "Property management",
      ],
    },
    {
      icon: HiBuildingOffice,
      title: "Serviced Apartments",
      description:
        "Convert properties into high-end serviced apartments for corporate clients and extended-stay guests.",
      features: [
        "Premium furnishing",
        "Concierge services",
        "Corporate contracts",
      ],
    },
    {
      icon: HiMapPin,
      title: "Virtual Offices",
      description:
        "Establish virtual office networks across India with our proven 40+ locations success model.",
      features: ["Prime addresses", "Mail handling", "Meeting rooms"],
      highlight: "40+ Locations Across India",
    },
    {
      icon: HiAcademicCap,
      title: "Educational Hubs",
      description:
        "Develop educational facilities and training centers with proper compliance and infrastructure.",
      features: [
        "Regulatory compliance",
        "Modern infrastructure",
        "Student amenities",
      ],
    },
    {
      icon: HiHeart,
      title: "Poly Clinics",
      description:
        "Set up medical facilities with full regulatory support and healthcare infrastructure planning.",
      features: [
        "Medical compliance",
        "Equipment planning",
        "Patient flow design",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-4">
            <span className="text-sm font-medium text-blue-600">
              Our Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Specialized Real Estate Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end consultancy services across diverse commercial
            real estate segments, ensuring maximum returns and seamless
            execution for property owners across India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:translate-y-[-4px] transition-all duration-300 group"
              >
                {/* Service Icon */}
                <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                {service.highlight && (
                  <div className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-3">
                    {service.highlight}
                  </div>
                )}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Ready to Transform Your Property?
            </h3>
            <p className="text-gray-600 mb-6">
              Let our 15+ years of expertise help you maximize your commercial
              property returns.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
