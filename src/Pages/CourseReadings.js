import { useState } from "react";
import courseReadingsComp from "Components/CourseReadingsComp";
import ViewTemplate from "Components/ViewTemplate";
function CourseReadings({ courseSection, view }) {
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
  };
  const writeToFile = async () => {
    // const result = exportedHtml(text, text2, videoLink, logo1, logo2);
    const courseOverviewResult = courseReadingsComp(state);
    console.log(courseOverviewResult);
    localStorage.setItem(
      "CourseReadings",
      JSON.stringify({ text: courseOverviewResult })
    );
    // localStorage.setItem("html", JSON.stringify({ text: result }));
  };
  if (!view) {
    return (
      <>
        <div
          className="CourseReadingsDiv"
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
          <img
            width={"400px"}
            height={"300px"}
            style={{ float: "right", marginTop: "100px", marginBottom: "auto" }}
            src="https://kaleem99.github.io/hostingContents/CourseReadingImage.png"
            alt=""
          />
        </div>
        <button
          onClick={() => writeToFile()}
          style={{
            width: "auto",
            paddingLeft: "15px",
            paddingRight: "15px",
            height: "40px",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "20px",
            borderRadius: "5px",
            border: "1px solid",
          }}
        >
          Save Template
        </button>
      </>
    );
  } else {
    return <ViewTemplate courseSection={courseSection} />;
  }
}

export default CourseReadings;
