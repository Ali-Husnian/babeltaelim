// List of logos (you should replace these with the actual paths to your images)
const logos = [
  "companies/academy.jpeg",
  "companies/aster.jpg",
  "companies/carlson.png",
  "companies/Chaloub.png",
  "companies/dar.jpg",
  "companies/dubai_tourism.jpeg",
  "companies/etisalat.jpg",
  "companies/fitness.png",
  "companies/flydubai.png",
  "companies/giordano.png",
  "companies/homecenter.png",
  "companies/jw.jpg",
  "companies/mcdonalds.png",
  "companies/meraas.jpg",
  "companies/mmi.jpg",
  "companies/nn.png",
  "companies/nynabudhabi.png",
  "companies/pirelli.png",
  "companies/samsung.jpeg",
  "companies/Saudi.png",
  "companies/sheration.jpg",
  "companies/tukolbo.png",
  "companies/unisharjah.png",
  "companies/zeetv.jpg",
];

const CompanyLogo = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-1xl font-medium mb-6 text-blue-600 uppercase tracking-wide">
        Professionals from companies like
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center p-2">
            <img src={logo} alt={`Logo ${index + 1}`} className="h-16" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;