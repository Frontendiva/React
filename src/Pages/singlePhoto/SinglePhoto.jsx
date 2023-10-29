import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {MyModal} from "../../Components/modal";
import * as api from "../../dal/photos";

export const SinglePhoto = (props) => {
  const[photos, setPhotos] = useState({});
  const[isLoading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(()=> {
    api.getPhotoById(id).then((data)=>{
      setPhotos(data);
    }).catch((error)=>{
      console.log("Error");
    }).finally(()=>{
      setLoading(false);
    })
  },[id]);

  const navigation = useNavigate();
  const handleCloseModal = () =>{
    navigation('/photos');
  }

  return(
    <MyModal
      title={'Article Info'}
      show={true}
      handleClose={handleCloseModal}>
      {
        isLoading ? <p>LOADING...</p>:(<>
          <img src={photos.url} alt="sadas" />
          <h3>title: {photos.title}</h3>
        </>)
      }
    </MyModal>
  )
};
