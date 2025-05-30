import React, { useContext } from "react";
import "./stories.scss"
import { dividerClasses } from "@mui/material";
import {AuthContext} from "../../context/authContext";

const Stories = () => {

    const {currentUser} =useContext(AuthContext);

    // temporary data
    const stories =[
        {
            id: 1,
            name: "Zhuanyi Zhu",
            img: "https://images.pexels.com/photos/31461532/pexels-photo-31461532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        },
        {
            id: 2,
            name: "Zhuanyi Zhu",
            img: "https://images.pexels.com/photos/31461532/pexels-photo-31461532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        },
        {
            id: 3,
            name: "Zhuanyi Zhu",
            img: "https://images.pexels.com/photos/31461532/pexels-photo-31461532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        },
        {
            id: 4,
            name: "Zhuanyi Zhu",
            img: "https://images.pexels.com/photos/31461532/pexels-photo-31461532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        }
]
    return(
        <div className="stories">
            <div className="story">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
            <button>+</button>
            </div>
         {stories.map(story=>(
           <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
            </div>
            ))}   
        </div>
    )
}

export default Stories;