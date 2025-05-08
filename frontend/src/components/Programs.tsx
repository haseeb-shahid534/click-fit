import { Calendar, Signal } from "lucide-react";

const Programs = () => {
  return (
    <section id="programs" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Our Programs
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            Find Your Perfect Fit
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover specialized training programs tailored to your individual
            goals and fitness level
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ProgramCard
            image="https://images.pexels.com/photos/6456300/pexels-photo-6456300.jpeg"
            title="Strength Training"
            description="Build muscle, increase strength, and improve overall body composition with our expert-led strength training program."
            duration="12 Weeks"
            level="All Levels"
            badge="Popular"
          />
          <ProgramCard
            image="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg"
            title="Cardio Conditioning"
            description="Elevate your endurance, burn calories, and improve cardiovascular health with our dynamic cardio conditioning program."
            duration="8 Weeks"
            level="Beginner to Advanced"
          />
          <ProgramCard
            image="https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg"
            title="Yoga & Flexibility"
            description="Improve flexibility, reduce stress, and enhance mind-body connection with our comprehensive yoga program."
            duration="10 Weeks"
            level="All Levels"
            badge="New"
          />
        </div>
      </div>
    </section>
  );
};

const ProgramCard = ({
  image,
  title,
  description,
  duration,
  level,
  badge,
}: {
  image: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  badge?: string;
}) => (
  <div
    className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
    data-aos="fade-up"
  >
    <div className="relative">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      {badge && (
        <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {badge}
        </span>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {duration}
        </span>
        <span className="flex items-center">
          <Signal className="w-4 h-4 mr-1" />
          {level}
        </span>
      </div>
      <button className="w-full bg-transparent border-2 border-blue-600 text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
        Learn More
      </button>
    </div>
  </div>
);

export default Programs;
