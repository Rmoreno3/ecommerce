import { useRoutes, BrowserRouter } from "react-router-dom";
//  PAGES
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import SingIn from "../SingIn";
import NotFound from "../NotFound";
// COMPONENTS
import NavBar from "../../Components/NavBar";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sing-in", element: <SingIn /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <NavBar />
    </BrowserRouter>
  );
}

export default App;