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
import ViewLectureSlides from "Components.js/ViewTemplate";
function App() {
  const sections = [
    "LectureSlides",
    "CourseOverview",
    "FacultyBiographies",
    "CourseReadings",
    "StudentSelfRecordingInstructions",
    "FinalExamWeek",
  ];
  const [view, setView] = useState(false);
  const [getData, setGetData] = useState([]);
  let body = "";

  const [courseSection, setCourseSection] = useState("LectureSlides");
  switch (courseSection) {
    case "LectureSlides":
      body = <LectureSlides courseSection={courseSection} view={view} />;
      break;
    case "CourseOverview":
      body = <CourseOverview courseSection={courseSection} view={view} />;
      break;
    case "FacultyBiographies":
      body = <FacultyBiographies courseSection={courseSection} view={view} />;
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
    case "FinalExamWeek":
      body = <FinalExamWeek courseSection={courseSection} view={view} />;
      break;
    default:
      body = <LectureSlides courseSection={courseSection} view={view} />;
      break;
  }
  const getDataAndExport = () => {
    let data = localStorage.getItem(courseSection, JSON);
    data = JSON.parse(data);
    if (data !== null) {
      console.log(data.text);
      fetch("https://express-template-backend.onrender.com/templates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: data.text, templateName: courseSection }),
      }).then((res) => console.log(res));
    } else {
      console.log("No Template saved");
    }
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
              onClick={() => changeCourseSection(data)}
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
      </button>
      <button
        onClick={() => (view ? setView(false) : setView(true))}
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
    </div>
  );
}

export default App;

// curl -X PUT -H 'Authorization: Bearer 20171~jYdCiwFisd1kJkLd8LuVui5iplxYE0pcHPw1H1JneIZ0cMLvYKzdUrLDmlHqNYcp' https://digitalcampus.beta.instructure.com/api/v1/courses/214/pages/New%20Page%20API%20Test -d wiki_page[body]=%3Cdiv%3E%0A%3Ch1%3ENew%20Course%20Heading%3C/h1%3E%0A%3Cbr%3E%3C/br%3E%0A%3Cbody%3E%0A%20%20Lorem%20Ipsum%20is%20simply%20dummy%20text%20of%20the%20printing%20and%20typesetting%20industry.%0A%3C/body%3E%0A%3C/div%3E
// curl -X GET -H 'Authorization: Bearer 20171~jYdCiwFisd1kJkLd8LuVui5iplxYE0pcHPw1H1JneIZ0cMLvYKzdUrLDmlHqNYcp' https://digitalcampus.beta.instructure.com/api/v1/courses/214/pages/New%20Page%20API%20Test
