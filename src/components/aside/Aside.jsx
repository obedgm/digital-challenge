import React from "react";
import TopMenu from "./top-menu/TopMenu";
import BottomMenu from "./bottom-menu/BottomMenu";
import "./aside.scss";

const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside-wrapper">
        <TopMenu />
        <BottomMenu />
      </div>
    </aside>
  );
};

export default Aside;
