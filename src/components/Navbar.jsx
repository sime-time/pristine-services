const navItems = [
  {label: "Home", url: "/"},
  {label: "About Us", url: "/about"},
  {label: "Services", url: "/services"}, 
  {label: "Reviews", url: "/reviews"},
  {label: "FAQ", url: "/faq"},
  {label: "Contact", url: "/contact"}
];

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a>Home</a> 
        </li>
      </ul>
    </nav>
  );
}