import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout.tsx';
import HomePage from './pages/HomePage.tsx';
import Contact from './pages/Contact.tsx';
import HolidayDetails from './pages/AddHoliday.tsx';


// CSS for the overall App
import "./App.css"


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
    path: "/:AddHoliday",
    element: <AddHoliday/>
	  }
]
}
]);
  


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
