import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  Menu,
  X,
  Home,
  PanelsTopLeft,
  Workflow,
  Mail,
  Users,
  Hammer,
  GraduationCap,
  Shield,
} from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navBgClass = isScrolled
    ? "bg-background shadow-lg"
    : "bg-transparent backdrop-blur-sm";
  const logoTextClass = "text-primary-foreground";
  const menuTextClass = "text-primary-foreground hover:text-primary";
  const mobileButtonTextClass = "text-primary-foreground";
  const mobileMenuBgClass = "bg-background shadow-lg rounded-b-lg";

  const handleSubItemClick = () => {
    setIsOpen(false);
    setShowSubmenu(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ease-in-out ${navBgClass}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div
          className={`text-2xl font-bold transition-colors duration-300 ${logoTextClass}`}
        >
          DriveVault
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none transition-colors duration-300 ${mobileButtonTextClass}`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`md:flex md:space-x-6 transition-all duration-300 ${
            isOpen
              ? "flex flex-col absolute top-full left-0 w-full py-4 px-4 space-y-4"
              : "hidden md:flex"
          } ${isOpen ? mobileMenuBgClass : ""}`}
        >
          <div
            className={`flex items-center space-x-2 cursor-pointer transition-colors duration-300 ${menuTextClass}`}
          >
            <Home className="h-5 w-5" />
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </div>
          <div
            className={`flex items-center space-x-2 cursor-pointer transition-colors duration-300 ${menuTextClass}`}
          >
            <PanelsTopLeft className="h-5 w-5" />
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Who We Are
            </Link>
          </div>
          <div
            className={`flex items-center space-x-2 cursor-pointer transition-colors duration-300 ${menuTextClass}`}
          >
            <Workflow className="h-5 w-5" />
            <Link
              to="process"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Works
            </Link>
          </div>
          <div className={!isMobile ? "group relative" : ""}>
            <div
              className={`flex items-center space-x-2 cursor-pointer transition-colors duration-300 ${menuTextClass}`}
              onClick={() => isMobile && setShowSubmenu(!showSubmenu)}
            >
              <Users className="h-5 w-5" />
              <span>Contract</span>
            </div>

            <div
              className={`
                ${
                  isMobile
                    ? showSubmenu
                      ? "flex flex-col space-y-2 mt-2 w-full "
                      : "hidden"
                    : "absolute top-full left-3 w-48 bg-background shadow-lg rounded-md py-2 mt-2  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                }
              `}
            >
              <div
                className={`flex items-center space-x-2 cursor-pointer transition-colors duration-300 ${menuTextClass} ${
                  isMobile ? "pl-4 py-2" : "py-2 px-4 hover:bg-gray-100"
                }`}
                onClick={handleSubItemClick}
              >
                <Shield className="h-5 w-5 flex-shrink-0" />
                <a href="/admin/login">Admin</a>
              </div>
              <div
                className={`flex items-center space-x-2 cursor-pointer transition-colors duration-300 ${menuTextClass} ${
                  isMobile ? "pl-4 py-2" : "py-2 px-4 hover:bg-gray-100"
                }`}
                onClick={handleSubItemClick}
              >
                <Users className="h-5 w-5 flex-shrink-0" />
                <a href="/candidate/auth">Drivers</a>
              </div>
              <div
                className={`flex items-center space-x-2 cursor-pointer transition-colors duration-300 ${menuTextClass} ${
                  isMobile ? "pl-4 py-2" : "py-2 px-4 hover:bg-gray-100"
                }`}
                onClick={handleSubItemClick}
              >
                <Hammer className="h-5 w-5 flex-shrink-0" />
                <a href="/welder/auth">Welders</a>
              </div>
              <div
                className={`flex items-center space-x-2 cursor-pointer transition-colors duration-300 ${menuTextClass} ${
                  isMobile ? "pl-4 py-2" : "py-2 px-4 hover:bg-gray-100"
                }`}
                onClick={handleSubItemClick}
              >
                <GraduationCap className="h-5 w-5 flex-shrink-0" />
                <a href="/admin/login">Students</a>
              </div>
            </div>
          </div>
          <div
            className={`flex items-center space-x-2 cursor-pointer transition-colors duration-300 ${menuTextClass}`}
          >
            <Mail className="h-5 w-5" />
            <Link
              to="footer"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>

          {/* Contract Submenu */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
