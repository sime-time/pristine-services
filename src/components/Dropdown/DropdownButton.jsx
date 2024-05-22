import { FaChevronDown } from "react-icons/fa"
import './Dropdown.css'

function DropdownButton({ toggle, text, open }) {
  return (
    <div onClick={toggle} className={`dropdown-btn shadow ${open ? "button-open" : null}`}>
      {text}
      <span className="toggle-icon"><FaChevronDown /></span>
    </div>
  );
}

export default DropdownButton;