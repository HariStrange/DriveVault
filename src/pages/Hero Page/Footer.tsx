import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-primary-foreground text-2xl font-bold mb-4">
              DriveVault
            </h3>
            <p className="text-primary-foreground">
              Connecting talent with opportunity across Europe. Building
              careers, shaping futures.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="bg-blue-700 p-2 text-white rounded-full transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-sky-500 p-2 rounded-full text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-700 p-2 rounded-full text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gradient-to-r from-purple-500 to-pink-300 p-2 rounded-full text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-primary-foreground text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className=" transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className=" transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className=" transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className=" transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/candidate/auth" className=" transition-colors">
                  Driver Recruitment
                </a>
              </li>
              <li>
                <a href="/welder/auth" className=" transition-colors">
                  Welder Placement
                </a>
              </li>
              <li>
                <a href="/admin/login" className="transition-colors">
                  Student Assessment
                </a>
              </li>
              <li>
                <a href="#" className=" transition-colors">
                  Corporate Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>contact@drivevault.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  123 Business Ave, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-primary-foreground mb-2">
                "Excellence is not a destination; it's a continuous journey."
              </p>
              <p className="text-sm text-primary-foreground">
                Your success story begins here
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-primary-foreground mb-2">
            Powered by{" "}
            <span className="text-white font-semibold">
              Sholas Technologies
            </span>
          </p>
          <p className="text-sm text-primary-foreground">
            © 2025 DriveVault Recruit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
