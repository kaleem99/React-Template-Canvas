import WelcomePageComp from "Components/WelcomePageComp";
import ViewTemplate from "Components/ViewTemplate";
import { useState } from "react";
import Draggable from "react-draggable";
import { IoIosCloseCircle } from "react-icons/io";

const options = [
  {
    value:
      "https://graphics.getsmarter.com/GS+email+signatures/Email+signature+tool/dist/img/g.jpg",
    label: "GetSmarter",
  },
  {
    value:
      "https://drive.google.com/file/d/1QNtq_MREdN9Unbe8EaW87C4C6OBXKfK6/view",
    label: "Arizona State University",
  },
  { value: "1w_CjyVhgxVH8FdbKRYj0-JZkL-OAiwmo", label: "Name 3" },
  { value: "1xtY377CeY8Kz-KbIOSNC6caENdcvtrWm", label: "Name 4" },
  { value: "1CMgy1VfQYIF2BQh__ApcHGDZvFscpqtD", label: "Name 5" },
  { value: "1o1pUhn6s5v-br-gaLfTuM-f6hzI96Jcn", label: "Name 6" },
  { value: "1emj1ZfCoC6QnzCsgRBB19XyiLbh4Y1VH", label: "Name 7" },
  { value: "1ZKDGr2c200xseqpIzWTDmQVFFaVBgP-T", label: "Name 8" },
  { value: "1oK0ahEcMw7S8wn14Hs2qyu41NbTy7ZvM", label: "Name 9" },
  { value: "1NUmuuvhRuoTHD4pMEZmC6uVXaNy5NihE", label: "Name 10" },
  { value: "1SbedZsRamCGb3F-mLaW48-TRQfb_OnRi", label: "Name 11" },
  { value: "1RdXuhPk6v37uoCJbyfNRFts2HhrDY53v", label: "Name 12" },
  { value: "1YPFwguudKlY7rR0EqkJ9jMvSjbLFVIbY", label: "Name 13" },
  { value: "1rX4p9hKxQzTGIlHpJ4vEP_mLMZ1dbdJ8", label: "Name 14" },
  { value: "1wyJwe-zu5y9heY9rRjE_2q40qE8_I6rq", label: "Name 15" },
];
function WelcomePage({ courseSection, view, setState, state }) {
  const [imageSelect, setImageSelect] = useState(false);
  const [image, setImage] = useState(
    "https://graphics.getsmarter.com/GS+email+signatures/Email+signature+tool/dist/img/g.jpg"
  );
  // const [state, setState] = useState({
  //   input1: "",
  //   input2: "",
  //   input3: "",
  //   input4: "",
  // });
  const changeStateValue = (e) => {
    const { name, value, innerHTML, className } = e.target;
    console.log(name, value, innerHTML, className);
    setState((prevState) => ({
      ...prevState,
      [name || className]: value || innerHTML,
    }));
    console.log(state);
  };
  // const writeToFile = async () => {
  //   // const result = exportedHtml(text, text2, videoLink, logo1, logo2);
  //   const WelcomePageResult = WelcomePageComp(state);
  //   console.log(WelcomePageResult);
  //   localStorage.setItem(
  //     "Welcome Page",
  //     JSON.stringify({ text: WelcomePageResult })
  //   );
  //   // localStorage.setItem("html", JSON.stringify({ text: result }));
  // };
  const selectUPLogo = () => {
    return (
      <Draggable>
        <div
          style={{
            position: "absolute",
            right: 0,
            left: 0,
            margin: "auto",
            width: "300px",
            height: "100px",
            border: "1px solid",
            borderRadius: "5px",
            textAlign: "center",
            padding: "10px",
            background: "white",
          }}
          onDoubleClick={() => setImageSelect(false)}
        >
          <p
            style={{
              position: "absolute",
              top: "-25px",
              right: "1px",
              fontSize: "25px",
            }}
            onClick={() => setImageSelect(false)}
          >
            <IoIosCloseCircle />
          </p>
          <h3>Select University Partner Logo</h3>
          <select
            onChange={(e) => setImage(e.target.value)}
            style={{ width: "200px", height: "40px" }}
          >
            {options.map((data) => (
              <option value={data.value}>{data.label}</option>
            ))}
          </select>
        </div>
      </Draggable>
    );
  };
  if (!view) {
    return (
      <>
        {imageSelect && selectUPLogo()}
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
          {/* <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              width: "530px",
            }}
          >
            <h1 style={{ color: "#00262B" }}>Welcome To Try It:</h1>
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
          </div> */}
          <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
            <div style={{ width: "70%" }}>
              <h1 style={{ color: "#002D58" }}>Welcome to the course</h1>
              <p>
                Thank you for joining this Try It course. This course is a
                portion of a module in the full{" "}
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
                course. After completing this Try It course, you'll be able to:
              </p>
            </div>
            <div>
              <img onDoubleClick={() => setImageSelect(true)} src={image}></img>
            </div>
          </div>
          <ul>
            <li>
              <div
                style={{
                  maxWidth: "auto",
                  minWidth: "30%",
                  height: "auto",
                  minHeight: "50px",
                  border: "0.5px solid",
                }}
                contentEditable
                placeholder=" [insert unit outcome] "
                name="input4"
                className="input4"
                dangerouslySetInnerHTML={{ __html: "Insert Learning Outcomes" }}
                onInput={changeStateValue}
              ></div>
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
        {/* <button
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
        </button> */}
      </>
    );
  } else {
    return <ViewTemplate courseSection={courseSection} />;
  }
}

export default WelcomePage;
