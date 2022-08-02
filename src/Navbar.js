import React, { useState } from "react";
import "../src/navbar.css";

export function Navbar() {
  const [open, setOpen] = useState(true);

  const ochish = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button
        onClick={ochish}
        style={open ? { backgroundColor: "red" } : { backgroundColor: "#fff" }}
      >
        {open ? "open" : "close"}


      </button>

      <div className={open ? "header" : "open2"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est
          architecto officia excepturi temporibus dignissimos maiores
          laboriosam, iusto pariatur modi!
        </p>
      </div>
    </div>
  );
}
