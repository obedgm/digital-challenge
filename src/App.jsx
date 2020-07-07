import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import Aside from "./components/aside/Aside";
import Modal from "./components/modal/Modal";
import SidebarMobile from "./components/sidebar/SidebarMobile";

function App() {
  return (
    <div className="App" id="App">
      <Sidebar />
      <SidebarMobile />
      <main className="main">
        <div className="main-label">
          <span>Movies</span>
        </div>
        <div className="content">
          <Main />
          <Aside />
        </div>
      </main>
      <Modal />
    </div>
  );
}

export default App;
