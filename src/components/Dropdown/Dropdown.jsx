import React, { useState, useEffect, useRef } from 'react';
import DropdownContent from './DropdownContent.jsx';
import DropdownButton from './DropdownButton.jsx';
import './Dropdown.css';

function Dropdown({ buttonText, content }) {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setOpen((open) => !open);
  }

  useEffect(() => {
    const handler = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };

  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <DropdownButton toggle={toggleDropdown} open={open} text={buttonText} />
      <DropdownContent open={open} content={content} />
    </div>
  );
}

export default Dropdown;