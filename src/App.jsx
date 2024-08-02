import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            {/*
              <Route
              path={AppRoutes.Dashboard + AppRoutes.Positon}
              element={<Positon />}
            />
            */}
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
