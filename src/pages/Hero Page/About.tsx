import React from "react";
import { Button } from "@/components/ui/button";
import { Truck, Wrench, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-4   ">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Your Gateway to Opportunity
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We connect talent with opportunity across Europe. Whether you're a
            skilled professional seeking your next career move or a student
            dreaming of European education, we're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 ">
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-card p-8 rounded shadow transition-shadow  flex flex-col items-center justify-center">
              <div className="inline-block p-4 bg-primary rounded-xl mb-6 ">
                <Truck className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Professional Drivers
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Access premium trucking opportunities across Europe. We partner
                with top logistics companies seeking experienced, reliable
                drivers.
              </p>
              <Link to="/candidate/auth">
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors cursor-pointer"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-card p-8 shadow transition-shadow flex flex-col items-center justify-center">
              <div className="inline-block p-4 bg-primary rounded-xl mb-6">
                <Wrench className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Skilled Welders
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join major industrial and construction projects. Your welding
                expertise is in high demand across European industries.
              </p>
              <Link to="/welder/auth">
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors cursor-pointer"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-card p-8 shadow transition-shadow flex flex-col items-center justify-center">
              <div className="inline-block p-4 bg-primary rounded-xl mb-6">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Aspiring Students
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Take our aptitude assessment and qualify for admission to
                prestigious European universities. Your academic journey starts
                here.
              </p>
              <Link to="/admin/login">
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors cursor-pointer"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
