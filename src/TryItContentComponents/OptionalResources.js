function OptionalResources({ type, index, onChange, state }) {
  return (
    <div>
      <h3>{type}:</h3>
      <div
        onChange={(e) => onChange(e.target.innerHTML, index)}
        value={eval(state[`input${index}`])}
        name={"input" + index}
        className={`inputs`}
        key={index}
        contenteditable="true"
      ></div>
    </div>
  );
}

export default OptionalResources;
