import React from "react";
import "./posts.scss"
import Post from "../post/Post";

const Posts = () => {

    // temporary data
    const posts =[
        {
            id: 1,
            name: "Zhuanyi Zhu",
            userId:1,
            profilePic: "https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            desc:"Happiness isn't found, it's created—one moment at a time",
            img:"https://images.pexels.com/photos/32282223/pexels-photo-32282223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        },
        {
            id: 2,
            name: "Zhuanyi Zhu",
            userId:2,
            profilePic: "https://images.pexels.com/photos/31461532/pexels-photo-31461532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            desc:"I believe in progress, not perfection."

        }
        
]
    return(
        <div className="posts">
            {posts.map(post=>(
                <Post post={post} key={post.id}/>
            )
            )}
           
        </div>
    )
}

export default Posts