import finalExamWeekComp from "Components/CourseCompletionComp";
import { useState } from "react";
import ViewTemplate from "Components/ViewTemplate";

const DragAndDrop = () => {
  const [items, setItems] = useState([
    { id: 1, item1: "Item 1", name: "Item 1" },
    { id: 2, item2: "Item 2", name: "Item 2" },
    { id: 3, item3: "Item 3", name: "Item 3" },
  ]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    let newDataArr = [...items];
    let temp = newDataArr[e.dataTransfer.getData("text/plain")];
    newDataArr[e.dataTransfer.getData("text/plain")] = newDataArr[targetIndex];
    newDataArr[targetIndex] = temp;
    setItems(newDataArr);
  };

  return (
    <div
      style={{
        width: "50%",
        height: 500,
        margin: "auto",
        // background: "red",
        padding: "10px",
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
          className={item.id}
          style={{
            width: "100px",
            height: "100px",
            border: "2px solid",
            margin: "20px auto",
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

// export default DragAndDrop;

function FinalExamWeek({ courseSection, view, state, setState }) {
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
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(state);
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
  console.log(state);

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
          <div>
            <img src="https://graphics.getsmarter.com/GS+email+signatures/Email+signature+tool/dist/img/g.jpg"></img>
          </div>
          <h1 style={{ color: "#E52370" }}>Course completion!</h1>
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
            <h2>Completion page</h2>
            <textarea
              // placeholder={placeholders[i]}
              style={{
                marginTop: "10px",
                width: "400px",
                height: "50px",
              }}
              name={`input1`}
              value={state.input1}
              onChange={handleChange}
            />
            <br></br>
            <label>1. </label>
            <textarea
              // placeholder={placeholders[i]}
              style={{
                marginTop: "10px",
                width: "400px",
                height: "50px",
              }}
              name={`input2`}
              value={state.input2}
              onChange={handleChange}
            />
            <br></br>

            <label>2. </label>
            <textarea
              // placeholder={placeholders[i]}
              style={{
                marginTop: "10px",
                width: "400px",
                height: "50px",
              }}
              name={`input3`}
              value={state.input3}
              onChange={handleChange}
            />
            <br></br>
            <label>3. </label>
            <textarea
              // placeholder={placeholders[i]}
              style={{
                marginTop: "10px",
                width: "400px",
                height: "50px",
              }}
              name={`input4`}
              value={state.input4}
              onChange={handleChange}
            />
            <h2 style={{ color: "#1475D4" }}>Course ending Text</h2>
          </div>
        </div>
      </>
    );
  } else {
    return <ViewTemplate courseSection={courseSection} />;
  }
}

export default FinalExamWeek;
