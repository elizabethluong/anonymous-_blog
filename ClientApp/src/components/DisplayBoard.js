import React from "react";

export const DisplayBoard = ({ numberOfUserPost, getAll }) => {
  return (
    <div style={{ backgroundColor: "#c9d7ff" }} className="display-board">
      <h4 style={{ color: "white" }}>Posts</h4>
      <div className="number">{numberOfUserPost}</div>
      <div className="btn">
        <button
          type="button"
          onClick={(e) => getAll()}
          className="btn btn-warning">
          Get all Posts
        </button>
      </div>
    </div>
  );
};
