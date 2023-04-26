const exportedHtml = (text, text2, videoLink) => {
  let result = `<div
    class="Container"
    id="container"
    style="margin: 5% auto; width: 50%; height: auto"
  >
    <div
      class="Header"
      style="
        text-align: center;
        border: 2px solid #1176d3;
        width: 90%;
        height: 50px;
        margin: auto;
        border-bottom: none;
      "
    >
      <div
        class="ImageDiv"
        style="margin-left: 5px; margin-right: auto; width: 50px"
      >
        <img
          alt=""
          class="HeaderImage"
          style="width: 50px; height: 50px"
          src="https://kaleem99.github.io/hostingContents/image-logo%402x.png"
        />
      </div>
    </div>
    <div>
      <body>
        <div
          class="TextBlock"
          style="
            text-align: center;
            border: 2px solid #1176d3;
            width: 90%;
            height: 250px;
            margin: auto;
            border-bottom: none;
          "
        >
          <p
            onchange="setText(event.target.value)"
            title="p1"
            class="p"
            id="p1"
            value="{text}"
          >
            ${text}
          </p>
        </div>
        <div
          class="TextBlock"
          style="
            text-align: center;
            border: 2px solid #1176d3;
            width: 90%;
            height: auto;
            margin: auto;
            border-bottom: none;
          "
        >
          <p
            onchange="setText2(event.target.value)"
            title="p1"
            class="p"
            id="p2"
            value="{text2}"
          >
            ${text2}
          </p>
          <br />
          <iframe
            style="width: 60%; height: 250px; border: none; border: 0; margin-bottom: 5px;"
            src="${videoLink}"
          ></iframe>
        </div>
        <div
          class="Footer"
          style="
            text-align: center;
            border: 2px solid #1176d3;
            width: 90%;
            height: 250px;
            margin: auto;
          "
        >
          <div
            class="ImageDiv2"
            style="margin-left: auto; margin-right: 5px; width: 50px"
          >
            <img
              class="FooterImage"
              style="width: 50px; height: 50px"
              alt=""
              src="https://kaleem99.github.io/hostingContents/image-logo%402x.png"
            />
          </div>
        </div>
      </body>
    </div>
  </div>
  `;
  return result;
};

export default exportedHtml;
