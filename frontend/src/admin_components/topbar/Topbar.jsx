import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" style={{textDecoration: "none"}}>
          <span className="logo">Madaan Store</span>
          </Link>
        </div>
        <div className="topRight">
          <img src="https://avatars.githubusercontent.com/u/78895271?v=4" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
