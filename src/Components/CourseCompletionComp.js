const finalExamWeekComp = (state) => {
  const data = `<div
      class="CourseOverviewDiv"
      style="width: 90%; height: auto; padding: 20px; border: 1px solid; margin: 2% auto;"
    >
    <div style="width:80%;">
    <img
    width="80%"
    height="auto"
    src="${state.bannerImage}"
    alt=""
    style=" margin-top: 100px; margin-bottom: auto"
  />
    </div>
    <h1 style="color: #E52370;">Next Steps</h1>
    <div style="width:70%;">
    <p>${state.input1}</p>
    </div>  
    <h2>Completion Page:
    </h2>
      <div
        class="LectureSlides"
        style="width: 70%; height: auto; padding: 20px"
      >
      <label>1.</label>
      <text>${state.input2}</text>
      <br></br>
      <label>2.</label>
      <text>${state.input3}</text>
      <br></br>
      <label>3.</label>
      <text>${state.input4}</text>
      <br></br>

      <label>4.</label>
      <text>${state.input5}</text>
      <br></br>
      <label>5.</label>
      <text>${state.input6}</text>
      <br></br>
       
      </div>
      <div style="margin-top: 10px; width: 70%;">
      <p>${state.input7}</p>
    </div>
    </div>
    </div>`;
  return data;
};

export default finalExamWeekComp;
