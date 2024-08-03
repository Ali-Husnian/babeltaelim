const Services = () => {
  const services = [
    {
      title: "For Professionals & Entrepreneurs",
      items: [
        "Professional Diploma in Digital Marketing",
        "Professional Diploma in Social Media Marketing",
        "Google Ads, SEO & Google Analytics Masterclass",
      ],
    },
    {
      title: "For Businesses & Government",
      items: [
        "Team Training & Coaching",
        "Digital Audit Services",
        "Digital Marketing Services",
        "Professional Certification in Digital Marketing",
        "Professional Certification in Social Media Marketing",
      ],
    },
    {
      title: "For Educators & Students",
      items: [
        "Industry-Approved Training Courses for Students",
        "Faculty Development Program for Teachers",
        "Internship Training Programs",
      ],
    },
  ];

  return (
    <div className="container w-950px mx-auto pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="text-left md:text-left ml-4">
            <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
            <div className="border-b-4 border-blue-400 w-250px mx-0 mb-4"></div>
            <ul className="space-y-4">
              {service.items.map((item, idx) => (
                <li key={idx} className="text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
