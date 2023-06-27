const facultyBiographiesComp = (state, elementTypes) => {
  let result = document.createElement("div");
  console.log(elementTypes);
  console.log(state);
  const stateValues = state;
  let orderedListIndex = 1;
  for (let i = 0; i < elementTypes.length; i++) {
    switch (elementTypes[i]) {
      case "LearningOutcomes":
        orderedListIndex = 1;
        break;
      case "ContentBlock":
        result.innerHTML += stateValues[i];
        orderedListIndex = 1;
        break;
      case "Image":
        result.innerHTML += `<div style="margin-top: 20px;">
            <img width="550px" height="300px" alt="" src="${stateValues[i]}"></img>
          </div>`;
        orderedListIndex = 1;
        break;
      case "Video":
        result.innerHTML += ` <iframe
            title="video"
            style="border:none;margin-bottom: 20px;"
            width="550px"
            height="300px"
            src="${stateValues[i]}"
          ></iframe>`;
        orderedListIndex = 1;
        break;
      case "Heading":
        result.innerHTML += `<h1 style="color: #E52370">${stateValues[i]}</h1>`;
        orderedListIndex = 1;
        break;
      case "Text":
        result.innerHTML += `<p>${stateValues[i]}</p>`;
        orderedListIndex = 1;
        break;
      case "Subheading":
        result.innerHTML += `<h2>${stateValues[i]}</h2>`;
        orderedListIndex = 1;
        break;
      case "UnorderedList":
        result.innerHTML += `<li style="max-width: 50%;">${stateValues[i]}</li><br>`;
        orderedListIndex = 1;
        break;
      case "OrderedList":
        result.innerHTML += `<p style="max-width: 50%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${orderedListIndex}. ${stateValues[i]}</p>`;
        orderedListIndex++;
        break;
      case "OptionalResources":
        orderedListIndex = 1;
        break;
      default:
        result = "";
        break;
    }
  }
  const data = `<div
  style="
    width: 90%;
    height: auto;
    padding: 20px;
    border: none;
    margin: 2% auto"
  >
  ${result.innerHTML}
  </div>
`;
  return data;
};

export default facultyBiographiesComp;
