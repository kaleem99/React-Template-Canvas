const courseOverviewComp = (state) => {
  const data = ` <div
    class="CourseOverviewDiv"
    style="width: 90%; height: auto; padding: 20px; border: 1px solid; margin: 2% auto;"
  >
  <div style="margin:auto; width:80%;">
  <img
  width="100%"
  height="auto"
  src="${state.input1}"
  alt=""
  style=" margin-top: 100px; margin-bottom: auto"
/>
  </div>
  <br></br>
    <h1 style="color: rgb(20, 117, 212);text-align: center;">Welcome To Try Its</h1>
    <div style="margin: 10px auto; width: 80%">
    <p>${state.input2}</p>
  </div>
    <div
      class="LectureSlides"
      style="width: 100%; height: auto; margin: auto;"
    >
      <div style="margin-top: 10px; width: 80%; margin: auto; padding: 10px; border: 1px solid">
      <br></br>
      <p>Click the play button below to watch the Course Overview video.</p>
        <iframe
          width="100%"
          height="450px"
          src="${state.input3}"
          title="courseOverview"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen" 
          msallowfullscreen="msallowfullscreen" 
          oallowfullscreen="oallowfullscreen" 
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      </div>
      <div style="margin: 10px auto; width: 80%;">
      <p>${state.input4}</p>
    </div>
    </div>
  </div>`;
  return data;
};

export default courseOverviewComp;
