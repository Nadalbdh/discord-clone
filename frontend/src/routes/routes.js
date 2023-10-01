import { lazy } from "react"

const routes = [
  {
    path: "",
    component: lazy(() => import("../pages/Home/Home")),
    exact: true,
  },
  {
    path: "createserver",
    component: lazy(() => import("../pages/Server/CreateServer")),
    exact: true,
  },
  {
    path: "explore",
    component: lazy(() => import("../pages/Server/ExploreServers")),
    exact: true,
  },
  {
    path: "notifications",
    component: lazy(() => import("../pages/Notifications/Notifications")),
    exact: true,
  },
  {
    path: "profile",
    component: lazy(() => import('../pages/Profile/Profile'))
  }
]

export default routes
