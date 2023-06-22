const finalExamWeekComp = (state) => {
  console.log(state);
  const data = `<div
  style="
    width: 90%;
    height: auto;
    padding: 20px;
    border: 1px solid;
    margin: 2% auto;
  "
>
  <h1 style="color: #002d58">
    Congratulations on completing the Try It course!
  </h1>
  <div class="LectureSlides" style="width: 100%; height: auto; margin: auto">
    <p>
      Whether you're looking to advance at your current organization or shift
      fields entirely, you've taken a valuable step toward enhancing your skill
      set and advancing your career.
    </p>
    <ul>
      <li>
        <b>Learning your way</b> — Now that you've completed the Try It,
        discover the power of self-paced learning.
      </li>
      <li>
        <b>Build on your momentum</b> — You've taken the first step toward
        growing your skill set and investing in your future. Ready to continue
        your learning journey and expand on your expertise?
      </li>
    </ul>
    <b>Upskill with this online program, recommended just for you.</b>
      <p>Discover ${state.input1}
    </div>
    <div style="width: 70%">
        <p>${state.input2}</p>   
    </div>
    <div style="width: 70%">
      <p>
        Ready to dive into
        ${state.input3}, or still have questions? Click here and enter your information to
        enroll or learn more about this course from GetSmarter (an edX partner).
        course. After completing this Try It course, you'll be able to:
      </p>
    </div>
    <b>Executive Education Learning Experience</b>
    <p>
      Explore Executive Education's learning experience — flexible, fully
      supported cohort-based learning, designed for the busy professional, as
      outlined in the video below.
    </p>
    <iframe
      width="1008"
      height="567"
      src="https://www.youtube.com/embed/329IDa3GYXs"
      title="Face change with GetSmarter by your side"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <p><b>Video 1:</b> Explore Executive Education's learning experience.</p>
    <h3>End of course survey</h3>
  </div>
</div>
`;
  return data;
};

export default finalExamWeekComp;
