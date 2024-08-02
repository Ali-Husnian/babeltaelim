const Hero = () => {
  return (
    <div
      className="hero-background relative w-full md:h-533px bg-cover bg-center"
      style={{ backgroundImage: "url('/HeroImage.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full text-white p-4">
        {/* Left Section */}
        <div className="md:w-1/3 p-4 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Digital Marketing Training Programs for Professionals & Corporates
          </h1>
          <div className="flex items-center flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 ">
            <button className="btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-orange-200 hover:before:animate-ping transition-all duration-300">
              <span className="relative">Our Courses</span>
            </button>
            <button className="btn-default overflow-hidden relative w-64 text-gray-900 py-4 px-4 rounded-xl font-bold uppercase transition-all duration-100 -- hover:shadow-md border border-stone-100 hover:bg-gradient-to-t hover:from-stone-100 before:to-stone-50 hover:-translate-y-[3px]">
              <span className="relative">Corporate Solutions</span>
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="md:w-1/3 space-y-4 md:space-y-12 mt-8 md:mt-0">
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-2 flex justify-center md:justify-end h-24 md:h-36">
              <img
                src="/Lab.png"
                alt="Logo 1"
                className="rounded-full w-24 h-24 md:w-36 md:h-36"
              />
            </div>
            <div className="col-span-2 flex items-end justify-center md:justify-end gap-3 h-24 md:h-36">
              <img
                src="/Google-Partner.jpg"
                alt="Logo 3"
                className="rounded-md w-158px h-16 md:w-206px md:h-74px"
              />
              <img
                src="/CPD-Member-Logo.png"
                alt="Logo 2"
                className="rounded-md w-124px h-24 md:w-100px md:h-96px"
              />
            </div>
            <div className="col-span-2 flex items-start justify-center md:justify-end h-24 md:h-36">
              <img
                src="/KHDA.png"
                alt="Logo 4"
                className="rounded-md w-300px h-80px md:w-80 md:h-30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
