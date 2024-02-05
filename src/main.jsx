import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'
import App from './App.jsx'
import Login from './pages/Login_form.jsx'
import Cadastro from './pages/Cadastro_form.jsx'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'

import ErrorPages from './pages/ErrorPage.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement: <ErrorPages/>,
    children:[
      {
        path:"/",
        element:<Login/>
      },
      {
        path: "cadastro",
        element: <Cadastro/>
        
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  
  </React.StrictMode>,
)
