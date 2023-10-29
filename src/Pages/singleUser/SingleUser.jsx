import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {MyModal} from "../../Components/modal";
import * as api from "../../dal/users";

export const SingleUser = (props) => {
  const[user, setUser] = useState({});
  const[isLoading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(()=> {
    api.getUserById(id).then((data)=>{
      setUser(data);
    }).catch((error)=>{
      console.log("Error");
    }).finally(()=>{
      setLoading(false);
    })
  },[id]);

  const navigation = useNavigate();
  const handleCloseModal = () =>{
    navigation('/users');
  }

  return(
    <MyModal
      title={'Article Info'}
      show={true}
      handleClose={handleCloseModal}>
      {
        isLoading ? <p>LOADING...</p>:(<>
          <h3>Name: {user.name}</h3>
          <p>email: {user.email}</p>
        </>)
      }
    </MyModal>
  )
};
