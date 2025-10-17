import React from "react";
import { HeroCarousel } from "./Hero Page/HeroCarousual";
import { AboutSection } from "./Hero Page/About";
import { ProcessSection } from "./Hero Page/ProcessSection";
import { Footer } from "./Hero Page/Footer";
import Navbar from "./Hero Page/Header";

export const LandingPage: React.FC = () => {
  return (
    // <div className="min-h-screen relative">
    //   {/* Theme Toggle Button */}
    //   <Button
    //     variant="ghost"
    //     onClick={toggleTheme}
    //     className="absolute top-6 right-6 z-20 p-2"
    //     aria-label="Toggle theme"
    //   >
    //     {theme === "dark" ? (
    //       <Sun className="h-5 w-5" />
    //     ) : (
    //       <Moon className="h-5 w-5" />
    //     )}
    //   </Button>

    //   {/* Hero Section */}
    //   <section
    //     ref={heroRef}
    //     className=" overflow-hidden py-20 px-4 min-h-[90vh] flex items-center justify-center relative"
    //   >
    //     <div className="container mx-auto text-center relative z-10">
    //       <div className="hero-title mb-6">
    //         <Truck className="h-20 w-20 mx-auto mb-6 text-primary" />
    //         <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
    //           DriveVault Recruit
    //         </h1>
    //       </div>

    //       <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
    //         Connecting skilled truck drivers with opportunities across Europe.
    //         Your journey to professional driving excellence starts here.
    //       </p>

    //       <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
    //         <Button
    //           asChild
    //           size="lg"
    //           className="text-lg px-8 py-4 hover:scale-105 transition-transform"
    //         >
    //           <Link to="/admin/login">
    //             <Shield className="h-5 w-5 mr-2" />
    //             Admin Login
    //           </Link>
    //         </Button>

    //         <Button
    //           asChild
    //           size="lg"
    //           variant="outline"
    //           className="text-lg px-8 py-4 hover:scale-105 transition-transform"
    //         >
    //           <Link to="/candidate/auth">
    //             <Users className="h-5 w-5 mr-2" />
    //             Driver Portal
    //           </Link>
    //         </Button>

    //         <Button
    //           asChild
    //           size="lg"
    //           variant="outline"
    //           className="text-lg px-8 py-4 hover:scale-105 transition-transform"
    //         >
    //           <Link to="/welder/auth">
    //             <Wrench className="h-5 w-5 mr-2" />
    //             Welder Portal
    //           </Link>
    //         </Button>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Footer */}
    //   <footer className="bg-card border-t  py-8 px-4">
    //     <div className="container mx-auto text-center">
    //       <p className="text-muted-foreground">
    //         © 2025 Sholas Technologies. All rights reserved.
    //       </p>
    //     </div>
    //   </footer>
    // </div>
    <div>
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <ProcessSection />
      <Footer />
    </div>
  );
};
