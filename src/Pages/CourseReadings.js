import { useState } from "react";
function CourseReadings() {
  const [state, setState] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    input9: "",
    input10: "",
  });
  const changeStateValue = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(state);
  };
  return (
    <div
      style={{
        width: "90%",
        height: "auto",
        padding: "20px",
        border: "1px solid",
        margin: "2% auto",
      }}
    >
      <h1 style={{ color: "#1475D4" }}>Course Readings</h1>
      <p>
        Please download your course readings here. See syllabus for a
        comprehensive reading list..
      </p>
      <div
        className="CourseReadings"
        style={{
          width: "100%",
          height: "auto",
          //   padding: "20px",
          //   border: "1px solid",
          margin: "auto",
        }}
      >
        {Object.entries(state).map(([key, value], i) => {
          return (
            <div style={{ marginTop: "10px" }}>
              <input
                onChange={(e) => changeStateValue(e)}
                value={value}
                name={key}
                placeholder={`<Hyperlinked Course Reading ${i + 1}>`}
                style={{ width: "400px", height: "30px" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CourseReadings;
