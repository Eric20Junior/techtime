import { React, useState } from "react";
import techtime from "../../assets/techtime.png";
import "../Navbar/Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import { FaXmark } from "react-icons/fa6";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    // Navbar section
    <div className="sticky top-0">
      <div className="main-nav flex justify-between sm:flex sm:justify-between px-4 lg:px-16 py-8 ">
        <img className="h-full lg:w-18 sm:w-18" src={techtime} alt="" />

        {/* pc nav */}

        <div className="nav-links lg:space-x-4 lg:flex lg:items-center text-sm text-gray-400 font-bold xs:hidden">
          <div>
            <Link
              to="#home"
              smooth
              className="flex justify-between items-center"
            >
              <a href="/" className="text-white">
                Home
              </a>
              <FaXmark
                onClick={handleNavToggle}
                className=" cursor-pointer lg:hidden text-white h-8"
              />
            </Link>
          </div>

          <div>
            <Link to="#about" smooth>
              <a href="#about">About Us</a>
            </Link>
          </div>

          <div>
            <Link to="#courses" smooth>
              <a href="#courses">Courses</a>
            </Link>
          </div>

          <div>
            <Link to="#testimonial" smooth>
              <a href="#testimonial">Testimonial</a>
            </Link>
          </div>

          <div>
            <Link to="#community" smooth>
              <a href="#community">Community</a>
            </Link>
          </div>

          <button>Enroll Now</button>
        </div>

        {/* mobile nav */}
        <div
          className={`${
            navOpen
              ? "fixed left-0 top-0 z-20 w-[45%] sm:w-[50%] h-full p-7 sm:p-10 ease-in duration-700 lg:hidden bg-[#004DB3]"
              : "fixed left-[-100%] z-20 top-0 w-[45%%] p-10 ease-in duration-700 bg-[#004DB3]"
          } nav-links lg:space-x-4 lg:flex text-sm text-gray-400 font-bold space-y-6  `}
        >
          <div>
            <Link
              to="#home"
              smooth
              className="flex justify-between items-center"
            >
              <a href="/" className="text-white">
                Home
              </a>
              <FaXmark
                onClick={handleNavToggle}
                className=" cursor-pointer lg:hidden text-white h-8"
              />
            </Link>
          </div>

          <div>
            <Link to="#about" smooth>
              <a href="#about">About Us</a>
            </Link>
          </div>

          <div>
            <Link to="#courses" smooth>
              <a href="#courses">Courses</a>
            </Link>
          </div>

          <div>
            <Link to="#testimonial" smooth>
              <a href="#testimonial">Testimonial</a>
            </Link>
          </div>

          <div>
            <Link to="#community" smooth>
              <a href="#community">Community</a>
            </Link>
          </div>

          <button>Enroll Now</button>
        </div>

        {!navOpen && (
          <div
            class="block lg:hidden cursor-pointer"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <div class="space-y-2">
              <span class="block w-6 lg:w-8 h-0.5 bg-white pulse"></span>
              <span class="block w-6 lg:w-8 h-0.5 bg-white pulse"></span>
              <span class="block w-6 lg:w-8 h-0.5 bg-white pulse"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
