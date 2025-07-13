import {createBrowserRouter} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/MainPages/Home";

import Explore from "../pages/ExplorePages/Explore";
import Trending from "../pages/ExplorePages/Trending";
import YouLiked from "../pages/ExplorePages/YouLiked";
import MostLiked from "../pages/ExplorePages/MostLiked";

import MyProfile from "../pages/UserPages/MyProfile";
import Collection from "../pages/UserPages/Collection"
import NotFound from "../pages/NotFound";

import Settings from "../pages/UserPages/Settings";
import Upload from "../pages/UserPages/Upload";

import Auth from "../pages/AuthPages/Auth";

const router = createBrowserRouter([
  {
    path: '/Auth',
    element: <Auth />
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> }, // ✅ Default route ("/")
     
      { path: "Explore", element: <Explore /> },
      { path: "Trending", element: <Trending /> },
      { path: "MostLiked", element: <MostLiked /> },
      { path: "YouLiked", element: <YouLiked /> },
    
      { path: "MyProfile", element: <MyProfile /> },
      { path: "Collection", element: <Collection /> },
      { path: "Settings", element: <Settings /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);


export default router