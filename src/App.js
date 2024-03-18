import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./css/style.css"
import "./css/bootstrap.min.css";
import "./App.css";
import CollectionPage from "./pages/CollectionPage/CollectionPage";

function App() {
  return (
    <div>
     <Router>
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<CollectionPage />} />
        </Routes>
     
      </Router>
    </div>
  );
}

export default App;
