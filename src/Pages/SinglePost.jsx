import { useState, useEffect } from "react";
import { MyModal } from "../Components/modal";
import { useNavigate, useParams } from "react-router-dom";
import * as api from "../dal/Articles";

export const SinglePost =() =>{
   const[ post, setPost] = useState({});
   const[ isLoading, setLoading] = useState(true);
   const{id} = useParams()

   useEffect(()=>{
    api.getArticleById(id).then((data)=>{ 
        setPost(data);
    }).catch((error)=>{
        console.log("Error");
    }).finally(()=>{
        setLoading(false);
    })
   },[id]);

    const navigation = useNavigate();
    const handleCloseModal = () =>{
        navigation('/')
    }

    return(
    <MyModal 
    title={'Article Info'} 
    show={true} 
    handleClose={handleCloseModal}>
        {
            isLoading ? <p>LOADING...</p>:(<>
            <h3>{post.title}</h3><p>{post.body}</p> 
            </>)
        }
       
    </MyModal>
    )
}
