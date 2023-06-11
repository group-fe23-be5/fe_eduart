import { Card, Container, Row, Col, Button } from "react-bootstrap"
import './MetodePembayaran.css'

function MetodePembayaran(){
    return(
        <div className="payment-method-page">
            <Container>
                <Col className="invoice-title">
                    <h1 className="text-white text-center m-2">Draft Invoice</h1>
                </Col>
                <Row className="justify-content-md-center">
                    <Col lg={7} md="auto">
                        <Card className="payment-method">
                            <Card.Title>Paket Offline Learning 3 Bulan</Card.Title>
                            <Card.Body className="payment-method">
                                <Row className="total-pm">
                                    <Col>
                                        <h5>Total Harga</h5>
                                    </Col>
                                    <Col className="price">
                                        <p>Rp75.000</p>
                                    </Col>
                                    <hr/>
                                </Row>
                                <Row className="payment-option">
                                    <h5 className="payment-sub">Minimarket</h5>
                                    <p>Transaksi di minimarket terdekat</p>
                                        <Button className="payment-option" size="lg">
                                            <img src="/src/assets/icon-indomaret.png" alt="icon" />
                                            <p className="payment-option">Indomaret </p>
                                        </Button>
                                        <Button className="payment-option" size="lg">
                                            <img src="/src/assets/icon-alfamart.png" alt="icon"/>
                                            <p className="payment-option">Alfamart</p>
                                        </Button>
                                </Row> 
                                <Row className="payment-option">
                                    <h5 className="payment-sub">Transfer Virtual Account</h5>
                                    <p>Dengan kode unik, semuanya lebih cepat</p>
                                    <Button className="payment-option" size="lg">
                                        <img src="/src/assets/icon-bca.png" alt="icon" />
                                        <p className="payment-option">Bank BCA </p>
                                    </Button>
                                    <Button className="payment-option" size="lg">
                                        <img src="/src/assets/icon-brimo.png" alt="icon"/>
                                        <p className="payment-option">Bank BRI</p>
                                    </Button>
                                    <Button className="payment-option" size="lg">
                                        <img src="/src/assets/icon-cimb-niaga.png" alt="icon" />
                                        <p className="payment-option">Bank CIMB Niaga </p>
                                    </Button>
                                    <Button className="payment-option" size="lg">
                                        <img src="/src/assets/icon-btn.png" alt="icon"/>
                                        <p className="payment-option">Bank BTN</p>
                                    </Button>
                                </Row> 
                                <Row className="payment-option">
                                    <h5 className="payment-sub">E-Money</h5>
                                    <p>Pembayaran terhubung langsung dengan aplikasi e-wallet kamu</p>
                                    <Button className="payment-option" size="lg">
                                        <img src="/src/assets/icon-gopay.png" alt="icon" />
                                        <p className="payment-option">Gopay </p>
                                    </Button>
                                    <Button className="payment-option" size="lg">
                                        <img src="/src/assets/icon-dana.png" alt="icon"/>
                                        <p className="payment-option">Dana</p>
                                    </Button>
                                    <Button className="payment-option" size="lg">
                                        <img src="/src/assets/icon-ovo.png" alt="icon" />
                                        <p className="payment-option">OVO </p>
                                    </Button>
                                    <Button className="payment-option" size="lg">
                                        <img src="/src/assets/icon-flazz.png" alt="icon"/>
                                        <p className="payment-option">Flazz</p>
                                    </Button>
                                </Row>   
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        </div>
        
    )
}

export default MetodePembayaran