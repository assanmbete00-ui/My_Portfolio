import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import { RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { AppContextProvider } from "./contexts/app_context"
// import UnauthorizedPage from "@pages/unauthorized"

import { theme } from "./constants/theme"
import router from "./navigations/router"

// import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppContextProvider>
        {/* <UnauthorizedPage /> */}
        <RouterProvider router={router} />
      </AppContextProvider>

      <ToastContainer />
    </ThemeProvider>
  )
}