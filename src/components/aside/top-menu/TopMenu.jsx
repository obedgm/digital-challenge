import React from "react";
import { SearchAlt2 as SearchIcon } from "@styled-icons/boxicons-regular/SearchAlt2";
import { CalendarAlt as CalendarIcon } from "@styled-icons/boxicons-regular/CalendarAlt";
import { useStore } from "../../../store";
import "./top-menu.scss";

const SearchInput = () => {
  const { search, setSearch } = useStore();
  return (
    <div className="field">
      <SearchIcon className="field-icon" />
      <input
        type="text"
        className="field-input"
        placeholder="Placeholder"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

const DateInput = () => {
  const { date, setDate } = useStore();
  return (
    <div className="field">
      <CalendarIcon className="field-icon" />
      <input
        type="text"
        className="field-input"
        placeholder="Placeholder"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};

const TopMenu = () => {
  return (
    <div className="topMenu">
      <div className="topMenu-inputDiv">
        <SearchInput />
      </div>
      <div className="topMenu-inputDiv">
        <DateInput />
      </div>
    </div>
  );
};

export default TopMenu;
