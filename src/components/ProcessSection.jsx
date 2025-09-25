import {
  HiSearch,
  HiCog,
  HiCurrencyDollar,
  HiDocumentText,
} from "react-icons/hi";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: HiSearch,
      title: "Consultancy",
      description:
        "Comprehensive property analysis and market research to identify the best revenue optimization strategy.",
      details: [
        "Property assessment",
        "Market analysis",
        "Revenue projections",
        "Feasibility study",
      ],
    },
    {
      number: "02",
      icon: HiCog,
      title: "Execution",
      description:
        "End-to-end project execution including design, construction, and operational setup.",
      details: [
        "Space planning",
        "Interior design",
        "Construction management",
        "Quality control",
      ],
    },
    {
      number: "03",
      icon: HiCurrencyDollar,
      title: "Finance",
      description:
        "Financial solutions and investment structuring to optimize capital deployment and returns.",
      details: [
        "Investment planning",
        "Funding assistance",
        "Cost optimization",
        "ROI tracking",
      ],
    },
    {
      number: "04",
      icon: HiDocumentText,
      title: "Government Liaison",
      description:
        "Complete regulatory compliance and government clearances for smooth project approval.",
      details: [
        "License procurement",
        "Compliance management",
        "Documentation",
        "Regulatory approvals",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-4">
            <span className="text-sm font-medium text-blue-600">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We Transform Your Property
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step methodology ensures seamless property
            transformation with maximum returns and minimal hassle.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 group relative z-10">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Proven Results</h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Our systematic approach consistently delivers exceptional outcomes
              for property owners across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">35%</div>
              <div className="text-white/80">Average Rental Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">6</div>
              <div className="text-white/80">Months Average Timeline</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-white/80">Compliance Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
