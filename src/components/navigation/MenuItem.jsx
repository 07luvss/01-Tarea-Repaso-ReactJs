import React from "react";

export const MenuItem = ({ menuData }) => {
  return (
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {menuData.map( (item) => (
          <li className="nav-item " key={item.id}>
            <a
              className="nav-link active text-white"
              aria-current="page"
              href="#"
            >
              { item.name }
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

MenuItem.defaultProps = {
  menuData: [
    {
      id: 1,
      name: "Home",
      link: "/home",
      active: true,
    },
    {
      id: 2,
      name: "Shop",
      link: "/shop",
      active: false,
    }
  ]
}