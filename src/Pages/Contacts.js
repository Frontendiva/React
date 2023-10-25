import React, { Component } from "react";
import { Button, Container, FormCheck, FormControl, FormGroup, FormLabel, FormText, Form } from "react-bootstrap";


export default class Contacts extends Component {
    render() {
        return(
           <Container style={{width: '500px'}}>
            <h1 className="text-center">Contacts us</h1>
            <Form>
                <FormGroup controlId="formBasicEmail">
                    <FormLabel>Email address</FormLabel>
                    <FormControl type="email" placeholder="Enter email"/>
                    <FormText>
                        We`ll never share your email width anyone else
                    </FormText>
                </FormGroup>
                <FormGroup controlId="formBasicPassword">
                    <FormLabel>Example textarea</FormLabel>
                    <FormControl as="textarea" rows="3"/>
                 </FormGroup>  
                 <FormGroup controlId="formBasicCheckbox">
                    <FormCheck type="checkbox" label="Check me out"/>
                 </FormGroup>  
                 <Button variant="primary" type="submit">Submit</Button>   
            </Form>
           </Container>
        )
    }
}