import { Route, Routes } from "react-router-dom";
import AddProduct from "./component/AddProduct";
import EditProduct from "./component/EditProduct";
import ProductHome from "./component/ProductHome";
import Navbar from "./component/Navbar";
import MainPage from "./component/MainPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid" style={{ marginTop: "70px" }}>
        <Routes>
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/" element={<ProductHome />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/editProduct/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
