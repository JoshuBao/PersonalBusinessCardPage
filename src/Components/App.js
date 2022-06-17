import React from "react";
import Buttons from "./Buttons"
import Name from "./Name"
import Photo from './Photo';
import MainContent from "./MainContent";
import Footer from "./Footer";


export default function App(){
    return(
        <body>
            <Photo />
            <Name />
            <Buttons />
            <MainContent />
            <Footer />
        </body>
    )
}