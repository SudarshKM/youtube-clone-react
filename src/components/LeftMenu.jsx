import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faSquareYoutube,
  faPlaystation,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faSubscript,
  faUserNurse,
  faClockRotateLeft,
  faImage,
  faClock,
  faThumbsUp,
  faScissors,
} from "@fortawesome/free-solid-svg-icons";

function LeftMenu() {
  return (
    <>
 
      <h6 className="d-flex alight-items-center">
        <FontAwesomeIcon className="me-4 mb-3" icon={faHouse} /> Home
      </h6>
      <h6 className="d-flex alight-items-center">
        <FontAwesomeIcon className="me-4 mb-3" icon={faSquareYoutube} />
        Shorts
      </h6>
      <h6 className="d-flex alight-items-center">
        <FontAwesomeIcon className="me-4 mb-3" icon={faSubscript} />
        Subscriptions
      </h6>
      <hr />
      <h6>{`You >`}</h6>
      <h6 className="d-flex alight-items-center">
        <FontAwesomeIcon className="me-4 mb-3" icon={faUserNurse} />
        Your channel
      </h6>
      <h6 className="d-flex alight-items-center">
        <FontAwesomeIcon className="me-4 mb-3" icon={faClockRotateLeft} />
        History
      </h6>
      <h6 className="d-flex alight-items-center">
        <FontAwesomeIcon className="me-4 mb-3" icon={faPlaystation} />
        Playlists
      </h6>

      <h6 className="d-flex alight-items-center">
        <FontAwesomeIcon className="me-4 mb-3" icon={faImage} />
        Your Videos
      </h6>
      <h6 className="d-flex alight-items-center">
        <FontAwesomeIcon className="me-4 mb-3" icon={faClock} />
        Watch Later
      </h6>
      <h6 className="d-flex alight-items-center">
        <FontAwesomeIcon className="me-4 mb-3" icon={faThumbsUp} />
        Liked videos
      </h6>
      <h6 className="d-flex alight-items-center">
        <FontAwesomeIcon className="me-4 mb-3" icon={faScissors} />
        Your Clips
      </h6>
      <hr />
    </>
  );
}

export default LeftMenu;
