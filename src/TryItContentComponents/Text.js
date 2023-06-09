function Text({ type, index, onChange, state }) {
  return (
    <div>
      <h3>{type}:</h3>
      <div
        style={{ width: "auto", height: "auto", border: "1px solid" }}
        onInput={(e) => onChange(e.target.innerHTML, index)}
        value={eval(state[`input${index}`])}
        name={"input" + index}
        className={`inputs`}
        key={index}
        contenteditable="true"
      ></div>
    </div>
  );
}

export default Text;
