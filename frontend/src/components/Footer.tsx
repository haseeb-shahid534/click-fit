import React from "react";
import { Dumbbell, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center text-2xl font-bold mb-4">
              <Dumbbell className="mr-2" />
              Click Fit
            </div>
            <p className="text-gray-400 mb-6">
              Your journey to a healthier lifestyle starts here. Professional
              training, expert nutrition, and a supportive community.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook className="w-5 h-5" />} href="#" />
              <SocialLink icon={<Twitter className="w-5 h-5" />} href="#" />
              <SocialLink icon={<Instagram className="w-5 h-5" />} href="#" />
              <SocialLink icon={<Youtube className="w-5 h-5" />} href="#" />
            </div>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Programs</h5>
            <ul className="space-y-2">
              <FooterLink href="#">Strength Training</FooterLink>
              <FooterLink href="#">Cardio Conditioning</FooterLink>
              <FooterLink href="#">Yoga & Flexibility</FooterLink>
              <FooterLink href="#">Nutrition Plans</FooterLink>
              <FooterLink href="#">Recovery</FooterLink>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Company</h5>
            <ul className="space-y-2">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Our Trainers</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Newsletter</h5>
            <p className="text-gray-400 mb-4">
              Get fitness tips, workout ideas, and exclusive offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; 2025 Click Fit. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition-colors">
      {children}
    </a>
  </li>
);

export default Footer;
