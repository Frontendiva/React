import React, {useEffect} from "react";
import {Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row} from "react-bootstrap";
import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../actions/userActions";


 const UsersPage = () => {
   const navigation = useNavigate();
   const dispatch = useDispatch();
   const isLoadingUsers = useSelector((state) => state.users.loading);
   const users = useSelector((state) => state.users.users);
   const total = useSelector((state) => state.users.total);


   const handleUserModal = (id) => {
     navigation(`/users/${id}`)
   }

   useEffect(() => {
     dispatch(fetchUsers());
   }, []);



   return(
     <Container>
       <h2 className="text-center m-4">Users page</h2>
       {
         isLoadingUsers && <h3 className="text-center m-4">Loading</h3>
       }
       <Row>
         {users.map((user)=>(
           <Col key={user.id} xs={4}>
             <Card  bg="info" border="dark" style={{ margin: "0 1rem", borderWidth: "2px" }} >
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
       <Outlet />
     </Container>
   )
}

export default UsersPage;
