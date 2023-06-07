function OptionalResources({ type, index, onChange, state }) {
  return (
    <div>
      <h3>{type}:</h3>
      <input
        onChange={(e) => onChange(e, index)}
        value={eval(state[`input${index}`])}
        name={"input" + index}
        className={`inputs`}
        key={index}

      />
    </div>
  );
}

export default OptionalResources;
