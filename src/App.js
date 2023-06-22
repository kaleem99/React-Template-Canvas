import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import exportedHtml from "./exportedHTML";
import LectureSlides from "Pages/LectureSlides";
import facultyBiographiesComp from "Components/TryItContentComp";
import WelcomePageComp from "./Components/WelcomePageComp";
import WelcomePage from "Pages/WelcomePage";
import FacultyBiographies from "Pages/TryItContent";
import CourseReadings from "Pages/CourseReadings";
import StudentSelfRecordingInstructions from "Pages/StudentSelfRecordingInstructions";
import FinalExamWeek from "Pages/CourseCompletion";
import ViewLectureSlides from "Components/ViewTemplate";
import addElement from "Components/AddElement";
import EmbedPopupTool from "Components/EmbedPopupTool";
import ViewGithubContent from "Pages/Github";
import finalExamWeekComp from "Components/CourseCompletionComp";
import AddFileName from "Components/AddFileName";

const elementTypeNames = [
  // "LearningOutcomes",
  "ContentBlock",
  // "Text",
  // "Heading",
  // "Subheading",
  // "Image",
  // "Video",
  // "OptionalResources",
  // "UnorderedList",
  // "OrderedList",
];
function App() {
  const sections = [
    // "LectureSlides",
    "Welcome Page",
    "Try It Content",
    // "CourseReadings",
    // "StudentSelfRecordingInstructions",
    "Next Steps",
    "Github",
  ];
  const [apiKey, setAPIKey] = useState("");
  const [view, setView] = useState(false);
  const [state, setState] = useState([]);
  const [bodyHtml, setBodyHtml] = useState([]);
  const [index, setIndex] = useState(1);
  const [elementTypes, setElementTypes] = useState([]);
  const [select, setSelect] = useState("");
  const [popup, setPopup] = useState(false);
  const [courseSection, setCourseSection] = useState("Welcome Page");
  const [fileName, setFileName] = useState(false);
  useEffect(() => {
    const fetchApiKey = async () => {
      const url = "https://express-template-backend.onrender.com/get-api-token";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const data = await response.json();
      setAPIKey(data.key);
    };
    fetchApiKey();
  }, []);
  let body = "";
  const handleChange = (value, index) => {
    const newArrState = state;
    newArrState[index - 1] = value;
    setState(newArrState);
    console.log(newArrState);
  };
  switch (courseSection) {
    case "LectureSlides":
      body = <LectureSlides courseSection={courseSection} view={view} />;
      break;
    case "Welcome Page":
      body = (
        <WelcomePage
          state={state}
          setState={setState}
          courseSection={courseSection}
          view={view}
        />
      );
      break;
    case "Try It Content":
      body = (
        <FacultyBiographies
          courseSection={courseSection}
          view={view}
          index={index}
          setIndex={setIndex}
          state={state}
          setState={setState}
          select={select}
          setSelect={setSelect}
          bodyHtml={bodyHtml}
          setBodyHtml={setBodyHtml}
          elementTypes={elementTypes}
          setElementTypes={setElementTypes}
        />
      );
      break;
    case "CourseReadings":
      body = <CourseReadings courseSection={courseSection} view={view} />;
      break;
    case "StudentSelfRecordingInstructions":
      body = (
        <StudentSelfRecordingInstructions
          courseSection={courseSection}
          view={view}
        />
      );
      break;
    case "Next Steps":
      body = (
        <FinalExamWeek
          state={state}
          setState={setState}
          courseSection={courseSection}
          view={view}
        />
      );
      break;
    case "Github":
      body = <ViewGithubContent apiKey={apiKey} />;
      break;
    default:
      body = <LectureSlides courseSection={courseSection} view={view} />;
      break;
  }
  const addFileName = () => {};
  const getDataAndExport = async (fileName) => {
    let fetchedData = localStorage.getItem(courseSection, JSON);
    console.log(fetchedData);
    fetchedData = JSON.parse(fetchedData);
    // if (data !== null) {
    //   console.log(data.text);
    //   fetch("https://express-template-backend.onrender.com/templates", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ data: fetchedData.text, templateName: courseSection }),
    //   }).then((res) => console.log(res));
    //   console.log("Template Saved.");
    // } else {
    //   console.log("No Template saved");
    // }

    try {
      let base64Data = btoa(unescape(encodeURIComponent(fetchedData.text)));
      const responseResult = await fetch(
        `https://api.github.com/repos/kaleem99/React-Template-Canvas-Content/contents/${fileName}.html`,
        {
          method: "PUT",
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${apiKey}`,
            "X-GitHub-Api-Version": "2022-11-28",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `{"message":"New File added","committer":{"name":"kaleem99","email":"kaleem99@github.com"},"content":"${base64Data}"}`,
        }
      );
      const responseMessage = await responseResult.json();
      console.log(responseMessage);
      if (
        responseMessage.message !== undefined &&
        responseMessage.message.includes("sha")
      ) {
        alert(
          responseMessage.message,
          "File already exists, please rename the file before adding a new one"
        );
      } else {
        alert("File has been uploaded successfully.");
      }
      console.log("API KEY Was retrieved successfully.");
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const writeToFile = async () => {
    let result = "";
    console.log(courseSection);
    console.log(state);
    if (courseSection === "Welcome Page") {
      result = WelcomePageComp(state);
    } else if (courseSection === "Try It Content") {
      result = facultyBiographiesComp(state, elementTypes);
    } else if (courseSection === "Next Steps") {
      result = finalExamWeekComp(state);
    }
    console.log(result);
    localStorage.setItem(
      courseSection.toString(),
      JSON.stringify({ text: result })
    );
  };
  const changeCourseSection = (data) => {
    setCourseSection(data);
    setView(false);
  };
  const testing = () => {
    fetch("https://express-template-backend.onrender.com/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const copyText = (textContent) => {
    console.log(document.getElementById("TextCopied"));
    document.getElementById("TextCopied").style.visibility = "visible";
    document.getElementById("TextCopied").innerHTML = textContent;

    if (textContent === "Copied HTML content") {
      navigator.clipboard.writeText(
        JSON.parse(localStorage.getItem(courseSection, JSON)).text
      );
    } else {
      writeToFile();
    }
    setTimeout(() => {
      document.getElementById("TextCopied").style.visibility = "hidden";
    }, 1000);
  };
  const setViewTemplate = async () => {
    setView(true);
    setState([]);
    setBodyHtml([]);
    setIndex(1);
    setElementTypes([]);
  };
  return (
    <div className="App">
      {fileName && (
        <AddFileName
          getDataAndExport={getDataAndExport}
          setFileName={setFileName}
          fileName={fileName}
        />
      )}
      {popup && <EmbedPopupTool setPopup={setPopup} />}
      <div
        style={{
          width: "90%",
          height: "auto",
          padding: "20px",
          border: "1px solid",
          margin: "1% auto",
          textAlign: "center",
          background: "#063461",
        }}
      >
        <div
          style={{
            height: "40px",
            marginBottom: "auto",
            marginTop: "auto",
            width: "auto",
            border: "1px solid",
            marginLeft: "100px",
            padding: 10,
            borderRadius: "10px",
            backgroundColor: "white",
          }}
        >
          {courseSection === "Try It Content" && (
            <div style={{ float: "left" }}>
              <select
                onChange={(e) => setSelect(e.target.value)}
                style={{
                  width: "180px",
                  height: "40px",
                  borderRadius: "5px",
                  float: "left",
                  fontSize: "20px",
                }}
              >
                <option value={"None"} disabled selected>
                  None
                </option>
                {elementTypeNames.map((item, i) => (
                  <option key={i} value={item}>
                    {item.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase()}
                  </option>
                ))}
              </select>
              <button
                onClick={() =>
                  addElement(
                    select,
                    index,
                    setElementTypes,
                    setState,
                    elementTypes,
                    state,
                    setIndex,
                    setBodyHtml,
                    bodyHtml,
                    handleChange
                  )
                }
                className="NavigationButtons"
              >
                Add Element
              </button>
            </div>
          )}
          {/* <h2>{select.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase()}</h2> */}
          {sections.map((data, i) => {
            return (
              <button
                key={i}
                style={{ float: "revert" }}
                className={
                  data === courseSection
                    ? "active NavigationButtons"
                    : "NavigationButtons"
                }
                onClick={() => changeCourseSection(data)}
              >
                {data}
              </button>
            );
          })}
          <button
            onClick={() => setPopup(!popup)}
            className="NavigationButtons"
            style={{ float: "right" }}
          >
            Embed tool
          </button>
        </div>
      </div>
      {body}
      <div style={{ width: "90%", margin: "auto", height: "100px" }}>
        {!view && courseSection !== "Github" && (
          <>
            <span className="popuptext" id="TextCopied">
              None
            </span>
            <button
              onClick={() => copyText("Template saved")}
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
        )}
        {view && (
          <button
            onClick={() => setFileName(true)}
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
            Export Template
          </button>
        )}
        <button
          onClick={() => (view ? setView(false) : setViewTemplate())}
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
          {view ? "Generate Template" : "View Generated Template"}
        </button>
        {view && (
          <>
            <span className="popuptext" id="TextCopied">
              None
            </span>
            <button
              onClick={() => copyText("Copied HTML content")}
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
              Copy HTML
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

// curl -X PUT -H 'Authorization: Bearer 20171~jYdCiwFisd1kJkLd8LuVui5iplxYE0pcHPw1H1JneIZ0cMLvYKzdUrLDmlHqNYcp' https://digitalcampus.beta.instructure.com/api/v1/courses/214/pages/New%20Page%20API%20Test -d wiki_page[body]=%3Cdiv%3E%0A%3Ch1%3ENew%20Course%20Heading%3C/h1%3E%0A%3Cbr%3E%3C/br%3E%0A%3Cbody%3E%0A%20%20Lorem%20Ipsum%20is%20simply%20dummy%20text%20of%20the%20printing%20and%20typesetting%20industry.%0A%3C/body%3E%0A%3C/div%3E
// curl -X GET -H 'Authorization: Bearer 20171~jYdCiwFisd1kJkLd8LuVui5iplxYE0pcHPw1H1JneIZ0cMLvYKzdUrLDmlHqNYcp' https://digitalcampus.beta.instructure.com/api/v1/courses/214/pages/New%20Page%20API%20Test
