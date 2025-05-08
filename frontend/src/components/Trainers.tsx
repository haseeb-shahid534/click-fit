import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const Trainers = () => {
  return (
    <section id="trainers" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Expert Coaches
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Meet Our Trainers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our certified fitness professionals are dedicated to helping you
            achieve your goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <TrainerCard
            image="https://images.pexels.com/photos/6456209/pexels-photo-6456209.jpeg"
            name="Sarah Johnson"
            role="Strength & Conditioning"
            description="Former professional athlete with 10+ years of coaching experience, specializing in strength training and athletic performance."
          />
          <TrainerCard
            image="https://images.pexels.com/photos/4398884/pexels-photo-4398884.jpeg"
            name="Michael Torres"
            role="Nutrition & Weight Loss"
            description="Certified nutritionist and personal trainer with expertise in creating sustainable weight management programs."
          />
          <TrainerCard
            image="https://images.pexels.com/photos/6456150/pexels-photo-6456150.jpeg"
            name="Emma Chen"
            role="Yoga & Mobility"
            description="Certified yoga instructor with additional training in movement therapy and injury rehabilitation."
          />
        </div>
      </div>
    </section>
  );
};

const TrainerCard = ({
  image,
  name,
  role,
  description,
}: {
  image: string;
  name: string;
  role: string;
  description: string;
}) => (
  <div
    className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
    data-aos="fade-up"
  >
    <div className="h-80 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="p-6 text-center">
      <h4 className="text-2xl font-bold mb-1">{name}</h4>
      <span className="text-blue-600 font-semibold block mb-4">{role}</span>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex justify-center space-x-4">
        <SocialLink icon={<Instagram className="w-5 h-5" />} href="#" />
        <SocialLink icon={<Facebook className="w-5 h-5" />} href="#" />
        <SocialLink icon={<Linkedin className="w-5 h-5" />} href="#" />
      </div>
    </div>
  </div>
);

const SocialLink = ({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
  >
    {icon}
  </a>
);

export default Trainers;
