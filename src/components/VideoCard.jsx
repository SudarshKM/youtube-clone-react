import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import Button from 'react-bootstrap/Button';
import { useState } from "react";

import Modal from "react-bootstrap/Modal";

import Card from "react-bootstrap/Card";

function VideoCard({displayVideo}) {
  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log(displayVideo?.title);
  
  return (
    <>
      <Card style={{ width: "100%" ,height:"250px" , border:"0" , overflowX:"visible"}} className="mt-4 w-100">
        <Card.Img
          className="rounded-3"
          onClick={handleShow}
          variant="top"
          src={displayVideo?.thumbnailUrl}
          width={"100%"}
          height={"200"}
          style={{opacity:"0.94"}}
        />
        <Card.Body className=" text-light" >
          <Card.Text style={{backgroundColor:"#12121200"}}>{displayVideo?.title}</Card.Text>
          
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-dark text-light" closeButton>
          <Modal.Title style={{backgroundColor:"#21252900"}}>{displayVideo?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <iframe
            width="100%"
            height="315"
            src={`${displayVideo?.videoUrl}?autoplay=1`}
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

export default VideoCard;
