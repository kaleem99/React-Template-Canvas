function LearningOutcomes({ type, index, onChange, state }) {
  return (
    <div>
      <h3>{type}:</h3>
      <input
      onChange={(e) => onChange(e)}
        value={eval(state[`input${index}`])}
        name={"input" + index}
        className={`inputs`}
      />
    </div>
  );
}

export default LearningOutcomes;
