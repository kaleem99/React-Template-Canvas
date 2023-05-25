const courseReadingsComp = (state) => {
  let inputResult = "";
  for (let i in state) {
    if (state[i] !== "") {
      console.log(state[i]);
      inputResult += `<div style="margin-top: 20px">
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
  class="CourseReadingsDiv"
>
  <div>
    <h1 style="color: rgb(20, 117, 212)">Course Readings</h1>
    <p>
      Please download your course readings here. See syllabus for a
      comprehensive reading list..
    </p>
    <div
      class="CourseReadings"
      style="width: 100%; height: auto; margin: auto"
    >${inputResult}</div>
  </div>
  <img
    width="400px"
    height="300px"
    src="https://kaleem99.github.io/hostingContents/CourseReadingImage.png"
    alt=""
    style="float: right; margin-top: 100px; margin-bottom: auto"
  />
</div>
`;
  return data;
};

export default courseReadingsComp;
