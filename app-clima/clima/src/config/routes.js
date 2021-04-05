// Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

// Admin Pages
import AdminHome from "../pages/Admin";


// Pages
import Home from "../pages/Home";
import Chat from "../pages/Chat"
//APPS
import Clima from "../components/Clima"


// Other
import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true
      },
      {
        component: Error404
      }
    ]
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true
      },
      {
        path: "/clima",
        component: Clima,
        exact: true
      },
      {
        path: "/chat",
        component: Chat,
        exact: true
      },
      {
        component: Error404
      }
    ]
  }
];

export default routes;
