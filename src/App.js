import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import "./css/style.css"
import "./css/bootstrap.min.css";
import "./App.css";


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
