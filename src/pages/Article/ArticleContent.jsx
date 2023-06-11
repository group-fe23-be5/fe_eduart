import { Container, Row, Stack } from "react-bootstrap"
import './Article.css'

function ArticleContent(){
    return(
        <Container className="article-content-section" >
                <Row className="article-title" >
                    <h2>Ini Judul</h2>
                </Row>
                <Row className="article-publish-detail" >
                    <Stack direction="horizontal" gap={3}>
                        <div className="bg-warning rounded-circle">MS</div>
                        <div className="me-auto author size-sm">author name<br/>speciality</div>
                        <div className="article-date">date published</div>
                    </Stack>
                </Row>
                <Row className="article-cover">
                </Row>
                <Row className="article-content" >
                    <h6>Sub-judul</h6>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, cumque?<br/>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, cumque?<br/>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, cumque?<br/>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, cumque?<br/>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, cumque?<br/><br/>

                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, cumque?<br/>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, cumque?<br/>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, cumque?<br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, placeat.
                    </p>
                </Row>
                <hr/>
                <h6>
                    judul
                </h6>
            </Container>
    )
}

export default ArticleContent;