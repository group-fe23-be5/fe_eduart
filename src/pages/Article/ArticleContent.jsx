import { Container, Row, Stack } from "react-bootstrap"
import './Article.css'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function ArticleContent(){
    const { id } = useParams();
    console.log(`ini iddd ${id}`);

  useEffect(() => {
    // Fetch the article based on the "id" parameter
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/artikel/${id}`);
        const article = response.data;
        // Do something with the fetched article data
        console.log(`ini artikel ${article}`)
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

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