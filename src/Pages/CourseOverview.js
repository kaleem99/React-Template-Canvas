import courseOverviewComp from "Components.js/CourseOverviewComp";
import ViewTemplate from "Components.js/ViewTemplate";
import { useState } from "react";
function CourseOverview({ courseSection, view }) {
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
  const writeToFile = async () => {
    // const result = exportedHtml(text, text2, videoLink, logo1, logo2);
    const courseOverviewResult = courseOverviewComp(state);
    console.log(courseOverviewResult);
    localStorage.setItem(
      "CourseOverview",
      JSON.stringify({ text: courseOverviewResult })
    );
    // localStorage.setItem("html", JSON.stringify({ text: result }));
  };
  if (!view) {
    return (
      <>
        <div
          className="CourseOverviewDiv"
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

export default CourseOverview;
