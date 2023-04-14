import React from "react";
import Post from "./Post";

const Kot=(props)=>{
    
    return  <div> 
   
    <div><img src='https://i.pinimg.com/originals/f3/c8/c7/f3c8c7f92bc88430ca95bb7485bec105.jpg' width="200" height="300"/></div>
    <div>my name is {props.catname}</div>
    <div>My post</div>
    
    <div>ja {props.catname} i mne {props.age} let</div>
  </div>
}
export default Kot;