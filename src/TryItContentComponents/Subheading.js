function SubHeading({ type, index, onChange, state }) {
  console.log(state)
  return (
    <div>
      <h3>{type}:</h3>
      <input
        style={{ width: "250px", height: "30px" }}
        onChange={(e) => onChange(e, index)}
        value={eval(state[`input${index}`])}
        name={"input" + index}
        className={`inputs`}
      />
    </div>
  );
}

export default SubHeading;
