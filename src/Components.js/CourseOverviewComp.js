const courseOverviewComp = (state) => {
  const data = ` <div
    class="CourseOverviewDiv"
    style="width: 90%; height: auto; padding: 20px; border: 1px solid; margin: 2% auto;"
  >
    <h1 style="color: rgb(20, 117, 212);">Course Overview</h1>
    <p>Click the play button below to watch the Course Overview video.</p>
    <div
      class="LectureSlides"
      style="width: 100%; height: auto; margin: auto;"
    >
      <div style="margin-top: 10px;">
        <iframe
          width="400px"
          height="200px"
          src="${state.input1}"
          title="courseOverview"
        ></iframe>
      </div>
    </div>
  </div>`;
  return data;
};

export default courseOverviewComp;
