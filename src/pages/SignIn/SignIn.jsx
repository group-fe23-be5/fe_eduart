import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './SignIn.css'

function SignIn(){
    return(
        
            <Container className="SignIn" >
                <Row className="signin-row">
                    <Col className="signin-col" >
                        <h1>Welcome Back !</h1>
                        <p>Please enter your detail</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email here" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password here" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button type="submit" className="login-button">
                                Login
                            </Button>
                            <p>Don't have an account? <Link to={"/signup"}>Register</Link> </p>
                        </Form>
                    </Col>
                    
                    <Col className="signin-img-col">
                    <img src="https://stories.freepiklabs.com/api/vectors/tablet-login/amico/render?color=F7D060FF&background=complete" alt="register-img" />
                    <h3>"Login now and enjoy access to our exciting features and services!"</h3>
                    </Col>
                </Row>
            </Container>
    
    )
}

export default SignIn