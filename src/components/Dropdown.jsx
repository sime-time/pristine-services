import NavItems from "./NavItems";

// create a dropdown nav menu inside a navitem and add any relevant class names 
export default function Dropdown({ submenus, dropdown, depthLevel }) {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (<ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
    {
      submenus.map((submenu, index) => (<NavItems items={submenu} key={index} depthLevel={depthLevel} />))
    }
  </ul>
  );
};
