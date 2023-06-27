import React, { useState } from "react";
import ViewTemplate from "Components/ViewTemplate";
import Paragraph from "TryItContentComponents/Paragraph";
function FacultyBiographies({
  courseSection,
  view,
  index,
  setIndex,
  state,
  setState,
  bodyHtml,
  setBodyHtml,
  elementTypes,
  setElementTypes,
  select,
  setSelect,
  handleChange,
}) {
  const [drag, setDrag] = useState("");
  const [drop, setDrop] = useState("");

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
    setDrag(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    // console.log(bodyHtml);
    setDrop(targetIndex);
  };

  const changeElementPositions = () => {
    let newDataArr = [...bodyHtml];
    let temp = newDataArr[drag];
    newDataArr[drag] = newDataArr[drop];
    newDataArr[drop] = temp;
    setBodyHtml(newDataArr);
  };
  const changeTextPositions = () => {
    let newDataArr2 = [...state];
    let temp = newDataArr2[drag];
    newDataArr2[drag] = newDataArr2[drop];
    newDataArr2[drop] = temp;
    setState(newDataArr2);
  };
  const changeElementTypesPosition = () => {
    let newDataArr3 = [...elementTypes];
    let temp = newDataArr3[drag];
    newDataArr3[drag] = newDataArr3[drop];
    newDataArr3[drop] = temp;
    // setElementTypes(newDataArr3);
  };
  if (drag !== "" && drop !== "") {
    changeElementPositions();
    changeTextPositions();
    changeElementTypesPosition();
    setDrag("");
    setDrop("");
  }
  if (!view) {
    return (
      <>
        <div
          style={{
            width: "90%",
            height: "auto",
            padding: "20px",
            // border: "1px solid",
            margin: "2% auto",
            minHeight: "300px",
          }}
        >
          {/* <div>
            <img src="https://graphics.getsmarter.com/GS+email+signatures/Email+signature+tool/dist/img/g.jpg"></img>
          </div> */}
          <h1 style={{ color: "#E52370" }}>
            [Try It content]{" "}
            {/* <input
              onChange={changeStateValue}
              value={state.input1}
              name="input1"
              style={{ width: "200px", height: "35px" }}
              placeholder="Try it heading"
            /> */}
          </h1>
          <div
            className="FacultyBiographies"
            style={{
              width: "100%",
              height: "auto",
              //   padding: "20px",
              //   border: "1px solid",
              margin: "auto",
            }}
          >
            <Paragraph
              state={state}
              index={index}
              type={courseSection
                .replace(/([a-z])([A-Z])/g, "$1 $2")
                .toLowerCase()}
              onChange={handleChange}
            />
          </div>
        </div>
      </>
    );
  } else {
    return <ViewTemplate courseSection={courseSection} />;
  }
}

export default FacultyBiographies;
