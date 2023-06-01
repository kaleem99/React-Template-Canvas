import WelcomePageComp from "Components/WelcomePageComp";
import ViewTemplate from "Components/ViewTemplate";
import { useState } from "react";
function WelcomePage({ courseSection, view }) {
  const [state, setState] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
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
    const WelcomePageResult = WelcomePageComp(state);
    console.log(WelcomePageResult);
    localStorage.setItem(
      "WelcomePage",
      JSON.stringify({ text: WelcomePageResult })
    );
    // localStorage.setItem("html", JSON.stringify({ text: result }));
  };
  if (!view) {
    return (
      <>
        <div
          className="WelcomePageDiv"
          style={{
            width: "90%",
            height: "auto",
            padding: "20px",
            border: "1px solid",
            margin: "2% auto",
          }}
        >
          <div
          // style={{ width: "80%", height: "300px", backgroundColor: "red" }}
          >
            <h1>Banner</h1>
            <input
              placeholder="Banner Image Link"
              style={{ width: "400px", height: "50px" }}
              value={state.input1}
              name="input1"
              onChange={changeStateValue}
            />
          </div>
          <div>
            <h1 style={{ color: "#1475D4" }}>Welcome To Try Its</h1>
          </div>
          <textarea
            placeholder="Text Entry"
            style={{ width: "400px", height: "50px" }}
            value={state.input2}
            name="input2"
            onChange={changeStateValue}
          />

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
            {/* {Object.entries(state).map(([key, value]) => {
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
            })} */}
            <textarea
              placeholder="Video input"
              style={{ width: "400px", height: "50px" }}
              value={state.input3}
              name="input3"
              onChange={changeStateValue}
            />
          </div>
          <br></br>
          <textarea
            placeholder="Text Entry"
            style={{ width: "400px", height: "50px" }}
            value={state.input4}
            name="input4"
            onChange={changeStateValue}
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

export default WelcomePage;
