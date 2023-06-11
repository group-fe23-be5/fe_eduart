import { Button, Carousel, Col, Row } from "antd";
import { ArtDesign, HeroCourse } from "../../assets/index";
import "./course.css";
import { CardSection } from "./constants";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Course = () => {
  const navigate = useNavigate();

  const onClickMusicPoet = (paramLink) => {
    navigate(paramLink);
  };

  return (
    <>
      <Carousel autoplay effect="fade">
        <div className="carousel-item">
          <div className="carousel-image-container">
            <img src={HeroCourse} alt="Cover" className="carousel-image" />
            <div className="carousel-content">
              <div className="carousel-text">
                <h1 className="carousel-title">Course</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Add more carousel items if needed */}
      </Carousel>
      <Card>
        {CardSection.map((data, index) => (
          <Row gutter={[16, 16]} justify="center" key={index}>
            <Col xs={24} xl={12}>
              <div className="img-cardClass">
                <img
                  src={data.image}
                  alt="cover"
                  style={{ maxWidth: "80%", maxHeight: "250px" }}
                />
              </div>
            </Col>
            <Col xs={24} xl={12}>
              <div className="cardClass-about">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
              <Button
                style={{
                  width: "50%",
                  margin: "20px auto",
                  height: 50,
                  backgroundColor: "#FB8C00",
                  fontWeight: "bold",
                  color: "white",
                  border: 0,
                }}
                onClick={() => {
                  onClickMusicPoet(data.link);
                }}
              >
                Mulai
              </Button>
            </Col>
          </Row>
        ))}
      </Card>
    </>
  );
};

export default Course;
