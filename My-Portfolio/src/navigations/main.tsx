import type { RouteObject } from "react-router-dom";

import ErrorPage from "@pages/error";
import Home from "@pages/home";
//import About from "@pages/about";

import { MainPageContextProvider } from "@contexts/page_contexts/main_page_context";

import MainLayout from "@layouts/main_layout";
import Header from "@components/header";
//import Footer from "@components/footer"

const mainNavigation: RouteObject[] = [
  {
    path: "/",
    element: (
      <MainLayout
        bgColor="secondary"
        HeaderComponent={Header}
        ContextProvider={MainPageContextProvider}
        //FooterComponent={Footer}
      />
    ),
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Home />,
      },

     {/* {
        path: "about",
        element:<About />,
      }, */}
    ],
  },
]; 

export default mainNavigation;
