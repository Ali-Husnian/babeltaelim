import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
