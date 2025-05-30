import "./navBar.scss";
import { Link } from "react-router-dom";
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import AppsTwoToneIcon from '@mui/icons-material/AppsTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import NotificationsTwoToneIcon from '@mui/icons-material/NotificationsTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";





const NavBar = () => {
    const {toggle, darkMode} = useContext(DarkModeContext);
    const {currentUser}= useContext(AuthContext);

    return (
        <div className="navBar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                <span>ConnectSphere</span>
                </Link>
                <HomeTwoToneIcon/>
               {!darkMode ? <DarkModeTwoToneIcon onClick={toggle} />: <WbSunnyTwoToneIcon onClick={toggle}/>}
                <AppsTwoToneIcon/>
                <div className="search">
                <SearchTwoToneIcon/>
                <input type="text" placeholder="Search..." />
                </div>
                

            </div>
            <div className="right">
             <PersonOutlineTwoToneIcon/> 
             <MailTwoToneIcon/>
             <NotificationsTwoToneIcon/> 
             <div className="user">
                <img src={currentUser.profilePic} alt="sunflower" />
                <span>{currentUser.name}</span>
            </div> 
            </div>
           
        
        </div>
    )
}

export default NavBar;