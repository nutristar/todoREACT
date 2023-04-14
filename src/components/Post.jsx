import React from "react";

const Post=(props)=>{
    // 
    let THISpost = React.createRef();
    let alert3308 =()=>{
    let text2 = THISpost.current.value;
    alert(text2);
    };
    return(
        <div>
            <img src=""></img>
            <div>{props.message}</div>
            <div>
        <textarea ref={THISpost}></textarea> 
        <button onClick={alert3308}> Add post</button> 
            </div>
            <div>
                <span> like</span>{props.likesCount}
            </div>
            
        </div>
    )
};

export default Post;