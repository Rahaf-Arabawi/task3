import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import ErrorPage from './components/pages/error';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  
]);

root.render(<RouterProvider router={router}/>);

root.render(<App />);

