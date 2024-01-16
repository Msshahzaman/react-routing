import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Dashboard from "../views/Dashboard";
import ContactUs from "../views/ContactUs";
import AboutUs from "../views/AboutUs";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  }, {
    path: "/contact",
    element: <ContactUs/>,
  },
  {
    path: "/about",
    element: <AboutUs/>,
  }
])


function Router(){
    return <RouterProvider router={router}/>
}
export default Router;