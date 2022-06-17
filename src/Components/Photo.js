import React from "react"
import Selfie from "../Images/Selfie.png"
export default function Photo(){
    return (
        <photo>
            <img src={Selfie} alt="doesn't load" className="photo--profile-picture"/>
        </photo>
    )
}