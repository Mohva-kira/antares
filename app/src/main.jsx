import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Offers from './pages/Offers.jsx';
import Interview from './pages/Interview.jsx';
import { registerLicense } from '@syncfusion/ej2-base';
import Profiles from './pages/Profiles.jsx';
import Community from './pages/Community.jsx';
import CvDetails from './pages/CvDetails.jsx';



// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXZccHRQRGFZUUV2V0o=');

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/jobs",
    element: <Offers />,
  },
  {
    path: "/meets",
    element: <Interview />,
  },
  {
    path: "/cvs",
    element: <Profiles />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/cv-details/:id",
    element: <CvDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
