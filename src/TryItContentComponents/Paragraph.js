import Draggable from "react-draggable";
function Paragraph({ type, index, onChange, state }) {
  return (
    <div>
      <h3>{type}:</h3>
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
