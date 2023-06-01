import finalExamWeekComp from "Components/FinalExamWeekComp";
import { useState } from "react";
import ViewTemplate from "Components/ViewTemplate";
function FinalExamWeek({ courseSection, view }) {
  const [state, setState] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
  });
  const [banner, setBanner] = useState("");
  const placeholders = [
    "course completion text",
    "reminders and suggestions",
    "reminders and suggestions",
    "reminders and suggestions",
    "reminders and suggestions",
    "reminders and suggestions",
    "ending Text",
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value.split("\n").join("\n"));
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const writeToFile = async () => {
    // const result = exportedHtml(text, text2, videoLink, logo1, logo2);
    state.bannerImage = banner;
    const WelcomePageResult = finalExamWeekComp(state);
    localStorage.setItem(
      courseSection,
      JSON.stringify({ text: WelcomePageResult })
    );
    // localStorage.setItem("html", JSON.stringify({ text: result }));
  };
  if (!view) {
    return (
      <>
        <div
          style={{
            width: "90%",
            height: "auto",
            padding: "20px",
            border: "1px solid",
            margin: "2% auto",
          }}
        >
          <h1 style={{ color: "#1475D4" }}>Image Banner</h1>

          <input
            style={{ marginTop: "10px", width: "400px", height: "50px" }}
            placeholder="Image Banner"
            onChange={(e) => setBanner(e.target.value)}
          />
          <h1 style={{ color: "#1475D4" }}>Course completion!</h1>
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
                <>
                  {i === 1 && (
                    <h2 style={{ color: "#1475D4" }}>
                      Reminders and suggestions
                    </h2>
                  )}
                  {i > 0 && i < 6 && <label>{i}. </label>}
                  <textarea
                    placeholder={placeholders[i]}
                    style={{
                      marginTop: "10px",
                      width: "400px",
                      height: "50px",
                    }}
                    name={`input${i + 1}`}
                    value={eval("state.input1" + (i + 1))}
                    onChange={handleChange}
                  />
                  <br></br>
                  {i === 5 && (
                    <h2 style={{ color: "#1475D4" }}>Course ending Text</h2>
                  )}
                </>
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

export default FinalExamWeek;
