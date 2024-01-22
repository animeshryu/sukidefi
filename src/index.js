import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SpeedInsights } from '@vercel/speed-insights/react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <SpeedInsights />
  </React.StrictMode>
);
