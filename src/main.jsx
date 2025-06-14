
import { createRoot } from 'react-dom/client'
import router from './router/router.jsx';
import { RouterProvider } from 'react-router';
import "./main.css"

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={router}></RouterProvider>

)
