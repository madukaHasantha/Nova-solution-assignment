import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BridalPage from "./pages/BridalPage/BridalPage";

function App() {
  return (
    <div>
     <Router>
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<BridalPage />} />
        </Routes>
     
      </Router>
    </div>
  );
}

export default App;
