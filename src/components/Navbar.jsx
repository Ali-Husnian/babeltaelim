import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = (menu) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/*TopNav*/}
      <div className="flex flex-col md:flex-row lg:space-x-56 lg:justify-evenly lg:px-4 md:justify-between md:px-6  items-center h-110px bg-white shadow-md">
        <div className="flex items-center my-2 md:my-0">
          <img src="logo.png" alt="Logo" className="h-46px" />
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="https://wa.me/+971509139489?text=I+want+to+know+more+about+the+digital+marketing+course?"
            target="_blank"
          >
            <img src="whatsapp.png" alt="WhatsApp" className="h-30px w-30px" />
          </Link>
          <Link
            to="tel:+971509139489"
            className="bg-blue-500 text-white rounded text-center w-196px"
          >
            Call: +971 509 139 489
          </Link>
          {isMenuOpen ? (
            <X
              size={48}
              color="black"
              className="block md:hidden p-2 focus:outline-none cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <Menu
              size={48}
              color="black"
              className="block md:hidden p-2 focus:outline-none cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
      {/*Topnav end*/}

      <div className="bg-lighter-gray hidden md:block sm:block xs:block">
        <nav className="container mx-auto p-3 ">
          <div className="flex justify-between items-center"></div>
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex justify-center space-y-2 md:space-y-0 md:space-x-8 mt-4 md:mt-0`}
          >
            <li
              className="relative transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white z-20"
              onMouseEnter={() => handleMouseEnter("professionals")}
              onMouseLeave={() => handleMouseLeave("professionals")}
            >
              <a href="#professionals" className="font-bold block px-4 py-2">
                For Professionals
              </a>
              {openDropdown === "professionals" && (
                <ul
                  className="absolute left-0 w-48 mt-0 py-2 bg-white font-bold shadow-md"
                  onMouseEnter={() => handleMouseEnter("professionals")}
                  onMouseLeave={() => handleMouseLeave("professionals")}
                >
                  <li className="hover:bg-blue-500 transition duration-300 ease-in-out">
                    <a
                      href="#professional1"
                      className="block text-black hover:text-white px-4 py-2"
                    >
                      Professional 1
                    </a>
                  </li>
                  <li className="hover:bg-blue-500 transition duration-300 ease-in-out">
                    <a
                      href="#professional2"
                      className="block text-black hover:text-white px-4 py-2"
                    >
                      Professional 2
                    </a>
                  </li>
                  <li className="hover:bg-blue-500 transition duration-300 ease-in-out">
                    <a
                      href="#professional3"
                      className="block text-black hover:text-white px-4 py-2"
                    >
                      Professional 3
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li
              className="relative transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white z-20"
              onMouseEnter={() => handleMouseEnter("companies")}
              onMouseLeave={() => handleMouseLeave("companies")}
            >
              <a href="#companies" className="font-bold block px-4 py-2">
                For Companies
              </a>
              {openDropdown === "companies" && (
                <ul
                  className="absolute left-0 w-48 mt-0 py-2 bg-white font-bold shadow-md"
                  onMouseEnter={() => handleMouseEnter("companies")}
                  onMouseLeave={() => handleMouseLeave("companies")}
                >
                  <li className="hover:bg-blue-500 transition duration-300 ease-in-out">
                    <a
                      href="#company1"
                      className="block text-black hover:text-white px-4 py-2"
                    >
                      For Companies 1
                    </a>
                  </li>
                  <li className="hover:bg-blue-500 transition duration-300 ease-in-out">
                    <a
                      href="#company2"
                      className="block text-black hover:text-white px-4 py-2"
                    >
                      For Companies 2
                    </a>
                  </li>
                  <li className="hover:bg-blue-500 transition duration-300 ease-in-out">
                    <a
                      href="#company3"
                      className="block text-black hover:text-white px-4 py-2"
                    >
                      For Companies 3
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li
              className="relative transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white z-20"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={() => handleMouseLeave("about")}
            >
              <a href="#about" className="font-bold block px-4 py-2">
                About
              </a>
              {openDropdown === "about" && (
                <ul
                  className="absolute left-0 w-48 mt-0 py-2 bg-white font-bold shadow-md "
                  onMouseEnter={() => handleMouseEnter("about")}
                  onMouseLeave={() => handleMouseLeave("about")}
                >
                  <li className="hover:bg-blue-500 transition duration-300 ease-in-out">
                    <a
                      href="#about1"
                      className="block text-black hover:text-white px-4 py-2"
                    >
                      About 1
                    </a>
                  </li>
                  <li className="hover:bg-blue-500 transition duration-300 ease-in-out">
                    <a
                      href="#about2"
                      className="block text-black hover:text-white px-4 py-2"
                    >
                      About 2
                    </a>
                  </li>
                  <li className="hover:bg-blue-500 transition duration-300 ease-in-out">
                    <a
                      href="#about3"
                      className="block text-black hover:text-white px-4 py-2"
                    >
                      About 3
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li
              className="relative transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white z-20"
              onMouseEnter={() => handleMouseEnter("institutes")}
              onMouseLeave={() => handleMouseLeave("institutes")}
            >
              <a href="#institutes" className="font-bold block px-4 py-2">
                For Institutes
              </a>
              {openDropdown === "institutes" && (
                <ul
                  className="absolute left-0 w-48 mt-0 py-2 bg-white font-bold shadow-md"
                  onMouseEnter={() => handleMouseEnter("institutes")}
                  onMouseLeave={() => handleMouseLeave("institutes")}
                >
                  <li className="hover:bg-blue-500 transition duration-300 ease-in-out">
                    <a
                      href="#institute1"
                      className="block text-black hover:text-white px-4 py-2"
                    >
                      For Institutes 1
                    </a>
                  </li>
                  <li className="hover:bg-blue-500 transition duration-300 ease-in-out">
                    <a
                      href="#institute2"
                      className="block text-black hover:text-white px-4 py-2"
                    >
                      For Institutes 2
                    </a>
                  </li>
                  <li className="hover:bg-blue-500 transition duration-300 ease-in-out">
                    <a
                      href="#institute3"
                      className="block text-black hover:text-white px-4 py-2"
                    >
                      For Institutes 3
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className="transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
              <a href="#contact" className="font-bold block px-4 py-2">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
