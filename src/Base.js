import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

export default function Base() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "300px", width: "calc(100% - 300px)" }}>
        <Header />
        <div style={{ marginTop: "110px", padding: "20px" }}> {/* Adjust for Header height */}
          <Outlet /> {/* Renders the child route's element */}
        </div>
      </div>
    </div>
  );
}
