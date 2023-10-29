import React, {useEffect} from "react";
import {Button, Card, CardBody, CardImg, CardTitle, Col, Container, Row} from "react-bootstrap";
import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchPhotos} from "../actions/photoActions";

const Photos = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const isLoadingUsers = useSelector((state) => state.photos.loading);
  const photos = useSelector((state) => state.photos.photos);
  const total = useSelector((state) => state.photos.total);


  const handlePhotoModal = (id) => {
    navigation(`/photos/${id}`);
  }

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  return(
    <Container>
      <h2 className="text-center m-4">Photos page</h2>
      {
        isLoadingUsers && <h3 className="text-center m-4">Loading</h3>
      }
      <Row>
        {photos.map((photo)=>(
          <Col key={photo.id} xs={4}>
            <Card  bg="info" border="dark" style={{ margin: "0 1rem", borderWidth: "2px" }} >
              <CardImg
                variant="top"
                src={photo.url}
              />
              <CardBody>
                <CardTitle>{photo.title}</CardTitle>
                <Button variant="primary" onClick={()=> handlePhotoModal(photo.id)}>About photos</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <Outlet />
    </Container>)
}

export default Photos;
