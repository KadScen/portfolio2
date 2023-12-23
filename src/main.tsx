import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import BGBlue from "./assets/bg_blue_1080.jpg";
import BGGray from "./assets/bg_gray_1080.jpg";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div
      style={{ backgroundImage: `url(${BGGray})` }}
      className="bg-cover bg-fixed h-screen  overflow-y-auto"
    >
      <App />
    </div>
  </React.StrictMode>
);
