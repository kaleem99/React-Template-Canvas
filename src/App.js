import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import exportedHtml from "./exportedHTML";
// import { writeJsonFile } from "write-json-file";
function App() {
  const [text, setText] = useState("Enter Text here.");
  const [text2, setText2] = useState("Enter Text here.");
  const [videoLink, setVideoLink] = useState("Video Url Link");
  const [code, setCode] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const writeToFile = async () => {
    const result = exportedHtml(text, text2, videoLink);

    localStorage.setItem("html", JSON.stringify({ text: result }));
  };
  const getData = () => {
    let data = localStorage.getItem("html", JSON);
    console.log(data);
    data = JSON.parse(data);
    let title = "";
    let courseID = "3413";
    console.log(data.text);
    setCode(data.text);
    let url = `POST /api/v1/courses/:${courseID}/pages`;
    let apiKey =
      "20171~jYdCiwFisd1kJkLd8LuVui5iplxYE0pcHPw1H1JneIZ0cMLvYKzdUrLDmlHqNYcp";

    // const requestOptions = {
    //   method: "PUT",
    //   Authorization:
    //     "Bearer 20171~jYdCiwFisd1kJkLd8LuVui5iplxYE0pcHPw1H1JneIZ0cMLvYKzdUrLDmlHqNYcp",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data.text),
    // };
    // https://digitalcampus.instructure.com/courses/3413

    // curl -H 'Authorization: Bearer 20171~jYdCiwFisd1kJkLd8LuVui5iplxYE0pcHPw1H1JneIZ0cMLvYKzdUrLDmlHqNYcp' \
    // https://digitalcampus.instructure.com/api/v1/courses/3413/pages/test-2
    // https://<canvas>/api/v1/courses/123/front_page

    // update
    // curl -X PUT -H 'Authorization: Bearer 20171~jYdCiwFisd1kJkLd8LuVui5iplxYE0pcHPw1H1JneIZ0cMLvYKzdUrLDmlHqNYcp' \
    // https://digitalcampus.instructure.com/api/v1/courses/3413/pages/test-2 \
    // -d wiki_page[body]=Testing
    // fetch("https://digitalcampus.instructure.com/api/v1/courses/3413/pages/test-2?wiki_page[body]=NewData", requestOptions)
    //   .then((response) => response.json())
    // .then((data) => this.setState({ postId: data.id }));
    // fetch(
    //   "https://digitalcampus.beta.instructure.com/api/v1/courses/214/pages/New%20Page%20API%20Test",
    //   {
    //     method: "PUT",
    //     // mode: "no-cors",
    //     headers: {
    //       Authorization:
    //         "Bearer 20171~T2LaAiSlnq9MTHefHK5Vl2B8vSWkHWrBpMRGQH8DWo4NbDbTG5nzxxfnAUBnEpPX",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       wiki_page: {
    //         // title: "New Page",
    //         body: "New Data 2.0",
    //       },
    //     }),
    //   }
    // )
    //   .then((response) => {
    //     // Handle the response here
    //     console.log("successfully");
    //   })
    //   .catch((error) => {
    //     // Handle errors here
    //     console.log(error);
    //   });
  };
  const copyToClipBoard = () => {
    const inputField = document.getElementById("code");

    // Select the contents of the input field
    inputField.select();

    // Copy the selected HTML content to the clipboard
    document.execCommand("copy");
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };
  const generateIframe = (value) => {
    setVideoLink(value);
    // setIframe(`<iframe src="${value}"></iframe>`);
  };
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }
  return (
    <div
      className="App"
      style={{ width: "100%", height: "1600px", margin: "auto" }}
    >
      <div className="ButtonFunctions">
        <button className="btn" onClick={() => writeToFile()}>
          Save
        </button>
        <button className="btn">Update</button>
        <button className="btn" onClick={() => getData()}>
          Export
        </button>
      </div>
      <div className="generatedCode">
        <h2 style={{ color: "white", textAlign: "center" }}>Generated Code</h2>
        <div className="code">
          <textarea
            id="code"
            value={code}
            onClick={() => copyToClipBoard()}
          ></textarea>
          <br></br>
          {showPopup && <span className="popup">Code Copied.</span>}
          <br></br>
          <button className="copyTextButton" onClick={() => copyToClipBoard()}>Copy to clipboard</button>
        </div>
      </div>
      <div
        className="Container"
        id="container"
        style={{ margin: "5% auto", width: "50%", height: "auto" }}
      >
        <div
          className="Header"
          style={{
            textAlign: "center",
            border: "2px solid #1176d3",
            width: "90%",
            height: "50px",
            margin: "auto",
            borderBottom: "none",
          }}
        >
          <div
            className="ImageDiv"
            style={{ marginLeft: "5px", marginRight: "auto", width: "50px" }}
          >
            <img
              alt=""
              className="HeaderImage"
              style={{ width: "50px", height: "50px" }}
              src="https://kaleem99.github.io/hostingContents/image-logo%402x.png"
            />
          </div>
        </div>
        <div>
          <body>
            <div
              className="TextBlock"
              style={{
                textAlign: "center",
                border: "2px solid #1176d3",
                width: "90%",
                height: "250px",
                margin: "auto",
                borderBottom: "none",
              }}
            >
              <textarea
                onChange={(e) => setText(e.target.value)}
                title="textarea1"
                className="textArea"
                id="TextArea1"
                style={{ width: "90%", height: "60%" }}
                // defaultValue={"Enter text here"}
                value={text}
              ></textarea>
            </div>
            <div
              className="TextBlock"
              style={{
                textAlign: "center",
                border: "2px solid #1176d3",
                width: "90%",
                height: "250px",
                margin: "auto",
                borderBottom: "none",
              }}
            >
              <textarea
                onChange={(e) => setText2(e.target.value)}
                title="textarea1"
                className="textArea"
                id="TextArea2"
                value={text2}
                // defaultValue={"Enter text here"}
              ></textarea>
              <br></br>
              <div className="videoLabel">
                <label
                  style={{
                    textAlign: "left",
                    margin: "10px auto",
                    width: "90%",
                  }}
                >
                  Video Url
                </label>
              </div>
              <input
                onChange={(e) => generateIframe(e.target.value)}
                // defaultValue={"Video Url link"}
                value={videoLink}
                className="videoInput"
                style={{ width: "90%", height: "30px" }}
              />
            </div>
            <div
              className="Footer"
              style={{
                textAlign: "center",
                border: "2px solid #1176d3",
                width: "90%",
                height: "250px",
                margin: "auto",
              }}
            >
              <div
                className="ImageDiv2"
                style={{
                  marginLeft: "auto",
                  marginRight: "5px",
                  width: "50px",
                }}
              >
                <img
                  className="FooterImage"
                  style={{ width: "50px", height: "50px" }}
                  alt=""
                  src="https://kaleem99.github.io/hostingContents/image-logo%402x.png"
                />
              </div>
            </div>
          </body>
        </div>
      </div>
    </div>
  );
}

export default App;

// curl -X PUT -H 'Authorization: Bearer 20171~T2LaAiSlnq9MTHefHK5Vl2B8vSWkHWrBpMRGQH8DWo4NbDbTG5nzxxfnAUBnEpPX' https://digitalcampus.beta.instructure.com/api/v1/courses/214/pages/New%20Page%20API%20Test -d wiki_page[body]=%3Ch1%3EHello%2C%20world%21%3C%2Fh1%3E
