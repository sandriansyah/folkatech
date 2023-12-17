import { Route, Routes, createBrowserRouter } from "react-router-dom";

import SigninPage from "./auth/signin";
import RegisterPage from "./auth/register";
import ListProductsPage from "./products/pages/listProducts";
import DetailProductsPage from "./products/pages/productDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/signin"} element={<SigninPage />} />
      <Route path={"/register"} element={<RegisterPage />} />
      <Route path={"/products"} element={<ListProductsPage />} />
      <Route path={"/products/:id"} element={<DetailProductsPage />} />
    </Routes>
  );
};

export const router = createBrowserRouter([
  { path: "*", Component: AppRoutes },
]);
