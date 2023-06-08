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
      case "Paragraph":
        result.innerHTML += `
          <div style="width: 50%">
            <p>${stateValues[i]}</p>
          </div>
        `;
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
    border: 1px solid;
    margin: 2% auto"
  >
  <div>
  <img src="https://graphics.getsmarter.com/GS+email+signatures/Email+signature+tool/dist/img/g.jpg"></img>
</div>
  ${result.innerHTML}
  </div>
`;
  return data;
};

export default facultyBiographiesComp;
