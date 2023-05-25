import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import exportedHtml from "./exportedHTML";
import LectureSlides from "Pages/LectureSlides";
// import { writeJsonFile } from "write-json-file";
// import { writeJsonFile } from "write-json-file";
import CourseOverview from "Pages/CourseOverview";
import FacultyBiographies from "Pages/FacultyBiographies";
import CourseReadings from "Pages/CourseReadings";
import StudentSelfRecordingInstructions from "Pages/StudentSelfRecordingInstructions";
import FinalExamWeek from "Pages/FinalExamWeek";
function App() {
  const sections = [
    "LectureSlides",
    "CourseOverview",
    "FacultyBiographies",
    "CourseReadings",
    "StudentSelfRecordingInstructions",
    "FinalExamWeek",
  ];
  const [text, setText] = useState("Enter Text here.");
  const [text2, setText2] = useState("Enter Text here.");
  const [logo1, setLogo1] = useState("");
  const [logo2, setLogo2] = useState("");
  let body = "";

  const [videoLink, setVideoLink] = useState("Video Url Link");
  const [code, setCode] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [courseSection, setCourseSection] = useState("LectureSlides");
  switch (courseSection) {
    case "LectureSlides":
      body = <LectureSlides />;
      break;
    case "CourseOverview":
      body = <CourseOverview courseSection={courseSection} />;
      break;
    case "FacultyBiographies":
      body = <FacultyBiographies courseSection={courseSection} />;
      break;
    case "CourseReadings":
      body = <CourseReadings courseSection={courseSection} />;
      break;
    case "StudentSelfRecordingInstructions":
      body = <StudentSelfRecordingInstructions courseSection={courseSection} />;
      break;
    case "FinalExamWeek":
      body = <FinalExamWeek courseSection={courseSection} />;
      break;
    default:
      body = <LectureSlides courseSection={courseSection} />;
      break;
  }
  const getDataAndExport = () => {
    let data = localStorage.getItem(courseSection, JSON);
    data = JSON.parse(data);
    if (data !== null) {
      console.log(data.text);
      fetch("/templates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: data.text, templateName: courseSection }),
      });
    } else {
      console.log("No Template saved");
    }
  };
  return (
    <div className="App">
      <div
        style={{
          width: "90%",
          height: 50,
          padding: "20px",
          border: "1px solid",
          margin: "1% auto",
          textAlign: "center",
        }}
      >
        {sections.map((data) => {
          return (
            <button
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
              className={data === courseSection ? "active" : ""}
              onClick={() => setCourseSection(data)}
            >
              {data}
            </button>
          );
        })}
      </div>
      {body}
      <button
        onClick={() => getDataAndExport()}
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
      </button>{" "}
    </div>
  );
}

export default App;

// curl -X PUT -H 'Authorization: Bearer 20171~jYdCiwFisd1kJkLd8LuVui5iplxYE0pcHPw1H1JneIZ0cMLvYKzdUrLDmlHqNYcp' https://digitalcampus.beta.instructure.com/api/v1/courses/214/pages/New%20Page%20API%20Test -d wiki_page[body]=%3Cdiv%3E%0A%3Ch1%3ENew%20Course%20Heading%3C/h1%3E%0A%3Cbr%3E%3C/br%3E%0A%3Cbody%3E%0A%20%20Lorem%20Ipsum%20is%20simply%20dummy%20text%20of%20the%20printing%20and%20typesetting%20industry.%0A%3C/body%3E%0A%3C/div%3E
// curl -X GET -H 'Authorization: Bearer 20171~jYdCiwFisd1kJkLd8LuVui5iplxYE0pcHPw1H1JneIZ0cMLvYKzdUrLDmlHqNYcp' https://digitalcampus.beta.instructure.com/api/v1/courses/214/pages/New%20Page%20API%20Test
