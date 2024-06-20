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

import Dropdown from "react-bootstrap/Dropdown";
import "../App.css";
function MobileLeftMenu() {
  return (
    <>
      <Dropdown>
      <Dropdown.Toggle className="rounded-5" variant="dark" id="dropdown-basic">
        Expand
      </Dropdown.Toggle>

      <Dropdown.Menu className=" bg-dark dropDownItem" style={{width:"300px"}}>
        <Dropdown.Item className="w-100 text-light" href="#/action-1">
        <h6 id="bg" className="d-flex alight-items-center">
        <FontAwesomeIcon id="bg" className="me-4 mb-3" icon={faHouse} /> Home
      </h6>
        </Dropdown.Item>

        <Dropdown.Item className="text-light" href="#/action-1">
        <h6 id="bg" className="d-flex alight-items-center">
        <FontAwesomeIcon id="bg" className="me-4 mb-3" icon={faSquareYoutube} />
        Shorts
      </h6>
        </Dropdown.Item>

        
        <Dropdown.Item className="text-light" href="#/action-2">
        <h6 id="bg" className="d-flex alight-items-center">
        <FontAwesomeIcon id="bg" className="me-4 mb-3" icon={faSubscript} />
        Subscriptions
      </h6>
        </Dropdown.Item>


        <Dropdown.Item className="text-light" href="#/action-3">
        <h6 id="bg">{`You >`}</h6>
      <h6 id="bg" className="d-flex alight-items-center">
        <FontAwesomeIcon id="bg" className="me-4 mb-3" icon={faUserNurse} />
        Your channel
      </h6>
        </Dropdown.Item>


        
        <Dropdown.Item className="text-light" href="#/action-4">
        <h6 id="bg" className="d-flex alight-items-center">
        <FontAwesomeIcon id="bg" className="me-4 mb-3" icon={faClockRotateLeft} />
        History
      </h6>
        </Dropdown.Item>


        <Dropdown.Item className="text-light" href="#/">
           <h6 id="bg" className="d-flex alight-items-center">
        <FontAwesomeIcon id="bg" className="me-4 mb-3" icon={faPlaystation} />
        Playlists
      </h6>
        </Dropdown.Item>


        <Dropdown.Item className="text-light" href="#/">
        <h6 id="bg" className="d-flex alight-items-center">
        <FontAwesomeIcon id="bg" className="me-4 mb-3" icon={faImage} />
        Your Videos
      </h6>
        </Dropdown.Item>


        <Dropdown.Item className="text-light" href="#/">
         <h6 id="bg" className="d-flex alight-items-center">
        <FontAwesomeIcon id="bg" className="me-4 mb-3" icon={faClock} />
        Watch Later
      </h6>
        </Dropdown.Item>


        <Dropdown.Item className="text-light" href="#/">
           <h6 id="bg" className="d-flex alight-items-center">
        <FontAwesomeIcon id="bg" className="me-4 mb-3" icon={faThumbsUp} />
        Liked videos
      </h6>
        </Dropdown.Item>


        <Dropdown.Item className="text-light" href="#/">
           <h6 id="bg" className="d-flex alight-items-center">
        <FontAwesomeIcon id="bg" className="me-4 mb-3" icon={faScissors} />
        Your Clips
      </h6>
      <hr />
        </Dropdown.Item>

       
      </Dropdown.Menu>
    </Dropdown>
    </>
  )
}

export default MobileLeftMenu