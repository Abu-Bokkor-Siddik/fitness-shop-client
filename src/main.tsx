import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './page/Home.tsx'
import Products from './page/Products.tsx'
import Card from './page/Card.tsx'
import About from './page/About.tsx'
import Management from './page/Management.tsx'
import Root from './components/features/Root.tsx'
import Checkout from './page/Checkout.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<><h1>Error page</h1></>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
    {
      path:'products',
      element:<Products></Products>
    },
    {
      path:'card',
      element:<Card></Card>
    },
    {
      path:'checkout',
      element:<Checkout></Checkout>
    },
    {
      path:'about',
      element:<About></About>
    },
    {
      path:'management',
      element:<Management></Management>
    },
  
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>,
)
