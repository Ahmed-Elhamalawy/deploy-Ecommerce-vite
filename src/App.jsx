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
        { path: "/contact-us", element: <ContactUs /> },
        { path: "/product/:id", element: <FetchSingleProduct /> },
        { path: "/ShoppingCart", element: <ShoppingCart /> },
      ],
    },
    { path: "*", element: <NotFound /> },
    { path: "/login", element: <Login /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
