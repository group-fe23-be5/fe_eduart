import { Container, Row, Col, Button, Card, Stack, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import './Article.css'

function Article(){
    return(
        
        <div className="article-page">
            <Container className="article-hero-section">
                <Row className='article-hero-row' >
                    <Col lg={9} className='article-hero-content'>
                        <h3 className='article-hero-title' >
                        "Yuk Jelajahi pikiran kreatif siswa kami dan temukan inspirasi baru di Halaman-halaman karya literasi mereka!"
                        </h3>
                        <p className='article-hero-desc' >Baca sekarang dan mari berbagi kesenangan literasi bersama</p>
                    </Col>
                    <Col lg={3}>
                        <img className='article-hero-img' src="https://stories.freepiklabs.com/api/vectors/sharing-articles/amico/render?color=F49D1AFF&background=complete&hide=" alt="hero-img" />
                    </Col>
                </Row>
            </Container>

            <Container className="article-card-section">
                <Row className='article-row'>
                    <Col className='article-col' >
                        <Card className='article-card' >
                        <Card.Img variant="top" src="/src/assets/sangkar.png" />
                        <Card.Body>
                            <Card.Title className='card-article-title'>Sangkar - sangkar Pilu</Card.Title>
                            <hr className='article-separator'/>
                            <Card.Text className='card-article-title'>
                            untuk erina gita cantika duduk disini dipinggir air tak
                            bertuan buatku ingin menulis saja erina gita cantika jangan
                            cepat sedih jangan cepat merenung karena jiwamu selayaknya
                            hanya untuk berbahagia jangan cepat patah sebelum kau
                            melangkah tuhan buat hati bukan untuk disakiti dan bukan
                            berarti untuk tidak melangkah lebih jauh lagi yang terakhir…
                            </Card.Text>
                            <Link to="/ArticleContent">
                                <Button className='card-article-button'>Baca Selengkapnya...</Button>
                            </Link>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className='article-col' >
                        <Card className='article-card' >
                        <Card.Img variant="top" src="/src/assets/putus.png" />
                        <Card.Body>
                            <Card.Title className='card-article-title'>Cerita Putus Cinta</Card.Title>
                            <hr className='article-separator'/>
                            <Card.Text className='card-article-title'>
                            di atas kasur yang seperti samudra minuman keras aku tenggelam
                            menuju china, berjalan menuju amerika, dan tiada kamu kesepian
                            dan hanya mencari lentera bayangan malam yang mawar dan
                            durinya dipisahkan semenjak kita saling melempar kisah aku
                            melihat ribuan orang yang memakai pakaian dari serat kain
                            rindu tampaknya aku mengira, sebab rongganya membesar
                            perlahan-lahan sehingga membuat…
                            </Card.Text>
                            <Link to="/ArticleContent">
                                <Button className='card-article-button'>Baca Selengkapnya...</Button>
                            </Link>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col className='article-col' >
                        <Card className='article-card' >
                        <Card.Img variant="top" src="/src/assets/secarik.png" />
                        <Card.Body>
                            <Card.Title className='card-article-title'>Secarik Kertas</Card.Title>
                            <hr className='article-separator'/>
                            <Card.Text className='card-article-title'>
                            Diamku adalah sebait kata Yang takkan pernah bisa menjadi
                            paragraf, Aksaraku sepi, Sendu, Mengais pada senja yang ingin
                            terpejam. Sudut lampu kota serta langit gelap adalah senduku
                            Mereka seakan berbicara dalam alam bawah sadarku ‘untuk apa
                            bertahan sedangkan ia mencintai wanita lain?’
                            </Card.Text>
                            <Link to="/ArticleContent">
                                <Button className='card-article-button'>Baca Selengkapnya...</Button>
                            </Link>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default Article