import {createBrowserRouter} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Explore from "../pages/Explore";
import Trending from "../pages/Trending";
import YouLiked from "../pages/YouLiked";
import MostLiked from "../pages/MostLiked";
import FollowingList from "../pages/FollowingList";
import MyProfile from "../pages/MyProfile";
import Collection from "../pages/Collection"
import NotFound from "../pages/NotFound";
import PostDetail from "../pages/PostDetail";
import Register from "../pages/Register";
import SavedPosts from "../pages/SavedPosts";
import Settings from "../pages/Settings";
import Upload from "../pages/Upload";
import UserProfile from "../pages/UserProfile";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> }, // ✅ Default route ("/")
      { path: "Login/:id", element: <Login /> },
      { path: "Explore", element: <Explore /> },
      { path: "Trending", element: <Trending /> },
      { path: "MostLiked", element: <MostLiked /> },
      { path: "YouLiked", element: <YouLiked /> },
      { path: "FollowingList", element: <FollowingList /> },
      { path: "MyProfile", element: <MyProfile /> },
      { path: "Collection", element: <Collection /> },
      { path: "Settings", element: <Settings /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);


export default router