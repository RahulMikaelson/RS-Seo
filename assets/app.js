// /*
//  * Welcome to your app's main JavaScript file!
//  *
//  * We recommend including the built version of this JavaScript file
//  * (and its CSS file) in your base layout (base.html.twig).
//  */

// // any CSS you import will output into a single css file (app.css in this case)
// import './styles/app.css';

// // start the Stimulus application
// import './bootstrap';
import React from "react";
import image from "./image.jpg"

export default function App(props, context){
    
    if(context.serverSide){
        console.log("ServerSide");
        return(<h1>This is Server side {props} </h1>);
    }   else{
        return(<div>
            <h1>Hello This is Working</h1>
            <img src={image}/>
        </div>)
    
    } 

}