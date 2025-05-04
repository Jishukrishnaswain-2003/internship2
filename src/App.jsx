import React from 'react';
import './Style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashhboard from './component/Dashhboard';
import Log from './component/loginlogout/Log';
import Register from './component/loginlogout/Register';
import AllComp from './component/AllComp';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Dashhboard />,
    children: [
      {
        path:'/',
        element:<AllComp/>
      }
    ]
  },
  {
    path: '/login',
    element: <Log />
  },
  {
    path: '/register',
    element: <Register />
  }
]);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
