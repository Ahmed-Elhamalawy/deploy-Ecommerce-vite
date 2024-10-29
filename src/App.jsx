import ContactUs from "./pages/ContactUs";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Fashion1 from "./pages/Home/fashion-1";
import NotFound from "./pages/Not-found";
import Login from "./pages/Login";
import Mainlayout from "./layouts/main-layout";
import AuthProvider from "./providers/auth-Provider";
import FetchSingleProduct from "./pages/Home/product";
import ShoppingCart from "./pages/cartPage";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        { index: true, element: <AuthProvider component={Fashion1} /> },
        // Remove the leading slash for nested routes
        { path: "contact-us", element: <ContactUs /> },
        { path: "product/:id", element: <FetchSingleProduct /> },
        { path: "ShoppingCart", element: <ShoppingCart /> },
      ],
    },
    { path: "login", element: <Login /> }, // Remove leading slash
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
