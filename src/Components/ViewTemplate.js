import React from "react";

const ViewTemplate = ({ data, courseSection }) => {
  let result = localStorage.getItem(courseSection, JSON);
  result = JSON.parse(result);
  if (result === null) {
    result = { text: "No template to show" };
  }

  return (
    <div
      style={{ width: "100%", height: "auto", margin: "auto" }}
      dangerouslySetInnerHTML={{ __html: result.text }}
    ></div>
  );
};
export default ViewTemplate;
