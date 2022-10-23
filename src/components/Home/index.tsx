import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../reducers";
import { userActionCreators } from "../../store";
import { IModalCurrentUser, ITodoModel } from "../../types";

const Home: React.FC<IModalCurrentUser> = (activeUserObj) => {

  const [currentLocation, setCurrentUserLocation] = useState<string>(``)

  const galleryList = useSelector((state: RootState) => state.galleryList);

  const dispatch = useDispatch();
  const { setCurrentLocation } = bindActionCreators(userActionCreators, dispatch)
 

  const currentLocationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    let presentUserobj = activeUserObj.activeUserObj;
    let userCurrentLocation: any = {
      ...presentUserobj, currentLocation: currentLocation
    }

    setCurrentLocation(userCurrentLocation)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentUserLocation(
      e.target.value
    )

  }

  let currentLocationFound = activeUserObj.activeUserObj?.currentLocation;

  let alleryMap = galleryList.galleryList.map((i) => {
    return (
      <Col key={i.id} sm={3} className="mb-4">
        <div className="gallery-shadow">
        <img className="gallery-image " src={i.imgUrl} />
        </div>
        
      </Col>
    )
  })

  return (
    <div>
      <Container className="homepage">
        {
          !currentLocationFound ?
            <Row className="justify-content-md-center">
              <Col md="5">
                <Form onSubmit={(e) => currentLocationSubmit(e)}>
                  <Form.Group className="mb-3" controlId="currentLocation">
                    <Form.Label>Current Location</Form.Label>
                    <Form.Control type="text" placeholder="Current location" value={currentLocation}
                      onChange={handleChange}
                      name="currentLocation" />

                  </Form.Group>

                  <Button variant="primary" type="submit" className="m-0 ">
                    Submit
                  </Button>
                </Form>
              </Col>

            </Row>

            :

            <Row>
              <h4>Current Location: {currentLocationFound}</h4>
              {alleryMap}

            </Row>



        }
      </Container>
    </div>
  );
}

export default Home;