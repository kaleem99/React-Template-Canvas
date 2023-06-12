import LearningOutcomes from "../TryItContentComponents/LearningOutcomes";
import Paragraph from "../TryItContentComponents/Paragraph";
import Image from "../TryItContentComponents/Image";
import Video from "../TryItContentComponents/Video";
import Heading from "../TryItContentComponents/Heading";
import Text from "../TryItContentComponents/Text";
import SubHeading from "../TryItContentComponents/Subheading";
import List from "../TryItContentComponents/List";
import OptionalResources from "../TryItContentComponents/OptionalResources";
import OrderedList from "../TryItContentComponents/OrderedList";
import React from "react";
const addElement = (
  select,
  index,
  setElementTypes,
  setState,
  elementTypes,
  state,
  setIndex,
  setBodyHtml,
  bodyHtml,
  handleChange
) => {
  // console.log(select);
  if (select === "" || index > 1) {
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
    case "ContentBlock":
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
        // draggable
        // onDragStart={(e) => handleDragStart(e, index)}
        // onDragOver={handleDragOver}
        // onDrop={(e) => handleDrop(e, index)}
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

  return body;
};

export default addElement;
