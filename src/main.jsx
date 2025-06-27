
import { createRoot } from 'react-dom/client'
import router from './router/router.jsx';
import { RouterProvider } from 'react-router';
import "./main.css"
import 'nprogress/nprogress.css';
import "./css/nprogress.css";



createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={router}></RouterProvider>

)
