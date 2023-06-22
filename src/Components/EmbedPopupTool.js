import { useState, useRef } from "react";
import React from "react";
import Draggable from "react-draggable";
import { IoIosCloseCircle } from "react-icons/io";
const selectData = ["Image", "Video"];

const EmbedPopupTool = ({ setPopup }) => {
  let body = "";
  let generated = "";
  const imageRef = useRef(null);
  const [select, setSelect] = useState("");
  const [type, setType] = useState("");
  const [srcURL, setSRCURL] = useState("");
  const [position, setPosition] = useState("Center");
  const [imagePosition, setImagePosition] = useState({
    display: "block",
    margin: " 0 auto",
  });
  const [sizes, setSizes] = useState({
    width: "100",
    height: "50",
  });
  const ImagePositions = ["Left", "Center", "Right"];
  const handleClick = () => {
    setPopup(false);
  };
  const handleSelect = (value) => {
    setSelect(value);
    setSRCURL("");
    setType("");
  };
  switch (select) {
    case "Video":
    case "Image":
      body = (
        <>
          <h3>{select}</h3>
          <input
            className="input1"
            onChange={(e) => setSRCURL(e.target.value)}
          />
          <p></p>
          <button onClick={() => setType(select)} className="NavigationButtons">
            Generate {select}
          </button>
        </>
      );
      break;
    default:
      body = "";
      break;
  }
  switch (type) {
    case "Image":
      generated = (
        <img
          style={imagePosition}
          width={sizes.width}
          height={sizes.height}
          alt=""
          src={`${srcURL}`}
          ref={imageRef}
        ></img>
      );
      break;
    case "Video":
      generated = (
        <iframe
          title="video"
          style={{ border: "none" }}
          width={sizes.width}
          height={sizes.height}
          src={`${srcURL}`}
        ></iframe>
      );
      break;
    default:
      generated = "";
      break;
  }
  const changeImagePos = (pos) => {
    setPosition(pos);
    switch (pos) {
      case "Center":
        setImagePosition({ display: "block", margin: " 0 auto" });
        break;
      case "Left":
        setImagePosition({
          display: "block",
          marginLeft: "0",
          marginRight: "auto",
        });
        break;
      case "Right":
        setImagePosition({
          display: "block",
          marginLeft: "auto",
          marginRight: "0",
        });
        break;
      default:
        break;
    }
  };
  function copyImageElementAsText() {
    let imageElement = document.getElementsByClassName("GeneratedEmbedCode")[0];
    console.log(imageElement);
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(imageElement);
    selection.removeAllRanges();
    range.setStart(imageElement, 0);
    range.setEnd(imageElement, 1);
    selection.addRange(range);
    document.execCommand("copy");
  }

  // Usage example:

  return (
    <Draggable>
      <div
        style={{
          minWidth: "30%",
          height: "auto",
          backgroundColor: "white",
          position: "absolute",
          marginTop: "auto",
          marginBottom: "auto",
          top: 0,
          //   bottom: 0,
          //   left: 0,
          inset: "none",
          right: 0,
          // //   margin: "auto",
          marginLeft: "auto",
          border: "4px solid #1176d3",
          borderRadius: "10px",
          marginRight: "auto",
          padding: 10,
          // marginBottom: "auto",
        }}
      >
        <button
          style={{
            fontSize: "35px",
            color: "#173461",
            float: "right",
            border: "none",
            borderRadius: "50%",
          }}
          onClick={handleClick}
        >
          <IoIosCloseCircle />
        </button>
        <h2 style={{ margin: "auto", textAlign: "center" }}>
          generate videos or images with url links
        </h2>

        <div
          style={{
            width: "98%",
            height: "auto",
            // background: "red",
            margin: "4% auto",
          }}
        >
          <select
            onChange={(e) => handleSelect(e.target.value)}
            style={{
              width: "230px",
              height: "40px",
              borderRadius: "5px",
              float: "left",
              fontSize: "20px",
              marginLeft: "3%",
            }}
          >
            <option value={"None"} disabled selected>
              None
            </option>
            {selectData.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
          <br></br>
          <div className="EmbedDiv">{body}</div>
          <div className="GeneratedEmbedCode">{generated}</div>
          {type !== "" && (
            <div style={{ padding: 10, width: "90%", margin: "auto" }}>
              <div class="btnGroup">
                {ImagePositions.map((pos, i) => (
                  <button
                    id="btnPositions"
                    onClick={() => changeImagePos(pos)}
                    // class="selected"
                    style={
                      position === pos
                        ? {
                            background: "#173461",
                            width: "100px",
                            height: "30px",
                            borderRadius: "5px",
                            color: "white",
                            border: "none",
                          }
                        : {
                            width: "100px",
                            height: "30px",
                            borderRadius: "5px",
                            border: "1px solid",
                          }
                    }
                  >
                    {pos}
                  </button>
                ))}
              </div>
              <h3>Width</h3>
              <input
                type="number"
                className="input2"
                onChange={(e) =>
                  setSizes(() => {
                    return {
                      ...sizes,
                      width: e.target.value,
                    };
                  })
                }
                value={sizes.width}
              />
              <h3>Height</h3>
              <input
                type="number"
                className="input2"
                onChange={(e) =>
                  setSizes(() => {
                    return {
                      ...sizes,
                      height: e.target.value,
                    };
                  })
                }
                value={sizes.height}
              />
              <p></p>
              <button
                className="NavigationButtons"
                onClick={() => copyImageElementAsText()}
              >
                Copy {select} Element
              </button>
            </div>
          )}
        </div>
      </div>
    </Draggable>

    // <DraggableDiv />
  );
};

export default EmbedPopupTool;

<iframe
  width="966"
  height="543"
  src="https://www.youtube.com/embed/LlCwHnp3kL4"
  title="Welcome to Cambridge!"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>;
