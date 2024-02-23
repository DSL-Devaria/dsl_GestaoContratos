import { createBrowserRouter } from "react-router-dom";
import React from "react";
import  Login from "../pages/Login_form"
import Cadastro from "../pages/Cadastro_form";
import  {Home}  from "../pages/Home";
import  {Documentos}  from "../pages/Documentos"

export const getRouter = (token: string) => {
    if (!token) {
        return createBrowserRouter([
            {
                path: "*",
                id: 'login',
                element: <Login />,
            },
            {
                path: "/cadastro",
                id: 'cadastro',
                element: <Cadastro />,
            },
        ]);
    } else {
        const router = [
            {
                path: "*",
                id: 'home',
                element: <Home />,
            },
            {
                path: '/documentos',
                id: 'documentos',
                element: <Documentos />
            },
            
        ];
    
        return createBrowserRouter(router);
    }
};