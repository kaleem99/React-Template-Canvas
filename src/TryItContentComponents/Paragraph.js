function Paragraph({ type, index, onChange, state }) {
  return (
    <div>
      <h3>{type}:</h3>
      <textarea
        style={{ width: "400px", height: "120px" }}
        onChange={(e) => onChange(e, index)}
        value={eval(state[`input${index}`])}
        name={"input" + index}
        className={`inputs`}
        key={index}

      ></textarea>
    </div>
  );
}

export default Paragraph;
