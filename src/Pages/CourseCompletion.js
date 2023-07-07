import finalExamWeekComp from "Components/CourseCompletionComp";
import { useState } from "react";
import ViewTemplate from "Components/ViewTemplate";
import Draggable from "react-draggable";
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
  const [popup, setPopup] = useState(false);
  const [hyperLink, setHyperLink] = useState(false);
  const [option, setOption] = useState("Text");
  const placeholders = [
    "Next Steps text",
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
  const handleChangeOption = (e) => {
    setOption(e.target.value);
    if (e.target.value === "HyperLink") {
      setHyperLink(true);
    } else {
      setHyperLink(false);
      setState((prevState) => ({
        ...prevState,
        urlLink: "",
      }));
    }
  };
  if (!view) {
    return (
      <>
        {popup && (
          <Draggable>
            <div
              style={{
                width: 300,
                height: "auto" /* border: '1px solid', */,
                position: "absolute",
                background: "white",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                fontSize: "larger",
                padding: 10,
                borderRadius: 10,
                top: "40%",
                right: "40%",
              }}
              id="DivA"
              className="None"
            >
              <img
                alt=""
                width="28px"
                height="28px"
                style={{ position: "absolute", right: 2, top: 2 }}
                src="https://kaleem99.github.io/hostingContents/remove-button.png"
                onClick={() => setPopup(false)}
              />
              <h3 style={{ marginTop: 0 }}>Choose Text Or HyperLink</h3>

              <form>
                <input
                  onChange={(e) => handleChangeOption(e)}
                  type="radio"
                  id="Bold"
                  name="radio"
                  checked={option === "Text"}
                  value="Text"
                />
                <label htmlFor="Text">Normal Text</label>
                <br />
                <input
                  type="radio"
                  id="Italic"
                  name="radio"
                  checked={option === "HyperLink"}
                  value="HyperLink"
                  onChange={(e) => handleChangeOption(e)}
                />
                <label htmlFor="HyperLink">HyperLink</label>

                <br></br>
                <br></br>
                {hyperLink && (
                  <>
                    <label>Add Hyper Link Url</label>
                    <br></br>
                    <input
                      type="url"
                      name="urlLink"
                      value={state.urlLink}
                      onChange={handleChange}
                      placeholder="Link URL"
                    />
                  </>
                )}
              </form>
              <br />
            </div>
          </Draggable>
        )}
        <div
          style={{
            width: "90%",
            height: "auto",
            padding: "20px",
            border: "1px solid",
            margin: "2% auto",
          }}
        >
          <h1 style={{ color: "#002D58" }}>
            Congratulations on completing the Try It course!
          </h1>
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
            <p>
              Whether you’re looking to advance at your current organization or
              shift fields entirely, you’ve taken a valuable step toward
              enhancing your skill set and advancing your career.
            </p>

            <ul>
              <li>
                <b>Learning your way</b> — Now that you’ve completed the Try It,
                discover the power of self-paced learning.
              </li>
              <li>
                <b>Build on your momentum</b> — You’ve taken the first step
                toward growing your skill set and investing in your future.
                Ready to continue your learning journey and expand on your
                expertise?
              </li>
            </ul>
            <b>Upskill with this online program, recommended just for you.</b>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
                width: "450px",
              }}
            >
              <p>Discover </p>
              <input
                name="input1"
                className="input2"
                placeholder="[EXEC ED COURSE TITLE]"
                onChange={handleChange}
                onDoubleClick={() => (popup ? setPopup(false) : setPopup(true))}
              />
            </div>
            <div style={{ width: "450px", height: "auto" }}>
              <input
                className="input2"
                name="input2"
                placeholder="[BRIEF COURSE DESCRIPTION] "
                onChange={handleChange}
              />
            </div>
            <div style={{ width: "70%" }}>
              <p>
                Ready to dive into{" "}
                <input
                  style={{ width: "180px", height: "30px" }}
                  className="input2"
                  placeholder="[Exec Ed course title]"
                  name="input3"
                  value={state.input3}
                  onChange={handleChange}
                />{" "}
                , or still have questions?{" "}
                <input
                  placeholder="Click here [hyperlink]"
                  name="input4"
                  className="input2"
                  style={{ width: "180px", height: "30px" }}
                  value={state.input4}
                  onChange={handleChange}
                />{" "}
                and enter your information to enroll or learn more about this
                course from GetSmarter (an edX partner). course. After
                completing this Try It course, you'll be able to:
              </p>
            </div>
            <b>Executive Education Learning Experience</b>
            <p>
              Explore Executive Education's learning experience — flexible,
              fully supported cohort-based learning, designed for the busy
              professional, as outlined in the video below.
            </p>
            <iframe
              width="1008"
              height="567"
              src="https://www.youtube.com/embed/329IDa3GYXs"
              title="Face change with GetSmarter by your side"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p>
              <b>Video 1:</b> Explore Executive Education's learning experience.
            </p>
            <h3>End of course survey</h3>
          </div>
        </div>
      </>
    );
  } else {
    return <ViewTemplate courseSection={courseSection} />;
  }
}

export default FinalExamWeek;
