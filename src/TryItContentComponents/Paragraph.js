function Paragraph({ type, index, onChange, state }) {
  return (
    <div>
      <h3>{type}:</h3>
      <textarea
        style={{ width: "400px", height: "120px" }}
        onChange={(e) => onChange(e)}
        value={eval(state[`input${index}`])}
        name={"input" + index}
        className={`inputs`}
      ></textarea>
    </div>
  );
}

export default Paragraph;
