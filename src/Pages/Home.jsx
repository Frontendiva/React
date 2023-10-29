
import CarouselBox from "../Components/CarouselBox";
import { useSelector, useDispatch,  } from 'react-redux';
import {useEffect, useState,} from "react";
import { fetchPosts } from "../actions/postActions";
import { Outlet, useNavigate, } from "react-router-dom";
//import Carousel from "react-bootstrap/Carousel";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Container, Row, Col,  } from "react-bootstrap";
//import YourComponent from "../Components/YourComponent";

const cardView = {
  small: 4,
  big: 6,
};


const Home = () => {
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);
  const total = useSelector((state) => state.posts.total);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [cardStateView, setCardView] = useState(() => cardView.small);

  const navigation = useNavigate();
  const handlArticalInfo = (id) => {
    navigation(`/${id}`)
  }

  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [dispatch]);

  const fetchNextPage = () => {
    setPage((prevState) => prevState + 1);
    dispatch(fetchPosts(page + 1));
  };

  const handleChangeCardView = () => {

    if (cardStateView === cardView.small) {
      setCardView(cardView.big);
      return;
    }

    if (cardStateView === cardView.big) {
      setCardView(cardView.small);
      return;
    }

  }

        return(
            <>
            <CarouselBox />
            <Container>
                <h2 className="text-center m-4"> Our team</h2>

                <Button variant="primary" onClick={() => handleChangeCardView()}>
                  {
                    cardStateView === cardView.small ? 'Make Big cards' : 'Make small card'
                  }
                </Button>

                <Row>
                  {posts && posts.map((post, i)=>(
                    <Col key={i} xs={cardStateView}>
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
              {
                posts.length < total && <Button variant="primary" onClick={()=>fetchNextPage()}>Load more</Button>
              }

                  <Outlet />

            </Container>
            </>
        )
    }

    export default Home;
