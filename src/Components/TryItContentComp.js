const facultyBiographiesComp = (state, elementTypes) => {
  let result = document.createElement("div");
  console.log(elementTypes);
  console.log(state);
  const stateValues = Object.values(state);
  for (let i = 0; i < elementTypes.length; i++) {
    switch (elementTypes[i]) {
      case "LearningOutcomes":
        break;
      case "Paragraph":
        result.innerHTML += `
          <div style="width: 50%">
            <p>${stateValues[i]}</p>
          </div>
        `;
        break;
      case "Image":
        result.innerHTML += `<div style="margin-top: 20px;">
            <img width="550px" height="300px" alt="" src="${stateValues[i]}"></img>
          </div>`;
        break;
      case "Video":
        result.innerHTML += ` <iframe
            title="video"
            style="border:none;margin-bottom: 20px;"
            width="550px"
            height="300px"
            src="${stateValues[i]}"
          ></iframe>`;

        break;
      case "Heading":
        result.innerHTML += `<h1 style="color: #E52370">${stateValues[i]}</h1>`;
        break;
      case "Text":
        result.innerHTML += `<p>${stateValues[i]}</p>`;

        break;
      case "SubHeading":
        result.innerHTML += `<h2>${stateValues[i]}</h2>`;

        break;
      case "List":
        result.innerHTML += `<li style="max-width: 50%;">${stateValues[i]}</li><br>`;
        break;
      case "OptionalResources":
        break;
      default:
        result = "";
        break;
    }
  }
  console.log(result);
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
