import React from "react";
import { ArrowIosDownwardOutline as ArrowIcon } from "@styled-icons/evaicons-outline/ArrowIosDownwardOutline";
import { SearchAlt2 as SearchIcon } from "@styled-icons/boxicons-regular/SearchAlt2";
import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <span className="sidebar-text">Menu</span>
          <ArrowIcon className="sidebar-icon" />
        </li>

        <li className="sidebar-item sidebar-item">
          <span className="sidebar-text">Search</span>
          <SearchIcon className="sidebar-icon" />
        </li>

        <li className="sidebar-item">
          <span className="sidebar-text">Add</span>
          <PlusIcon className="sidebar-icon" />
        </li>
        <hr className="sidebar-hr" />
      </ul>

      <ul className="sidebar-list">
        <li className="sidebar-item">
          <span className="sidebar-secondaryText">Label</span>
        </li>

        <li className="sidebar-item">
          <span className="sidebar-secondaryText">Label</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
