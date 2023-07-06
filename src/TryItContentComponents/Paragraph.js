import Draggable from "react-draggable";
import { useEffect, useState } from "react";
import { DivContent, ScriptContent } from "./HTMLContent";
function Paragraph({ type, index, onChange, state }) {
  const [num, setNum] = useState(0);
  useEffect(() => {
    if (num === 0) {
      const div = document.createElement("div");

      div.innerHTML = DivContent;
      const scriptElement = document.createElement("script");
      const script2 = document.createElement("script");
      script2.src = "http://code.jquery.com/jquery-2.1.0.min.js";
      script2.onload = loadJQueryUI;
      function loadJQueryUI() {
        const link = document.createElement("link");
        link.href =
          "//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css";

        const script3 = document.createElement("script");
        script3.src =
          "//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js";
        script3.onload = initializeDraggable;

        document.body.appendChild(link);
        document.body.appendChild(script3);
      }
      function initializeDraggable() {
        scriptElement.innerHTML = ScriptContent;
        document.body.appendChild(scriptElement);
      }
      document.body.appendChild(script2);
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
