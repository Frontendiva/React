import React, {useEffect, useState,} from "react";
import {Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row} from "react-bootstrap";
import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../actions/userActions";

const cardViewUsers = {
  small: 4,
  big: 6,
};

 const UsersPage = () => {
   const navigation = useNavigate();
   const dispatch = useDispatch();
   const isLoadingUsers = useSelector((state) => state.users.loading);
   const users = useSelector((state) => state.users.users);
   const total = useSelector((state) => state.users.total);

   const [user, setUsers] = useState(1);
   const [cardStateViewUsers, setCardViewUsers] = useState(() => cardViewUsers.small);


   const handleUserModal = (id) => {
     navigation(`/users/${id}`)
   }

   useEffect(() => {
     dispatch(fetchUsers());
   }, []);

   const fetchNextUsers = () => {
    setUsers((prevState) => prevState + 1);
    dispatch(fetchUsers(user + 1));
  };

  const handleChangeCardViewUsers = () => {

    if (cardStateViewUsers === cardViewUsers.small) {
      setCardViewUsers(cardViewUsers.big);
      return;
    }

    if (cardStateViewUsers === cardViewUsers.big) {
      setCardViewUsers(cardViewUsers.small);
      return;
    }

  }
   


   return(
     <Container>
       <h2 className="text-center m-4">Users page</h2>
      
       {
         isLoadingUsers && <h3 className="text-center m-4">Loading</h3>
       }
       
       <Button variant="primary" className="mx-2 my-2" onClick={() => handleChangeCardViewUsers()}>
                  {
                    cardStateViewUsers === cardViewUsers.small ? 'Make Big cards' : 'Make small card'
                  }
                </Button>

       <Row>
       {users && users.map((user, i)=>(
                    <Col key={i} xs={cardStateViewUsers}>
             <Card  
             bg="info" 
             border="dark" 
             style={{
              margin: "0 1rem",
              borderWidth: "2px",
              marginBottom: i === 0 ? "20px" : "0", 
            }} >
               <CardImg
                 variant="top"
                 src="https://images.pexels.com/photos/1198171/pexels-photo-1198171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               />
               <CardBody>
                 <CardTitle>{user.name}</CardTitle>
                 <CardText>Email: {user.email}</CardText>
                 <CardText>Phone: {user.phone}</CardText>
                 <CardText>Website: {user.website}</CardText>
                 <Button variant="primary" onClick={()=> handleUserModal(user.id)}>About user</Button>
               </CardBody>
             </Card>
           </Col>
         ))}
       </Row>
       {
                users.length < total && <Button 
                variant="primary"
                className=" mt-3 btn-lg"
                style={{
                  display: "block",
                  margin: "0 auto",
                  textAlign: "center"
                }} onClick={()=>fetchNextUsers()}>Load more</Button>
              }
       
       <Outlet />
     </Container>
   )
}

export default UsersPage;
