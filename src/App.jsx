import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Createlisting from "./pages/Createlisting/Createlisting";
import FileManager from "./pages/Completedorders/Completedorders";
import Saved from "./pages/Saved/Saved";
import Setting from "./pages/Setting/Setting";
import MarketPlace from "./pages/MarketPlace/MarketPlace";
import Negotiationitems from "./pages/Analytics/Analytics";
import Product from "./pages/MarketPlace/Product";
import Productioncontract from "./pages/MarketPlace/Productioncontracts";
import Productbid from "./pages/MarketPlace/Productbid";
import Productbids from "./pages/Createlisting/Productbids";
import Productioncontracts from "./pages/Createlisting/Productioncontracts";
import Products from "./pages/Createlisting/Products";
import CProductbids from "./pages/Completedorders/CProductbids";
import CProductioncontracts from "./pages/Completedorders/CProductioncontracts";
import CProducts from "./pages/Completedorders/CProducts";
import Support from "./pages/Support/Support";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/MarketPlace" element={<MarketPlace />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Productioncontract" element={<Productioncontract/>} />
          <Route path="/Productbid" element={<Productbid />} />
          <Route path="/Createlisting" element={<Createlisting />} />
          <Route path="/Productbids" element={<Productbids />} />
          <Route path="/Productioncontracts" element={<Productioncontracts />} />
          <Route path="/Products" element={<Products />} />

          <Route path="/Negotiationitems" element={<Negotiationitems />} />
          <Route path="/CProductbids" element={<CProductbids />} />
          <Route path="/CProductioncontracts" element={<CProductioncontracts />} />
          <Route path="/CProducts" element={<CProducts />} />

          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
