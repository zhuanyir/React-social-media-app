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






const NavBar = () => {
    return (
        <div className="navBar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                <span>ConnectSphere</span>
                </Link>
                <HomeTwoToneIcon/>
                <DarkModeTwoToneIcon/>
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
                <img src="https://images.pexels.com/photos/963060/pexels-photo-963060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="sunflower" />
                <span>zhuanyi Zhu</span>
            </div> 
            </div>
           
        
        </div>
    )
}

export default NavBar;