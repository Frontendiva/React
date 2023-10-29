
import CarouselBox from "../Components/CarouselBox";
import { useSelector, useDispatch,  } from 'react-redux';
import { useEffect,  } from "react";
import { fetchPosts } from "../actions/postActions";
import { Outlet, useNavigate, } from "react-router-dom";
//import Carousel from "react-bootstrap/Carousel";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Container, Row, Col,  } from "react-bootstrap";
//import YourComponent from "../Components/YourComponent";


const Home = () => {
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.posts.loading);
  const navigation = useNavigate();
  const handlArticalInfo = (id) => {
    navigation(`/${id}`)
  }

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
        return(
            <>

            <CarouselBox />
            <Container>
                <h2 className="text-center m-4"> Our team</h2>
                <Row>
                  {posts && posts.map((post)=>(
                    <Col key={post.id} xs={4}>
                    <Card  bg="info" border="dark"style={{ margin: "0 1rem", borderWidth: "2px" }} >
                    <CardImg
                    variant="top"
                    src="https://images.pexels.com/photos/1198171/pexels-photo-1198171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                    <CardBody>
                        <CardTitle>{post.title}</CardTitle>
                        <CardText>{post.body}
                        </CardText>
                        <Button variant="primary" onClick={()=>handlArticalInfo(post.id)}> About team</Button>
                    </CardBody>
                  </Card>
                  </Col>
                  ))}
                  </Row>
                  <Outlet />


                  

          
            </Container>
            </>
        )
    }

    export default Home;