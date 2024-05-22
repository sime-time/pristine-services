import './Dropdown.css';

function DropdownContent({ open, content }) {
  return (
    <div className={`dropdown-content shadow ${open ? "content-open" : null}`}>
      {content}
    </div >
  );
}

export default DropdownContent;