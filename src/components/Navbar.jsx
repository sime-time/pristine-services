import { navOptions } from "./NavItems";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <nav>
      <ul className="menus">
        {navOptions.map((menu, index) => {
          const depthLevel = 0;
          return <NavItems items={menu} key={index} depthLevel={depthLevel} />;
        })
        }
      </ul>
    </nav>
  );
}