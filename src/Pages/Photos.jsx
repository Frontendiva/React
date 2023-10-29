import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, CardImg, CardTitle, Col, Container, Row} from "react-bootstrap";
import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchPhotos} from "../actions/photoActions";

const cardViewPhotos = {
  small: 4,
  big: 6,
};

const Photos = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const isLoadingUsers = useSelector((state) => state.photos.loading);
  const photos = useSelector((state) => state.photos.photos);
  const total = useSelector((state) => state.photos.total);

  const [photo, setPhotos] = useState(1);
  const [cardStateViewPhotos, setCardViewPhotos] = useState(() => cardViewPhotos.small);


  const handlePhotoModal = (id) => {
    navigation(`/photos/${id}`);
  }

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  const fetchNextPhotos = () => {
    setPhotos((prevState) => prevState + 1);
    dispatch(fetchPhotos(photo + 1));
  };

  const handleChangeCardViewPhotos = () => {

    if (cardStateViewPhotos === cardViewPhotos.small) {
      setCardViewPhotos(cardViewPhotos.big);
      return;
    }

    if (cardStateViewPhotos === cardViewPhotos.big) {
      setCardViewPhotos(cardViewPhotos.small);
      return;
    }
  }

  return(
    <Container>
      <h2 className="text-center m-4">Photos page</h2>
      {
        isLoadingUsers && <h3 className="text-center m-4">Loading</h3>
      }

      <Button ariant="primary" className="mx-2 my-2"  onClick={() => handleChangeCardViewPhotos()}>
                  {
                    cardStateViewPhotos === cardViewPhotos.small ? 'Make Big cards' : 'Make small card'
                  }
                </Button>
    
      <Row>
        {photos && photos.map((photo, i)=>(
          <Col key={i} xs={cardStateViewPhotos}>
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
                src={photo.url}
              />
              <CardBody>
                <CardTitle>{photo.title}</CardTitle>
                <Button variant="primary" className="mx-auto w-100" onClick={()=> handlePhotoModal(photo.id)}>About photos</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      {
                photos.length < total && <Button 
                variant="primary"
                className=" mt-3 btn-lg"
                style={{
                  display: "block",
                  margin: "0 auto",
                  textAlign: "center"
                }}
                 onClick={()=>fetchNextPhotos()}>Load more</Button>
              }
      <Outlet />
    </Container>)
}

export default Photos;
