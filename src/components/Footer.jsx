const Footer = () => {
  return (
    <footer>
      <div className="text-center bg-[#2B689C] py-10 space-y-5">
        <div className="flex flex-wrap justify-center items-center space-x-4 max-sm:space-x-2 space-y-4 sm:space-y-0">
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="footer/whatsapp.png"
              alt="WhatsApp"
              className="h-10 max-sm:mt-3"
            />
          </a>
          <a
            href="https://www.instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="footer/insta.png" alt="Instagram" className="h-10" />
          </a>

          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="footer/linkdin.png" alt="LinkedIn" className="h-10" />
          </a>
          <a
            href="https://www.blogger.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="footer/blogger.png" alt="Blogger" className="h-10" />
          </a>
          <a
            href="https://www.youtube.com/your-channel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="footer/youtube.png" alt="YouTube" className="h-10" />
          </a>
        </div>

        <div className="text-sm text-li-gray">
          <a href="#" className="hover:underline">
            About
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Specialized Modules
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            T&C
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Blog
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-wrap justify-between py-10 space-y-5">
        <div className="flex justify-center items-center w-full sm:w-auto">
          <img src="Final-Logo.png" alt="Dubai Knowledge" className="h-20" />
        </div>
        <div className="flex justify-around w-full sm:w-auto">
          <img src="khda-logo.png" alt="Dubai Knowledge" className="h-16" />
          <img src="CPD-Member-Logo.png" alt="CPD Member" className="h-16" />
          <img src="Lab.png" alt="Digital Innovation Labs" className="h-16" />
        </div>
      </div>

      <div className="bg-[#2B689C] text-li-gray text-center py-10 space-y-5">
        <div className="text-sm">
          in5 Tech, Investor Hub, Dubai Knowledge Village, Dubai Internet City,
          Dubai - 54106, UAE
        </div>
        <div className="text-sm mt-2">
          Babeltaelim © 2024 All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
