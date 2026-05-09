import type { RouteObject } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import mainNavigation from "./main";
// import AdminNavigation from "./admin";

const router: RouteObject[] = []

router.push(...mainNavigation)
// router.push(...AdminNavigation)

const basename = process.env.PUBLIC_URL || "/My_Portfolio";

export default createBrowserRouter(router, {
  basename,
})