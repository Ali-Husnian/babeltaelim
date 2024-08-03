const LmsPotential = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-start">
        <h1 className="text-3xl font-medium mb-10">
          Unlock Your Potential with Babeltaelim.ae
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-blue-500 text-white md:rounded-s-md space-y-28 p-8">
          <h2 className="text-4xl font-medium mb-4">
            We help businesses to digitally transform their processes & amplify
            growth.
          </h2>
          <button className="bg-blue-900 text-white font-bold py-2 px-4 rounded-md hover:bg-[#2B689C]">
            Learn More
          </button>
        </div>
        <div>
          <img
            src="lms.jpg"
            alt="Two people working in an office"
            className="md:rounded-e-md w-600px h-400px"
          />
        </div>
      </div>
    </div>
  );
};

export default LmsPotential;
