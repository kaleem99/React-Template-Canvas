import Draggable from "react-draggable";
import { useEffect, useState } from "react";
function Paragraph({ type, index, onChange, state }) {
  const [num, setNum] = useState(0);
  useEffect(() => {
    if (num === 0) {
      const div = document.createElement("div");

      div.innerHTML = `<Draggable><div
      style="
      width: 300px;
      height: 40%;
      border: 1px solid;
      position: absolute;
      background: white;
      display: none;
      padding: 10px;
      border-radius: 10px;
      top: 50%;
      right: 0%"
      id="DivA"
      class="None"
    >
    <h3 onclick="document.getElementById('DivA').style.display = 'none';" style="position: absolute; right: 0px; top: 0px;">Close</h3>
    <h3>Format HTML Content</h3>
    <label>Font Size:</label>
      <input
      onchange="handleChange(this)"
        type="number"
        style="
      width: 50px;
   "
        value="10"
        id="pixels"
        name="pixels"
        min="1"
        max="50"
      /><text> px</text>
      <br>
      <input onchange="boldElement(this)" type="checkbox" id="Bold" name="Bold" value="Bold">
      <label for="Bold">Bold</label><br>
      <input onchange="italicElement(this)" type="checkbox" id="Italic" name="Italic" value="Italic">
      <label for="Italic">Italic</label><br>
    </div></Draggable>`;
      const scriptElement = document.createElement("script");
      scriptElement.innerHTML = `
      chosenElement = "";

      function testingData(element) {
        chosenElement = element
        document.getElementById("pixels").value = chosenElement.style.fontSize.split("px")[0];
        const boldElement = document.getElementById("Bold"); 
        const italicElement = document.getElementById("Italic")
        if(chosenElement.style.fontWeight >= 400){
          boldElement.checked = true;
        }
        else{
          boldElement.checked = false;
        }
          let newElement = document.getElementById("DivA")
          newElement.style.display = "block"
        if(chosenElement.style.fontStyle === "italic"){
          italicElement.checked = true;
        }
        else{
          italicElement.checked = false;
        }
        }function handleChange(element){
          chosenElement.style.fontSize = element.value + "px";

        }
        function boldElement(element){
          if(element.checked === false){
            chosenElement.style.fontWeight = "normal";
          }else{
            chosenElement.style.fontWeight = "bold";
          }
        }
        function italicElement(element){
          if(element.checked === false){
            chosenElement.style.fontStyle = "normal";
          }else{
            chosenElement.style.fontStyle = "italic";
          }
        }
        `;

      document.body.appendChild(scriptElement);
      document.body.appendChild(div);
      setNum(num + 1);
    }
  }, []);
  return (
    <div>
      <Draggable>
        <h3>{type}:</h3>
      </Draggable>
      <div
        style={{
          width: "auto",
          maxHeight: "65vh",
          overflow: "scroll",
          border: "1px solid",
          minHeight: "200px",
          padding: "20px",
        }}
        onInput={(e) => onChange(e.target.innerHTML, index)}
        value={eval(state[`input${index}`])}
        name={"input" + index}
        className={`inputs`}
        key={index}
        id="editableDiv"
        contentEditable="true"
      ></div>
    </div>
  );
}

export default Paragraph;
