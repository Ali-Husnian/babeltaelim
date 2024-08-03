import Hero from "../components/Hero";
import Certifications from "../components/Certifications";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import AdvisoryCouncil from "../components/AdvisoryCouncil";
import SpecializedCourses from "../components/SpecializedCourses";
import LmsPotential from "../components/LmsPotential";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Certifications />
      <Services />
      <AdvisoryCouncil />
      <SpecializedCourses />
      <LmsPotential />

      {/*
       */}
    </div>
  );
};

export default Home;
