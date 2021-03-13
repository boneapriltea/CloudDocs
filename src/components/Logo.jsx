import React from "react";
import { ReactComponent as Topgg } from "../assets/logo.svg";

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Topgg />
      <p style={{ margin: "0 0 0 15px" }} className="site-title">
        SleepyCloud Docs
      </p>
    </div>
  );
}

export default Logo;
