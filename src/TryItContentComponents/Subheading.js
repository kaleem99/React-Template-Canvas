function SubHeading({ type, index, onChange, state }) {
  console.log(state);
  return (
    <div>
      <h3>{type}:</h3>
      <div
        style={{ width: "auto", height: "auto", border: "1px solid" }}
        onInput={(e) => onChange(e.target.innerHTML, index)}
        value={eval(state[`input${index}`])}
        name={"input" + index}
        className={`inputs`}
        contenteditable="true"
      ></div>
    </div>
  );
}

export default SubHeading;
