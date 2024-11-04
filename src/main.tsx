import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout.tsx';
import HomePage from './pages/HomePage.tsx';

import Contact from './pages/Contact.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
children: [
  {
    path: "/",
    element: <HomePage/>

},

 {
    path: "/contact",
    element: <Contact/>

  },
  {
    path: "/:holidayId",
    element: <HolidayDetails/>
	  }
]
}
]);
  


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
