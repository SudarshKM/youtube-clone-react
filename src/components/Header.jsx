import React from "react";
import ProfileButton from "./ProfileButton";
import '../App.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faMicrophone,
  faSubscript,
  faVideo,
  faBell,
  faCircle,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <div className="w-100 d-flex justify-content-between align-items-center">
        <h4 className="d-flex alight-items-center ">
          <FontAwesomeIcon id="icon" icon={faYoutube} className="text-danger fs-3 me-1" />
          YouTube
        </h4>
        <div
          className=" d-flex justify-content-center align-items-center flex-row"
          style={{ width: "35%" }}
        >
          <div id="searchBar" className=" form-control rounded-pill d-flex justify-content-center align-items-center flex-row">
            <input
              
              className="form-control rounded-pill"
              type="text"
              placeholder="   Search"
              style={{ width: "", border: "0" }}
            />
            <FontAwesomeIcon className="fs-4 text-dark bg-light"  icon={faMagnifyingGlass} />
          </div>
          <div
            className=" btn btn-light btn-outline-dark rounded-circle d-flex justify-content-center align-items-center "
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: "#22222220",
              color: "white",
            }}
          >
            <FontAwesomeIcon className="" icon={faMicrophone} />
          </div>
        </div>

        <div className="d-flex align-items-center headerRightDiv">
          <FontAwesomeIcon className="me-4 fs-4" icon={faVideo} />
          <FontAwesomeIcon className="me-4 fs-4" icon={faBell} />
          {/* <FontAwesomeIcon className="me-4 fs-4" icon={faCircle} /> */}
          <ProfileButton />
        </div>
      </div>
    </>
  );
}

export default Header;
