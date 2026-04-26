import type { RouteObject } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import mainNavigation from "./main";
// import AdminNavigation from "./admin";

const router: RouteObject[] = []

router.push(...mainNavigation)
// router.push(...AdminNavigation)

export default createBrowserRouter(router)