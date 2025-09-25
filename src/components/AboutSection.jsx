import {
  HiTrendingUp,
  HiLocationMarker,
  HiShieldCheck,
  HiCheckCircle,
} from "react-icons/hi";

const AboutSection = () => {
  const achievements = [
    {
      icon: HiTrendingUp,
      title: "15+ Years Experience",
      description:
        "Over a decade and a half of proven success in real estate consultancy",
    },
    {
      icon: HiLocationMarker,
      title: "Pan-India Presence",
      description:
        "Operating in Delhi, Gurgaon, Mumbai, Noida, Ahmedabad and other major cities",
    },
    {
      icon: HiShieldCheck,
      title: "Government Liaison",
      description:
        "Expert handling of complex projects including government clearances",
    },
    {
      icon: HiCheckCircle,
      title: "End-to-End Solutions",
      description:
        "Complete consultancy, execution, and financial support under one roof",
    },
  ];

  const stats = [
    { number: "500+", label: "Properties Transformed" },
    { number: "₹200Cr+", label: "Value Generated" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "40+", label: "Virtual Office Locations" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-6">
              <span className="text-sm font-medium text-blue-600">
                About Asset Sense
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted Real Estate Consultancy
              <span className="text-blue-600"> Since 2008</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Asset Sense has been at the forefront of commercial real estate
              transformation for over 15 years. We specialize in maximizing
              rental value for property owners through innovative space
              solutions, strategic consultancy, and seamless execution across
              India.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Our comprehensive approach combines deep market knowledge with
              practical execution capabilities, ensuring that every project
              delivers exceptional returns. From coworking spaces to virtual
              offices, we've successfully transformed hundreds of properties
              across major Indian cities.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Side */}
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">
                  Excellence in Numbers
                </h3>
                <p className="text-white/80 mb-8">
                  Our track record speaks for itself
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold mb-2">
                        {stat.number}
                      </div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <p className="text-sm text-white/90 italic">
                    "Asset Sense transformed our underperforming commercial
                    property into a thriving coworking space, increasing our
                    rental yield by 40% within 6 months."
                    <span className="block mt-2 font-medium">
                      - Rajesh Kumar, Property Owner, Gurgaon
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
