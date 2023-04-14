import React from "react";
import Post from "./Post";
let posts=[{id:1, message:'hi howe are you!!', likesCount:12},
           {id:2, message:'fuccc of you!!', likesCount:152},
           {id:1, message:'what to hell where is my mind', likesCount:1}]

const MyPosts = (props)=>{
    const postsElements=posts.map(p=>(<Post message={p.message} likesCount={p.likesCount} />))
    return(<div>
        My posts:
        {postsElements}
    
    </div>);

};
export default MyPosts;