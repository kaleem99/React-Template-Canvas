const DivContent = `<div
style="
  width: 300px;
  height: auto;
  /* border: 1px solid; */
  position: absolute;
  background: white;
  display: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  font-size: larger;
  padding: 10px;
  border-radius: 10px;
  top: 40%;
  right: 40%;
"
id="DivA"
class="None"
>
<img
  width="28px"
  height="28px"
  style="position: absolute; right: 2px; top: 2px"
  src="https://kaleem99.github.io/hostingContents/remove-button.png"
  onclick="document.getElementById('DivA').style.display = 'none';"
/>

<h3 style="margin-top: 0px">Format HTML Content</h3>
<label>Font Size:</label>
<input
  onchange="handleChange(this)"
  type="number"
  style="width: 50px; font-size: large"
  value="10"
  id="pixels"
  name="pixels"
  min="1"
  max="50"
/><text> px</text> <br /><br />
<input
  onchange="boldElement(this)"
  type="checkbox"
  id="Bold"
  name="Bold"
  value="Bold"
/>
<label for="Bold">Bold</label><br />
<input
  onchange="italicElement(this)"
  type="checkbox"
  id="Italic"
  name="Italic"
  value="Italic"
/>
<label for="Italic">Italic</label><br />
</div>`;

const ScriptContent = `
$("#DivA").draggable();
chosenElement = "";

function testingData(element) {
  chosenElement = element
  console.log(element.children)
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

export { DivContent, ScriptContent };
