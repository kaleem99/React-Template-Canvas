import { useState } from "react";
function StudentSelfRecordingInstructions({ courseSection }) {
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
      <h1 style={{ color: "#1475D4" }}>Student Self-Recording Instructions</h1>
      <p>Please download the Student Self-Recording Instructions below.</p>
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
              <p>Student Self-Recording Instructions</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentSelfRecordingInstructions;
