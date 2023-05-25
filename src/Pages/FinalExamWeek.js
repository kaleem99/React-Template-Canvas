import { useState } from "react";
function FinalExamWeek({courseSection}) {
  const [state, setState] = useState({
    input1: "",
  });
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
      <h1 style={{ color: "#1475D4" }}>Final Exam Week</h1>
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
              <p>This is your exam week. No asynchronous content.</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FinalExamWeek;
