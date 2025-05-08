
const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg"
          alt="Fitness Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-blue-900/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6" data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Transform Your <span className="text-blue-500">Fitness</span>{" "}
              Journey
            </h1>
            <p className="text-xl text-gray-300">
              Personalized training programs, expert coaches, and a supportive
              community to help you achieve your fitness goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#programs"
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Programs
              </a>
              <a
                href="#about"
                className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          <div
            className="hidden md:block"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg"
                alt="Fitness Training"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
