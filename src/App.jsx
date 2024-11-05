import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/Order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/Nopage";
import MyState from "./context/data/MyState";
import AllProducts from "./pages/allProducts/AllProducts";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MyState>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/order"
          element={
            <ProtectedRoutes>
              <Order />
            </ProtectedRoutes>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutesForAdmin>
              <Dashboard />
            </ProtectedRoutesForAdmin>
          }
        />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productInfo/:id" element={<ProductInfo />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route
          path="/updateproduct"
          element={
            <ProtectedRoutesForAdmin>
              <UpdateProduct />
            </ProtectedRoutesForAdmin>
          }
        />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      <ToastContainer />
    </MyState>
  );
}

export default App;

// user
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("user")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

// admin

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  console.log(admin.user.email);
  if (admin.user.email === "p.vivekofficial@gmail.com") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
