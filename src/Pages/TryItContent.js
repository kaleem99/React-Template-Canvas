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

function FacultyBiographies({ courseSection, view }) {
  const [state, setState] = useState({
    input1: "",
    input2: "",
    input3: "",
  });
  let body = [];
  const [bodyHtml, setBodyHtml] = useState("");
  const [select, setSelect] = useState("");
  const [index, setIndex] = useState(1);
  const changeStateValue = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(state);
  };
  const writeToFile = async () => {
    const courseOverviewResult = facultyBiographiesComp(state, elementTypes);
    console.log(courseOverviewResult);
    localStorage.setItem(
      "Try It Content",
      JSON.stringify({ text: courseOverviewResult })
    );
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(state, index);
  const addElement = (select) => {
    setIndex(index + 1);
    elementTypes.push(select);
    console.log(elementTypes);
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
      console.log(component);
      return <React.Fragment key={index}>{component}</React.Fragment>;
    });

    setBodyHtml(result);
    console.log(state);
    const dataValues = Object.values(state);
    setTimeout(() => {
      let x = document.querySelectorAll(`.inputs`);
      for (let i = 0; i < x.length; i++) {
        x[i].value = dataValues[i] || "";
      }
    }, 100);
    return body;
  };
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
            <option disabled selected>
              None
            </option>
            {elementTypeNames.map((item) => (
              <option value={item}>{item}</option>
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
    return <ViewTemplate courseSection={courseSection} />;
  }
}

export default FacultyBiographies;
