function List({ type, index, onChange, state }) {
  return (
    <div>
      <h3>{type}:</h3>
      <div
        style={{ width: "250px", height: "30px", border: "1px solid" }}
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

export default List;
