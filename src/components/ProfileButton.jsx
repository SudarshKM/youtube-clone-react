import { faGoogle, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faRightFromBracket,
  faDollarSign,
  faShieldHalved,
  faKeyboard,
  faEyeSlash,
  faGlobe,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "react-bootstrap/Dropdown";
import "../App.css";
import { Link } from "react-router-dom";

function ProfileButton() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="rounded-5" variant="dark" id="dropdown-basic">
        <FontAwesomeIcon id="bg" className="me-3" icon={faUser} />
      </Dropdown.Toggle>

      <Dropdown.Menu className="bg-dark dropDownItem">
        <Dropdown.Item className="text-light" href="#/action-1">
          <Link to={"/User"} style={{textDecoration:"none" , color:"white" ,backgroundColor:'#21252900'}}>Sudarsh K M : Sync On</Link>
        </Dropdown.Item>
        <hr className="text-light" />

        <Dropdown.Item className="text-light" href="#/action-1">
          <FontAwesomeIcon id="bg" className="me-3" icon={faGoogle} />
          Google Account
        </Dropdown.Item>
        <Dropdown.Item className="text-light" href="#/action-2">
          <FontAwesomeIcon id="bg" className="me-3" icon={faUser} />
          Switch Account
        </Dropdown.Item>
        <Dropdown.Item className="text-light" href="#/action-3">
          <FontAwesomeIcon id="bg" className="me-3" icon={faRightFromBracket} />
          Sign Out
        </Dropdown.Item>
        <hr className="text-light" />
        <Dropdown.Item className="text-light" href="#/action-4">
          <FontAwesomeIcon id="bg" className="me-3" icon={faSquareYoutube} />
          Youtube Studio
        </Dropdown.Item>
        <Dropdown.Item className="text-light" href="#/">
          <FontAwesomeIcon id="bg" className="me-3" icon={faDollarSign} />
          Purchases and Memberships
        </Dropdown.Item>
        <hr className="text-light" />
        <Dropdown.Item className="text-light" href="#/">
          <FontAwesomeIcon id="bg" className="me-3" icon={faShieldHalved} />
          Your data in Youtube
        </Dropdown.Item>
        <Dropdown.Item className="text-light" href="#/">
          <FontAwesomeIcon id="bg" className="me-3" icon={faKeyboard} />
          Keyboard shortcuts
        </Dropdown.Item>
        <Dropdown.Item className="text-light" href="#/">
          <FontAwesomeIcon id="bg" className="me-3" icon={faEyeSlash} />
          Restricted Mode : Off
        </Dropdown.Item>
        <Dropdown.Item className="text-light" href="#/">
          <FontAwesomeIcon id="bg" className="me-3" icon={faGlobe} />
          Location : India
        </Dropdown.Item>
        <hr className="text-light" />
        <Dropdown.Item className="text-light" href="#/">
          <FontAwesomeIcon id="bg" className="me-3" icon={faGear} />
          Settings
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ProfileButton;
