import React from "react";
import { Dumbbell, Heart, Users, Medal } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1" data-aos="fade-right">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-4xl font-bold mt-2 mb-6">
              The Click Fit Difference
            </h2>
            <p className="text-gray-600 mb-8">
              Click Fit is more than just a fitness program - it's a lifestyle
              revolution designed to help you achieve sustainable results while
              enjoying your fitness journey.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <FeatureItem
                icon={<Dumbbell className="w-8 h-8" />}
                title="Expert Training"
                description="Professionally designed workouts for all fitness levels"
              />
              <FeatureItem
                icon={<Heart className="w-8 h-8" />}
                title="Health Focus"
                description="Holistic approach to wellness and nutrition"
              />
              <FeatureItem
                icon={<Users className="w-8 h-8" />}
                title="Community"
                description="Supportive environment to keep you motivated"
              />
              <FeatureItem
                icon={<Medal className="w-8 h-8" />}
                title="Results Driven"
                description="Proven methods that deliver real results"
              />
            </div>
          </div>

          <div className="order-1 md:order-2" data-aos="fade-left">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg"
                alt="About Click Fit"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className="text-blue-600">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default About;
