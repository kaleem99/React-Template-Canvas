const data = `<div
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
      src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/800px-Harvard_shield_wreath.svg.png"
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
        Harvard is at the frontier of academic and intellectual discovery. Those who venture here—to learn, research, teach, work, and grow—join nearly four centuries of students and scholars in the pursuit of truth, knowledge, and a better world.

As a research university and nonprofit institution, Harvard is focused on creating educational opportunities for people from many lived experiences.

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
        Harvard’s research, scholarship, and educational opportunities are made possible by an endowment. Our endowment includes thousands of philanthropic gifts donated since Harvard’s early history, many of which were given to support specific aspects of the University’s work. These gifts form a permanent source of funding that connects scholars and learners from many diverse backgrounds with opportunities at Harvard, now and into the future.

The Harvard Gazette is the official news website for Harvard University. It covers campus life and times, University issues and policies, innovations in science, teaching, and learning, and broader national and global concerns.


      </p>
      <br />
      <iframe
        style="width: 60%; height: 250px; border: none; border: 0; margin-bottom: 5px;"
        src="https://youtu.be/PLhji52UX_E"
        allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

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
          src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/800px-Harvard_shield_wreath.svg.png"
        />
      </div>
    </div>
  </body>
</div>
</div>`;
console.log(encodeURI(data));
