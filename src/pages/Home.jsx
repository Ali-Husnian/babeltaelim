import Hero from "../components/Hero";
import Certifications from "../components/Certifications";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import AdvisoryCouncil from "../components/AdvisoryCouncil";
import SpecializedCourses from "../components/SpecializedCourses";
import LmsPotential from "../components/LmsPotential";
import GroupMasterClass from "../components/GroupMasterClass";
import CompanyLogo from "../components/CompanyLogo";

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
      <GroupMasterClass />
      <CompanyLogo />

      {/*
       */}
    </div>
  );
};

export default Home;
