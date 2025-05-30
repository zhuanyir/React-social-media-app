import "./comments.scss"
import {useContext} from "react";
import {AuthContext} from "../../context/authContext"



const Comments = () => {
    const {currentUser} = useContext(AuthContext);

    //Temporary
    const comments = [
        {
            id: 1,
            desc:"So true—happiness isn't something we stumble upon, it's something we choose and build through the little things we do each day.",
            name: "John Doe" ,
            userId:1,
            profilePicture:"https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
         {
            id: 2,
            desc:"A beautiful reminder that happiness blooms not in distant dreams, but in the quiet moments we shape with intention and heart.",
            name: "Liana Chen" ,
            userId:2,
            profilePicture:"https://images.pexels.com/photos/2460227/pexels-photo-2460227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }


    ]


    return (
        <div className="comments">
            <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder="write a comment" />
            <button>Send</button>
            </div>

            {comments.map(comment=>(
                <div className="comment">
                    <img src={comment.profilePicture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>
    )
}

export default Comments;