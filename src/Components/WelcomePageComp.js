const courseOverviewComp = (state) => {
  const data = `<div
  className="Welcome PageDiv"
  style="
    width: 90%;
    height: auto;
    padding: 20px;
    border: 1px solid;
    margin: 2% auto"
>
  <div
  style="width: 80%; height: auto;"
  >
    <img src="https://graphics.getsmarter.com/GS+email+signatures/Email+signature+tool/dist/img/g.jpg"></img>
  </div>
  <div
  >
    <h1 style="color: #E52370">Welcome To ${state.input1}</h1>
  </div>
  <h2>Welcome to the course</h2>
  <p>Welcome!</p>
  <text>
    Thank you for joining this Try It course. This course is a portion
    of a module in the full<br> ${state.input2} ${state.input3} course. After completing this<br> Try It course, you’ll be able to:
  </text>
  <ul>
    <li>
    ${state.input4} 
    </li>
  </ul>
  <p>
    This free Try It course is ungraded and does not award a
    certificate, but tell us what you<br> think in the survey at the end!
  </p>
  <p>
    If you are new to the edX platform, we recommend reviewing the
    resources in
    <a style="color: rgb(17, 85, 204);" href="https://www.google.com/url?q=https://www.edx.org/course/demox&sa=D&source=docs&ust=1685961469814455&usg=AOvVaw1S5GSUAC2YK9XZjaaZRoTV">
      DemoX
    </a>
    .<br> You can reach our technical support team via the
    <a style="color: rgb(17, 85, 204);" href="https://support.edx.org/hc/en-us">Help</a> link in the
    upper right corner of<br> any page.
  </p>
</div>`;
  return data;
};

export default courseOverviewComp;
