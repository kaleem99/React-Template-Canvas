import { useState } from "react";
import facultyBiographiesComp from "Components.js/FacultyBiographiesComp";
function FacultyBiographies({ courseSection }) {
  const [state, setState] = useState({
    input1: "",
    input2: "",
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
    const courseOverviewResult = facultyBiographiesComp(state);
    console.log(courseOverviewResult);
    localStorage.setItem(
      "FacultyBiographies",
      JSON.stringify({ text: courseOverviewResult })
    );
    // localStorage.setItem("html", JSON.stringify({ text: result }));
  };
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
        <h1 style={{ color: "#1475D4" }}>Faculty Biographies</h1>
        <div
          className="FacultyBiographies"
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
                <h2 style={{ color: "#1475D4" }}>&lt;Faculty Name&gt;</h2>
                <div
                  style={{ display: "grid", gridTemplateColumns: "70% auto" }}
                >
                  <textarea
                    onChange={(e) => changeStateValue(e)}
                    value={value}
                    name={key}
                    placeholder={"Edit Text"}
                    style={{ width: "90%", height: "200px" }}
                  />
                  <div
                    class="a"
                    style={{
                      wordWrap: "break-word",
                      width: "90%",
                      border: "1px solid",
                    }}
                  >
                    This div contains a very long word:
                    thisisaveryveryveryveryveryverylongword. The long word will
                    not break and wrap to the next line.
                  </div>
                </div>
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
}

export default FacultyBiographies;
