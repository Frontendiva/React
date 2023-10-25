import React, { Component } from "react";
import imagesOne from "../assets/imagesOne.jpg";
import imagesTwo from "../assets/imagesTwo.jpg";
import imagesThree from "../assets/imagesThree.jpg";
import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";

export default class CarouselBox extends Component {
    render() {
        const imageStyle = {
            maxHeight: "400px", 
            width: "auto", 
          };

        return(
            <Carousel >
                <CarouselItem>
                    <img
                    className="d-block w-100"
                    src={ imagesOne }
                    alt="imagesOne"
                    style={imageStyle}
                    />
                    <CarouselCaption  className="text-dark">
                        <h3>Word</h3>
                        <p>Please forgive me what I did is not quite similar to what was in the task itself.</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <img
                    className="d-block w-100"
                    src={ imagesTwo }
                    alt="imagesOne"
                    style={imageStyle}
                    />
                    <CarouselCaption>
                        <h3>Word</h3>
                        <p>Please forgive me that what I did is not quite similar to what was in the task itself.</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <img
                    className="d-block w-100"
                    src={ imagesThree }
                    alt="imagesOne"
                    style={imageStyle}
                    />
                    <CarouselCaption>
                        <h3>Word</h3>
                        <p>Please forgive me that what I did is not quite similar to what was in the task itself.</p>
                    </CarouselCaption>
                </CarouselItem>
            </Carousel>
        )
    }
}