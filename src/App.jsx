import "./App.css";
import SideBar from "./components/NGFcomp/Sidebar/SideBar.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/BhusatyamNGF/Dashboard/Dashboard";
import Marketplace from "./components/NGFcomp/Marketplace";
import Product from "./pages/BhusatyamNGF/MarketPlace/Product";
import Productioncontract from "./pages/BhusatyamNGF/MarketPlace/Productioncontract";
import Productbid from "./pages/BhusatyamNGF/MarketPlace/Productbid";
import Productbids from "./pages/BhusatyamNGF/Createlisting/Productbids";
import Productioncontracts from "./pages/BhusatyamNGF/Createlisting/Productioncontracts";
import Products from "./pages/BhusatyamNGF/Createlisting/Products";
import CProductbids from "./pages/BhusatyamNGF/Completedorders/CProductbids";
import Negotiationitems from "./pages/BhusatyamNGF/Analytics/Analytics";
import CProductioncontracts from "./pages/BhusatyamNGF/Completedorders/CProductioncontracts";
import CProducts from "./pages/BhusatyamNGF/Completedorders/CProducts";
// import FileManager from "./pages/BhusatyamNGF/FileManager/FileManager";
import Support from "./pages/BhusatyamNGF/Support/Support";
import Saved from "./pages/BhusatyamNGF/Saved/Saved";
import Setting from "./pages/BhusatyamNGF/Setting/Setting";
// import Createlisting from "./pages/BhusatyamNGF/MarketPlace/Createlisting";



function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/MarketPlace" element={<Marketplace />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Productioncontract" element={<Productioncontract/>} />
          <Route path="/Productbid" element={<Productbid />} />
          {/* <Route path="/Createlisting" element={<Createlisting />} /> */}
          <Route path="/Productbids" element={<Productbids />} />
          <Route path="/Productioncontracts" element={<Productioncontracts />} />
          <Route path="/Products" element={<Products />} />

          <Route path="/Negotiationitems" element={<Negotiationitems />} />
          <Route path="/CProductbids" element={<CProductbids />} />
          <Route path="/CProductioncontracts" element={<CProductioncontracts />} />
          <Route path="/CProducts" element={<CProducts />} />

          {/* <Route path="/file-manager" element={<FileManager />} /> */}
          <Route path="/Support" element={<Support />} />
          <Route path="/saved" element={<Saved/>} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
    
  );
}

export default App;
