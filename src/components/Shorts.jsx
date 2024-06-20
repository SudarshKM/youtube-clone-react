import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import Button from 'react-bootstrap/Button';
import { useState } from "react";

import Modal from "react-bootstrap/Modal";

import Card from "react-bootstrap/Card";
import  "../App.css"


function Shorts({displayVideo}) {
  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log(displayVideo?.title);
  
  return (
    <>
      <Card style={{ width: "100%" ,height:"500px",border:"0"}} className="mt-4 bg-dark rounded">
        <Card.Img
          className="rounded-3"
          onClick={handleShow}
          variant="top"
          src={displayVideo?.thumbnailUrl}
          width={"100%"}
          height={"550px"}
          style={{opacity:"0.94"}}

        />
        <Card.Body>
          <Card.Text className="text-light">{displayVideo?.title}</Card.Text>
          
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header  className="bg-dark text-light" closeButton>

          <Modal.Title className="" style={{color:"whitesmoke" ,backgroundColor:"#21252900"}}>{displayVideo?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body  className="bg-dark">
          <iframe
            width="100%"
            height="315"
            src={displayVideo?.videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Shorts;
