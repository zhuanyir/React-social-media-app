
// import './App.css'
import "./style.scss";
import Register from './pages/register/Register';
import Login from "./pages/login/Login";
import {
  createHashRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router";

import NavBar from "./components/navBar/NavBar";
import LeftBar from './components/leftBar/LeftBar';
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";



function App() {

const {currentUser}= useContext(AuthContext);

const {darkMode} = useContext(DarkModeContext)


  const Layout = ()=>{
  return (
    <div className={`theme-${darkMode? "dark" : "light"}`}>
      <NavBar />
      <div style={{display:"flex"}}>
        <LeftBar />
        <div className="mainContent">
        <Outlet />
        </div>
        <RightBar />

      </div>
    </div>
  );
  };

  const ProtecteRoute =({children}) =>{
    if(!currentUser){
      return <Navigate to="/login" />;
    }

    return children;
  };


const router = createHashRouter([
  {
    path:"/",
      element:(<ProtecteRoute><Layout/></ProtecteRoute>),     
    // element: <Layout/>,    wait to do, now only for test profile route
    children:[
      {
        index:true,
        element:<Home />
      },
       {
        path:"profile/:id",
        element:<Profile />
      }
    ]
  },
 
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  { path: "*", element: <Navigate to="/" /> }
]);

    return <RouterProvider router={router} />
}

export default App;
