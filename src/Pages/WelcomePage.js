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
      "Welcome Page",
      JSON.stringify({ text: WelcomePageResult })
    );
    // localStorage.setItem("html", JSON.stringify({ text: result }));
  };
  if (!view) {
    return (
      <>
        <div
          className="Welcome PageDiv"
          style={{
            width: "90%",
            height: "auto",
            padding: "20px",
            border: "1px solid",
            margin: "2% auto",
          }}
        >
          <div
          >
            <img src="https://graphics.getsmarter.com/GS+email+signatures/Email+signature+tool/dist/img/g.jpg"></img>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              width: "400px",
            }}
          >
            <h1 style={{ color: "#E52370" }}>Welcome To </h1>
            <input
              style={{
                width: "200px",
                height: "40px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
              onChange={changeStateValue}
              name="input1"
              value={state.input1}
              placeholder="[Insert try it title]"
            />
          </div>
          <h1>Welcome to the course</h1>
          <p>Welcome!</p>
          <text>
            Thank you for joining this Try It course. This course is a portion
            of a module in the full{" "}
            <input
              style={{ width: "180px", height: "30px" }}
              placeholder="[insert UP name]"
              name="input2"
              value={state.input2}
              onChange={changeStateValue}
            />{" "}
            <input
              style={{ width: "180px", height: "30px" }}
              placeholder="[insert Executive Education course name]"
              name="input3"
              value={state.input3}
              onChange={changeStateValue}
            />{" "}
            course. After completing this Try It course, you’ll be able to:
          </text>
          <ul>
            <li>
              <input
                style={{ width: "180px", height: "30px" }}
                placeholder=" [insert unit outcome] "
                name="input4"
                value={state.input4}
                onChange={changeStateValue}
              />
            </li>
          </ul>
          <p>
            This free Try It course is ungraded and does not award a
            certificate, but tell us what you think in the survey at the end!
          </p>
          <p>
            If you are new to the edX platform, we recommend reviewing the
            resources in{" "}
            <a href="https://www.google.com/url?q=https://www.edx.org/course/demox&sa=D&source=docs&ust=1685961469814455&usg=AOvVaw1S5GSUAC2YK9XZjaaZRoTV">
              DemoX
            </a>
            . You can reach our technical support team via the{" "}
            <a href="https://support.edx.org/hc/en-us">Help</a> link in the
            upper right corner of any page.
          </p>
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
