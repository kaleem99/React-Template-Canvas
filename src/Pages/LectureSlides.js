import { useState } from "react";
function LectureSlides() {
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
    input11: "",
    input12: "",
    input13: "",
    input14: "",
    input15: "",
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
        display: "grid",
        gridTemplateColumns: "auto auto",
      }}
    >
      <div>
        <h1 style={{ color: "#1475D4" }}>Lecture Slides</h1>
        <p>
          Click the links below to download the lecture slides by
          week/unit/lesson&gt;.
        </p>
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
          {Object.entries(state).map(([key, value], i) => {
            return (
              <div style={{ marginTop: "10px" }}>
                <input
                  onChange={(e) => changeStateValue(e)}
                  value={value}
                  name={key}
                  placeholder={`Course Code Week ${i + 1} Lectures`}
                  style={{ width: "400px", height: "30px" }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <img
        width={"400px"}
        height={"300px"}
        style={{ float: "right", marginTop: "100px", marginBottom: "auto" }}
        src="https://kaleem99.github.io/hostingContents/LectureSlidesImage.png"
        alt=""
      />
    </div>
  );
}

export default LectureSlides;
