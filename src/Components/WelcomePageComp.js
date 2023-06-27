const courseOverviewComp = (state) => {
  // <h1 style="color: #00262B">Welcome To Try It: ${state.input1}</h1>

  const data = `<div
  className="Welcome PageDiv"
  style="
    width: 90%;
    height: auto;
    padding: 20px;
    margin: 2% auto"
>
  <div style="
    display: grid;
    grid-template-columns: auto auto;
    /* width: 830px; */
  ">
  <div>
  <h1 style="color: #002D58;">Welcome to the course</h1>
  <text style="word-wrap: break-word;">
    Thank you for joining this Try It course. This course is a portion
    of a module in the full ${state.input2} ${state.input3} course.</p><p>After completing this Try It course, you'll be able to:
  </text>
  </div>  
  <div
  style="width: 80%; height: auto; margin-left: 20px;"
  >
    <img src="https://graphics.getsmarter.com/GS+email+signatures/Email+signature+tool/dist/img/g.jpg"></img>
  </div>
  </div>
    ${state.input4} 
    <br>
  <p>
    This free Try It course is ungraded and does not award a
    certificate, but tell us what you think in the survey at the end!
  </p>
  <p>
    If you are new to the edX platform, we recommend reviewing the
    resources in
    <a style="color: rgb(17, 85, 204);" href="https://www.google.com/url?q=https://www.edx.org/course/demox&sa=D&source=docs&ust=1685961469814455&usg=AOvVaw1S5GSUAC2YK9XZjaaZRoTV">
      DemoX
    </a>
    .<br> You can reach our technical support team via the
    <a style="color: rgb(17, 85, 204);" href="https://support.edx.org/hc/en-us">Help</a> link in the
    upper right corner of any page.
  </p>
</div>`;
  return data;
};

export default courseOverviewComp;
