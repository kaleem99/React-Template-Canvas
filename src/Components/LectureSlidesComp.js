const lectureSlidesComp = (state) => {
  let result = "";
  for (let i in state) {
    if (state[i] !== "") {
      result += `<div style="margin-top: 20px">
      <a href="${state[i]}">${state[i]}</a>
      </div>`;
    }
  }
  const data = `<div
  style="
    width: 90%;
    height: auto;
    padding: 20px;
    border: 1px solid;
    margin: 2% auto;
    display: grid;
    grid-template-columns: auto auto;
  "
>
  <div>
    <h1 style="color: rgb(20, 117, 212)">Lecture Slides</h1>
    <p>
      Click the links below to download the lecture slides by
      week/unit/lesson&gt;.
    </p>
    <div class="LectureSlides" style="width: 100%; height: auto; margin: auto">
      ${result}
    </div>
  </div>
  <img
    width="400px"
    height="300px"
    src="https://kaleem99.github.io/hostingContents/LectureSlidesImage.png"
    alt=""
    style="float: right; margin-top: 100px; margin-bottom: auto"
  />
</div>
`;
  return data;
};

export default lectureSlidesComp;
