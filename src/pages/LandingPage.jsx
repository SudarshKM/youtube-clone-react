import Container from "react-bootstrap/Container";
import "../App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftMenu from "../components/LeftMenu";
import Header from "../components/Header";
import VideoCard from "../components/VideoCard";
import Shorts from "../components/Shorts";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-bootstrap/Carousel";
import GroupShorts from "../components/GroupShorts";
import MobileLeftMenu from "../components/MobileLeftMenu";

function LandingPage() {
  const [videoDetails, setVideoDetails] = useState([]);

  const [displayWidth, setDisplayWidth] = useState("true");

  //carousel
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const fetchData = async () => {
    try {
      const responce = await axios.get(
        "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json"
      );
      // console.log(responce.data);
      setVideoDetails(responce.data);
    } catch (err) {
      console.log("error in Get request");
    }
  };

  useEffect(() => {
    fetchData();
    checkDisplay();
  }, []);

  const checkDisplay = () => {
    if (window.matchMedia("screen and (max-width: 768px)").matches) {
      console.log("mobile");
      setDisplayWidth("false");
      console.log(displayWidth);
    } else {
      console.log("pc");
      console.log(displayWidth);
    }
  };

  return (
    <>
      <div
        className="landingPage w-100 p-4 text-light"
        style={{ backgroundColor: "rgba(18, 18, 18, 0.984)", width: "100%" }}
      >
        <div className="headerDiv w-100">
          <Header />
        </div>
        <Row className="w-100 header">
          <Col lg={1} className="firstColumn">
            {window.matchMedia("screen and (min-width: 768px)").matches ? (
              <LeftMenu />
            ) : (
              <MobileLeftMenu />
            )}
          </Col>

          <Col className="secondColum" lg={10}>
            {/* <LandingPage/> */}

            <Row>
              {videoDetails.map((item) => (
                <Col className="videoCard" md={3}>{<VideoCard displayVideo={item} />}</Col>
              ))}
            </Row>

            <h4 className="mt-4">
              <FontAwesomeIcon className="me-2" icon={faHeartPulse} />
              Shorts
            </h4>
            <Row>
              <Carousel
                className="shortsCarousel"
                activeIndex={index}
                onSelect={handleSelect}
                style={{ height: "550px" }}
              >
                <Carousel.Item style={{ height: "540px" }}>
                  <GroupShorts />
                </Carousel.Item>
                <Carousel.Item style={{ height: "540px" }}>
                  <GroupShorts />
                </Carousel.Item>
              </Carousel>
            </Row>

            <Row>
              {videoDetails.map((item) => (
                <Col className="videoCard" md={3}>{<VideoCard displayVideo={item} />}</Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default LandingPage;
