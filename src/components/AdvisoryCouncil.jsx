const AdvisoryCouncil = () => {
  const members = [
    { name: "Etisalat", imgSrc: "industry/etisalat.jpg" },
    { name: "Microsoft", imgSrc: "industry/microsoft.png" },
    { name: "Google", imgSrc: "industry/google.png" },
    { name: "Facebook", imgSrc: "industry/facebook-logo.png" },
    { name: "Meraas", imgSrc: "industry/madars.png" },
    { name: "IMT", imgSrc: "industry/institue.jpg" },
    { name: "TiE", imgSrc: "industry/tie.jpeg" },
    { name: "Fetchr", imgSrc: "industry/fetchr.png" },
  ];

  return (
    <div className="flex flex-col items-center py-8 px-4">
      <h2 className="text-center text-gray-600 text-xl mb-10">
        Industry Advisory Council Members Include:
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {members.map((member) => (
          <div key={member.name} className="flex items-center justify-center">
            <img
              src={member.imgSrc}
              alt={member.name}
              className="h-8 sm:h-10 md:h-8 lg:h-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvisoryCouncil;
