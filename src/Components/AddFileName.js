import { useState, useRef } from "react";
import React from "react";
import Draggable from "react-draggable";
const input = {
  width: "280px",
  height: "30px",
  margin: "10px auto",
};
const button = {
  width: "140px",
  height: "30px",
  marginTop: "40px",
  borderRadius: "5px",
};
const AddFileName = ({ setFileName, getDataAndExport }) => {
  const [fileInputName, setFileInputName] = useState("");
  return (
    <Draggable>
      <div
        style={{
          width: "400px",
          height: "300px",
          border: "1px solid",
          margin: "auto",
          paddingTop: "40px",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          background: "white",
          borderRadius: "10px",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          textAlign: "center",
        }}
      >
        <h3>Please input the file name</h3>
        <p style={{ textAlign: "center" }}>File Name: {fileInputName}</p>
        <input
          onChange={(e) => setFileInputName(e.target.value)}
          style={input}
        />
        <br></br>
        <button onClick={() => setFileName(false)} style={button}>
          Cancel
        </button>
        <button
          onClick={() =>
            fileInputName == undefined || fileInputName == ""
              ? alert("Please name the file before saving.")
              : getDataAndExport(fileInputName)
          }
          style={button}
        >
          Save
        </button>
      </div>
    </Draggable>
  );
};

export default AddFileName;
