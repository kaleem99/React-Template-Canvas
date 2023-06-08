import React, { useState } from "react";
import facultyBiographiesComp from "Components/TryItContentComp";
import ViewTemplate from "Components/ViewTemplate";
import LearningOutcomes from "TryItContentComponents/LearningOutcomes";
import Paragraph from "TryItContentComponents/Paragraph";
import Image from "TryItContentComponents/Image";
import Video from "TryItContentComponents/Video";
import Heading from "TryItContentComponents/Heading";
import Text from "TryItContentComponents/Text";
import SubHeading from "TryItContentComponents/Subheading";
import List from "TryItContentComponents/List";
import OptionalResources from "TryItContentComponents/OptionalResources";
import OrderedList from "TryItContentComponents/OrderedList";
const elementTypeNames = [
  "LearningOutcomes",
  "Paragraph",
  "Text",
  "Heading",
  "Subheading",
  "Image",
  "Video",
  "OptionalResources",
  "UnorderedList",
  "OrderedList",
];
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
}) {
  const [drag, setDrag] = useState("");
  const [drop, setDrop] = useState("");

  const [select, setSelect] = useState("");

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
  const writeToFile = async () => {
    const courseOverviewResult = facultyBiographiesComp(state, elementTypes);
    console.log(courseOverviewResult);
    localStorage.setItem(
      "Try It Content",
      JSON.stringify({ text: courseOverviewResult })
    );
  };
  const handleChange = (value, index) => {
    const newArrState = state;
    newArrState[index - 1] = value;
    console.log(elementTypes);
    setState(newArrState);
  };

  const addElement = (select) => {
    // console.log(select);
    if (select === "") {
      return false;
    }
    // console.log(index);
    const newElementTypes = elementTypes;
    newElementTypes.push(select);
    setElementTypes(newElementTypes);
    // let key = `item${index}`;
    const newArrState = state;
    newArrState.push("");
    setState(newArrState);
    const body = bodyHtml;
    const nameFormatted = select
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .toLowerCase();
    switch (select) {
      case "LearningOutcomes":
        body.push(
          <LearningOutcomes
            index={index}
            state={state}
            type={nameFormatted}
            onChange={handleChange}
          />
        );
        break;
      case "Paragraph":
        body.push(
          <Paragraph
            state={state}
            index={index}
            type={nameFormatted}
            onChange={handleChange}
          />
        );
        break;
      case "Image":
        body.push(
          <Image
            state={state}
            index={index}
            type={nameFormatted}
            onChange={handleChange}
          />
        );
        break;
      case "Video":
        body.push(
          <Video
            state={state}
            index={index}
            type={nameFormatted}
            onChange={handleChange}
          />
        );
        break;
      case "Heading":
        body.push(
          <Heading
            state={state}
            index={index}
            type={nameFormatted}
            onChange={handleChange}
          />
        );
        break;
      case "Text":
        body.push(
          <Text
            state={state}
            index={index}
            type={nameFormatted}
            onChange={handleChange}
          />
        );
        break;
      case "Subheading":
        body.push(
          <SubHeading
            state={state}
            index={index}
            type={nameFormatted}
            onChange={handleChange}
          />
        );
        break;
      case "UnorderedList":
        body.push(
          <List
            state={state}
            index={index}
            type={nameFormatted}
            onChange={handleChange}
          />
        );
        break;
      case "OrderedList":
        body.push(
          <OrderedList
            state={state}
            index={index}
            type={nameFormatted}
            onChange={handleChange}
          />
        );
        break;
      case "OptionalResources":
        body.push(
          <OptionalResources
            index={index}
            state={state}
            onChange={handleChange}
            type={nameFormatted}
          />
        );
        break;
      default:
        body.push("");
        break;
    }
    const result = body.map((component, index) => {
      return (
        <React.Fragment key={index}>
          <div
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            {component}
          </div>
        </React.Fragment>
      );
    });
    setIndex(index + 1);
    setBodyHtml(result);

    setTimeout(() => {
      let x = document.querySelectorAll(`.inputs`);
      for (let i = 0; i < x.length; i++) {
        console.log(x[i].tagName);
        if (x[i].tagName === "DIV") {
          x[i].innerHTML = state[i] || "";
        } else {
          x[i].value = state[i] || "";
        }
      }
    }, 1);
    console.log("STATE");
    console.log(state);
    console.log("BODYHTML");

    console.log(bodyHtml);

    return body;
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
    setElementTypes(newDataArr3);
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
            height: "auto",
            marginBottom: 20,
            width: "400px",
            border: "1px solid",
            marginLeft: "100px",
            padding: 10,
          }}
        >
          <select
            onChange={(e) => setSelect(e.target.value)}
            style={{ width: "180px", height: "40px" }}
          >
            <option value={"None"} disabled selected>
              None
            </option>
            {elementTypeNames.map((item, i) => (
              <option key={i} value={item}>
                {item.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase()}
              </option>
            ))}
          </select>
          <button
            onClick={() => addElement(select)}
            style={{
              width: "auto",
              paddingLeft: "15px",
              paddingRight: "15px",
              height: "40px",
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "20px",
              // borderRadius: "5px",
              border: "1px solid",
            }}
          >
            Add Element
          </button>
          <h2>{select.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase()}</h2>
        </div>
        <div
          style={{
            width: "90%",
            height: "auto",
            padding: "20px",
            border: "1px solid",
            margin: "2% auto",
          }}
        >
          <div>
            <img src="https://graphics.getsmarter.com/GS+email+signatures/Email+signature+tool/dist/img/g.jpg"></img>
          </div>
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
            {bodyHtml}
          </div>
        </div>
        <button
          onClick={() => writeToFile()}
          style={{
            width: "auto",
            paddingLeft: "15px",
            paddingRight: "15px",
            height: "40px",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "20px",
            borderRadius: "5px",
            border: "1px solid",
          }}
        >
          Save Template
        </button>
      </>
    );
  } else {
    return <ViewTemplate courseSection={courseSection} />;
  }
}

export default FacultyBiographies;
