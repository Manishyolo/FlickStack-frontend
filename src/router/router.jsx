import {createBrowserRouter} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../components/Home";
import Login from "../components/Login";
import Explore from "../components/Explore";
import FollowingList from "../components/FollowingList";
import MyProfile from "../components/MyProfile";
import NotFound from "../components/NotFound";
import PostDetail from "../components/PostDetail";
import Register from "../components/Register";
import SavedPosts from "../components/SavedPosts";
import Settings from "../components/Settings";
import Upload from "../components/Upload";
import UserProfile from "../components/UserProfile";

const router = createBrowserRouter([
    {
        path:'/',
        element:<RootLayout></RootLayout>,
        children:[
            {path:"",element:<Home></Home>},
            {path:"login",element:<Login></Login>},
            {path:"Explore",element:<Explore></Explore>},
            {path:"FollowingList",element:<FollowingList></FollowingList>},
            {path:"MyProfile",element:<MyProfile></MyProfile>}
        ]
    }
]);


export default router