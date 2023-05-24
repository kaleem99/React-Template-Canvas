import { useState } from "react";
function CourseOverview() {
  const [state, setState] = useState({
    input1: "",
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
      <h1 style={{ color: "#1475D4" }}>Course Overview</h1>
      <p>Click the play button below to watch the Course Overview video.</p>
      <div
        className="LectureSlides"
        style={{
          width: "100%",
          height: "auto",
          //   padding: "20px",
          //   border: "1px solid",
          margin: "auto",
        }}
      >
        {Object.entries(state).map(([key, value]) => {
          return (
            <div style={{ marginTop: "10px" }}>
              <input
                onChange={(e) => changeStateValue(e)}
                value={value}
                name={key}
                placeholder={"Placeholder Video HTML"}
                style={{ width: "400px", height: "30px" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CourseOverview;
