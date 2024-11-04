import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactoPage from "../pages/ContactoPage";
import NoticiasPage from "../pages/NoticiasPage";
import RecetasPage from "../pages/RecetasPage";
import TribuPage from "../pages/TribuPage";
import MenuPage from "../pages/MenuPage";

export const appRoutes = createBrowserRouter([

    {
        index: true,
        element: <HomePage />,
    },
    {
        path: "/contacto",
        element: <ContactoPage />,
    },
    {
        path: "/noticias",
        element: <NoticiasPage />,
    },
    {
        path: "/recetas",
        element: <RecetasPage />,
    },
    {
        path: "/tribu",
        element: <TribuPage />,
    },
    {
        path: "/menu",
        element: <MenuPage />,
    },

])