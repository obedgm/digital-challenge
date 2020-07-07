import React, { useState, useRef } from "react";
import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Minus as MinusIcon } from "@styled-icons/evaicons-solid/Minus";
import "./bottom-menu.scss";

const Collapsible = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setPlusIcon, setPlusIconState] = useState("");
  const [setMinusIcon, setMinusIconState] = useState("none");

  const accordion = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${accordion.current.scrollHeight}px`
    );
    setPlusIconState(setActive === "active" ? "" : "none");
    setMinusIconState(setActive === "active" ? "none" : "");
  }

  return (
    <div className="bottomMenu">
      <button
        type="button"
        className={`collapsible ${setActive}`}
        onClick={toggleAccordion}
      >
        <PlusIcon className="plus-icon" style={{ display: `${setPlusIcon}` }} />
        <MinusIcon
          className="minus-icon"
          style={{ display: `${setMinusIcon}` }}
        />
        {props.title}
      </button>
      <div
        ref={accordion}
        className="accordion_content"
        style={{ maxHeight: `${setHeight}` }}
      >
        <form>
          <ul style={{ listStyle: `none`, padding: "inherit" }}>
            <li>
              <input type="checkbox" name="cat1"></input>
              <label for="cat1">{props.cat1}</label>
            </li>
            <li>
              <input type="checkbox" name="cat2"></input>
              <label for="cat2">{props.cat2}</label>
            </li>
            <li>
              <input type="checkbox" name="cat3"></input>
              <label for="cat3">{props.cat3}</label>
            </li>
            <li>
              <input type="checkbox" name="cat4"></input>
              <label for="cat4">{props.cat4}</label>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Collapsible;
