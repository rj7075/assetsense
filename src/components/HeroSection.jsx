import { HiPlay, HiArrowRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 flex items-center justify-center">
          <div className="text-white text-center px-4">
            <div className="text-6xl font-bold mb-4">🏢</div>
            <p className="text-lg opacity-80">
              Commercial Real Estate Background
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-500/70 to-blue-400/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-sm font-medium">15+ Years of Excellence</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Your Partner in Maximizing
            <span className="block text-blue-200">
              Commercial Property Value
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            15+ Years of Real Estate Consultancy Excellence in India. We
            specialize in transforming commercial properties into high-yield
            revenue streams through expert consultancy, execution, and financial
            solutions.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 hover:bg-white/90 transition-all duration-300 text-lg px-8 py-4 rounded-lg font-medium flex items-center gap-2">
              Get Consultation
              <HiArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg px-8 py-4 rounded-lg font-medium flex items-center gap-2">
              <HiPlay className="h-5 w-5" />
              Explore Services
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40+</div>
              <div className="text-white/80">Virtual Offices</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Properties Transformed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
