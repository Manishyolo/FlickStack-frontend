import {createBrowserRouter} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Explore from "../pages/Explore";
import FollowingList from "../pages/FollowingList";
import MyProfile from "../pages/MyProfile";
import NotFound from "../pages/NotFound";
import PostDetail from "../pages/PostDetail";
import Register from "../pages/Register";
import SavedPosts from "../pages/SavedPosts";
import Settings from "../pages/Settings";
import Upload from "../pages/Upload";
import UserProfile from "../pages/UserProfile";

const router = createBrowserRouter([
    {
        path:'/',
        element:<RootLayout></RootLayout>,
    
        children:[
            {path:"",element:<Home></Home>},
            {path:"Login/:id",element:<Login></Login>},
            {path:"Explore",element:<Explore></Explore>},
            {path:"FollowingList",element:<FollowingList></FollowingList>},
            {path:"MyProfile",element:<MyProfile></MyProfile>},
            {path:"*",element:<NotFound></NotFound>}  
        ]
    }
]);


export default router