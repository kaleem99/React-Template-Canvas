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
const elementTypeNames = [
  "LearningOutcomes",
  "Paragraph",
  "Text",
  "Heading",
  "SubHeading",
  "Image",
  "Video",
  "OptionalResources",
  "List",
];
const elementTypes = [];
const newArr = [];

function FacultyBiographies({
  courseSection,
  view,
  index,
  setIndex,
  state,
  setState,
  bodyHtml,
  setBodyHtml,
}) {
  const [drag, setDrag] = useState("");
  const [drop, setDrop] = useState("");

  const [select, setSelect] = useState("");
  let body = [];

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
    setDrag(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    console.log(bodyHtml);
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
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    let newArrData = state;
    console.log(index);
    newArrData[index - 1] = { [name]: value };
    console.log(newArrData);
    setState(newArrData);
    console.log(name, value, index);
    console.log(state);
  };
  const addElement = (select) => {
    console.log(select);
    if (select === "") {
      return false;
    }
    setIndex(index + 1);
    console.log(index);
    elementTypes.push(select);
    let key = `item${index}`;
    newArr.push({ [key]: "" });
    setState(newArr);
    console.log(state);
    switch (select) {
      case "LearningOutcomes":
        body.push(
          ...bodyHtml,
          <LearningOutcomes
            index={index}
            state={state}
            type={select}
            onChange={handleChange}
          />
        );
        break;
      case "Paragraph":
        body.push(
          ...bodyHtml,
          <Paragraph
            state={state}
            index={index}
            type={select}
            onChange={handleChange}
          />
        );
        break;
      case "Image":
        body.push(
          ...bodyHtml,
          <Image
            state={state}
            index={index}
            type={select}
            onChange={handleChange}
          />
        );
        break;
      case "Video":
        body.push(
          ...bodyHtml,
          <Video
            state={state}
            index={index}
            type={select}
            onChange={handleChange}
          />
        );
        break;
      case "Heading":
        body.push(
          ...bodyHtml,
          <Heading
            state={state}
            index={index}
            type={select}
            onChange={handleChange}
          />
        );
        break;
      case "Text":
        body.push(
          ...bodyHtml,
          <Text
            state={state}
            index={index}
            type={select}
            onChange={handleChange}
          />
        );
        break;
      case "SubHeading":
        body.push(
          ...bodyHtml,
          <SubHeading
            state={state}
            index={index}
            type={select}
            onChange={handleChange}
          />
        );
        break;
      case "List":
        body.push(
          ...bodyHtml,
          <List
            state={state}
            index={index}
            type={select}
            onChange={handleChange}
          />
        );
        break;
      case "OptionalResources":
        body.push(
          ...bodyHtml,
          <OptionalResources
            index={index}
            state={state}
            onChange={handleChange}
            type={select}
          />
        );
        break;
      default:
        body = "";
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

    setBodyHtml(result);
    console.log(state);
    const dataValues = state.map((data) => Object.values(data));
    console.log(dataValues);
    setTimeout(() => {
      let x = document.querySelectorAll(`.inputs`);
      for (let i = 0; i < x.length; i++) {
        x[i].value = dataValues[i] || "";
      }
    }, 100);
    return body;
  };
  if (drag !== "" && drop !== "") {
    let newDataArr = [...bodyHtml];
    let temp = newDataArr[drag];
    newDataArr[drag] = newDataArr[drop];
    newDataArr[drop] = temp;
    setBodyHtml(newDataArr);
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
                {item}
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
          <h2>{select}</h2>
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
    elementTypes.length = 0;
    newArr.length = 0;
    return <ViewTemplate courseSection={courseSection} />;
  }
}

export default FacultyBiographies;
