import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";



export const navOptions = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services", href: "/services", submenu: [
      { label: "Residential", href: "/services/residential" },
      { label: "Commercial", href: "/services/commercial" },
      { label: "Airbnb", href: "/services/airbnb" },
    ]
  },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];



export default function NavItems({ items, depthLevel }) {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // cleanup the event listener 
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  function onMouseEnter() {
    window.innerWidth > 960 && setDropdown(true);
  };

  function onMouseLeave() {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li className="nav-item" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {
        items.submenu ? (<>
          <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
            {items.label} {" "} {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button> <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
        </>
        ) : (<a href={items.href}>{items.label}</a>)
      }
    </li>
  );
};