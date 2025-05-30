import "./post.scss";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "../comments/Comments"






const Post = ({ post }) => {
    const [commentOpen, setCommentOpen] = useState(false);


    //temporary
    const liked = false;
    return (
        <div className="post">
            <div className="container">
           <div className="user">
            <div className="userInfo">
                <img src={post.profilePic} alt="" />
                <div className="details">
                    <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
                    <span className="name">{post.name}</span>
                    </Link>
                    <span className="date">1 min ago</span>
                    
                </div>

            </div>
            <MoreHorizIcon/>

           </div>
           <div className="content">
           <p>{post.desc}</p>
           <img src={post.img} alt="" />
           </div>
           <div className="info">
            <div className="item">
              {liked? <FavoriteIcon/>:<FavoriteBorderIcon/>}  
              18 Likes
            </div>
            <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
              <SmsOutlinedIcon/> 
              10 Comments
            </div>
            <div className="item">
              <ShareIcon/> 
               Shares
            </div>
           </div>
           {commentOpen && <Comments/>}
           </div>
        </div>
    )
}

export default Post;