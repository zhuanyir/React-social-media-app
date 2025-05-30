import "./profile.scss"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";


const  Profile = () => {
    return (
        <div className="profile">
            <div className="images">
            <img src="https://images.pexels.com/photos/32304898/pexels-photo-32304898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="cover"/>
            <img src="https://images.pexels.com/photos/31461532/pexels-photo-31461532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="profilePic" />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                     <a href="http://facebook.com">
                     < FacebookOutlinedIcon style={{ fontSize: 30 }}/>
                     </a>
                     <a href="https://www.instagram.com/">
                     < InstagramIcon fontSize="medium"/>
                     </a>
                     <a href="https://x.com/">
                     < TwitterIcon style={{ fontSize: 30 }}/>
                     </a>
                     <a href="https://www.linkedin.com/">
                     < LinkedInIcon style={{ fontSize: 30 }}/>
                     </a>
                     <a href="https://www.pinterest.com/">
                     < PinterestIcon style={{ fontSize: 30 }}/>
                     </a>
                    </div>
                    <div className="center">
                        <span>Zhuanyi Zhu</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon/>
                                <span>Europe</span>
                            </div>
                            <div className="item">
                                <LanguageIcon/>
                                <span>Chun.dev</span>
                            </div>
                            
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <EmailIcon/>
                        <MoreVertIcon/>
                    </div>
                </div>
                <Posts/>
                
            </div>       
        
        </div>
        
    )
}

export default Profile;