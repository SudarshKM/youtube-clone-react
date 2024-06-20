import React from 'react'
import Shorts from "./Shorts"
import axios from 'axios';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useState , useEffect} from 'react';

function GroupShorts() {
  const [videoDetails, setVideoDetails] = useState([]);

    const fetchData = async () => {
        try {
          const responce = await axios.get(
            "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json"
          );
          // console.log(responce.data);
          setVideoDetails(responce?.data);
        } catch (err) {
          console.log("error in Get request");
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);
  return (
    <>
              <Row className='w-100'>

       {videoDetails.map((item) => (
              <Col md={2}>{<Shorts displayVideo={item} />}</Col>
            ))}
              </Row>

    </>
  )
}

export default GroupShorts