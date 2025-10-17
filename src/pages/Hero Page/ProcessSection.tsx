import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Truck, Wrench, GraduationCap, CheckCircle } from "lucide-react";

const driverSteps = [
  {
    title: "Create Profile",
    description:
      "Sign up and complete your professional driver profile with certifications and experience",
  },
  {
    title: "Get Verified",
    description:
      "Our team reviews your credentials and driving history to ensure quality standards",
  },
  {
    title: "Match & Connect",
    description:
      "Get matched with leading European logistics companies seeking skilled drivers",
  },
  {
    title: "Start Driving",
    description:
      "Begin your new role with competitive pay, benefits, and professional support",
  },
];

const welderSteps = [
  {
    title: "Register",
    description:
      "Create your account and showcase your welding certifications and specializations",
  },
  {
    title: "Skills Assessment",
    description:
      "Complete our technical evaluation to verify your welding expertise",
  },
  {
    title: "Project Matching",
    description:
      "Connect with major industrial projects requiring your specific welding skills",
  },
  {
    title: "Begin Work",
    description:
      "Start your assignment with top-tier projects and attractive compensation packages",
  },
];

const studentSteps = [
  {
    title: "Take Assessment",
    description:
      "Complete our comprehensive aptitude exam covering academic fundamentals",
  },
  {
    title: "Results Review",
    description:
      "Receive detailed evaluation of your academic strengths and potential",
  },
  {
    title: "University Matching",
    description:
      "Get shortlisted for universities matching your profile and aspirations",
  },
  {
    title: "Enrollment Support",
    description:
      "Receive guidance through the admission and visa application process",
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 px-4 ">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our streamlined process makes it easy to start your journey. Select
            your path below to see how we can help.
          </p>
        </div>

        <Tabs defaultValue="drivers" className="w-full ">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 cursor-pointer">
            <TabsTrigger
              value="drivers"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Truck className="w-4 h-4" />
              <span className="hidden sm:inline">Drivers</span>
            </TabsTrigger>
            <TabsTrigger
              value="welders"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Wrench className="w-4 h-4" />
              <span className="hidden sm:inline">Welders</span>
            </TabsTrigger>
            <TabsTrigger
              value="students"
              className="flex items-center gap-2 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Students</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="drivers" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {driverSteps.map((step, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 "
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r bg-primary" />
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2 justify-between">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <CheckCircle className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardTitle className="text-xl ">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="welders" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {welderSteps.map((step, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2 justify-between">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <CheckCircle className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="students" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studentSteps.map((step, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r bg-primary" />
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2 justify-between">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <CheckCircle className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
