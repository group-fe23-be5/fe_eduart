import React, { useState, useEffect, useRef } from 'react';
import Barcode from "react-barcode"
import { Card, Container, Row, Col, Button, Modal } from "react-bootstrap"
import { Link } from 'react-router-dom';
import './VirtualAccount.css'

function VirtualAccount(){
    const totalSeconds = 24 * 60 * 60; 
    const [countdown, setCountdown] = useState(totalSeconds); 
    const colRef = useRef(null);
    const [modalShow, setModalShow] = React.useState(false);


    useEffect(() => {
        const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

       
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
       
        if (countdown === 0) {
        clearInterval(timer);
        
        }
    }, [countdown]);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleCopy = () => {
        const colValue = colRef.current.innerText;
        navigator.clipboard.writeText(colValue);
      };

    return(
        <section className="virtual-account-page">
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={7} md="auto">
                        <Card className="virtual-acc-card">
                            <Card.Body>
                                <div className="order-id">
                                    <Row>
                                        <Col>
                                            <h5>Total</h5>
                                            <h3>Rp 75.000</h3>
                                            <p>Order ID #0001 <br/><span className="counter-payment">Bayar Dalam {formatTime(countdown)}</span></p>
                                        </Col>
                                        <Col>
                                            <Barcode value="123456789"></Barcode>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="bank-detail">
                                    <h5>Bank BNI</h5>
                                    <hr/>
                                        <div className="va-desc-detail">
                                            <p>Lakukan pembayaran dari rekening Bank BNI ke nomor virtual account di bawah ini.</p>
                                        </div>
                                </div>
                                <div className="no-va-detail">
                                    <h5>Nomor VA</h5>
                                    <hr/>
                                    <div className="va-desc-detail">
                                        <Row className="">
                                            <Col ref={colRef}>
                                            089787868683648843
                                            </Col>
                                            <Col className='copy-button-col'>
                                                <Button className='copy-button'  onClick={handleCopy}>Salin</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <Button className='card-va-button' onClick={() => setModalShow(true)}>Cek Status Pembayaran</Button>
                                <PaymentModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        </section>
    )
}

function PaymentModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Payment Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="payment-desc">
                <h3>Yey Pembayaranmu Berhasil !!!</h3>
                <h6>Cek Halaman Mentor Yuk !!!</h6>
            </div>
            <img src="/src/assets/payment.png" alt=" succes" className='payment-img'/>
        </Modal.Body>
        <Modal.Footer>
            <Link to="/mentor">
                <Button className='modal-mentor-button' >Mentor</Button>
            </Link>
        </Modal.Footer>
      </Modal>
    );
  }

export default VirtualAccount