import React, {useState} from "react";
import { ArrowIosDownwardOutline as ArrowIcon } from "@styled-icons/evaicons-outline/ArrowIosDownwardOutline";
import { SearchAlt2 as SearchIcon } from "@styled-icons/boxicons-regular/SearchAlt2";
import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import {Close as CloseIcon} from '@styled-icons/evaicons-solid/Close'
import "./sidebar.scss";

const SidebarMobile = () => {
    const [setActive, setActiveState] = useState("");
    const [setWidth, setWidthState] = useState("0px");

    function toggleMenu() {
        setActiveState(setActive === "" ? "active" : "")
        setWidthState(setActive === "active" ? "0px" : `260px`)
    }

  return (
      <div>
        <nav className="mobile" style={{maxWidth: `${setWidth}`}}>
            <CloseIcon
            className="mobile-icon"
            style={{marginTop: "-35px", cursor: "pointer"}}
            onClick={toggleMenu}/>
        <ul className="mobile-list">
            <li className="mobile-item">
            <span className="mobile-text">Menu</span>
            <ArrowIcon className="mobile-icon" />
            </li>
            <li className="mobile-item mobile-item">
            <span className="mobile-text">Search</span>
            <SearchIcon className="mobile-icon" />
            </li>

            <li className="mobile-item">
            <span className="mobile-text">Add</span>
            <PlusIcon className="mobile-icon" />
            </li>
            <hr className="mobile-hr" />
        </ul>

        <ul className="mobile-list">
            <li className="mobile-item">
            <span className="mobile-secondaryText">Label</span>
            </li>

            <li className="mobile-item">
            <span className="mobile-secondaryText">Label</span>
            </li>
        </ul>
        </nav>
        <span style={{fontSize: 30}} onClick={toggleMenu} className="hamburger">&#9776;</span>
    </div>
  );
};

export default SidebarMobile;
