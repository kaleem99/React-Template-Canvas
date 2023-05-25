const facultyBiographiesComp = (state) => {
  const data = `<div
  style="
    width: 90%;
    height: auto;
    padding: 20px;
    border: 1px solid;
    margin: 2% auto;
  "
>
  <h1 style="color: rgb(20, 117, 212)">Faculty Biographies</h1>
  <div
    class="FacultyBiographies"
    style="width: 100%; height: auto; margin: auto"
  >
    <div style="margin-top: 10px">
      <h2 style="color: rgb(20, 117, 212)">&lt;Faculty Name&gt;</h2>
      <div style="display: grid; grid-template-columns: 70% auto">
        <p style="width: 90%; height: auto">${state.input1}</p>
        <div
          class="a"
          style="overflow-wrap: break-word; width: 90%; border: 1px solid"
        >
          This div contains a very long word:
          thisisaveryveryveryveryveryverylongword. The long word will not break
          and wrap to the next line.
        </div>
      </div>
    </div>
    <div style="margin-top: 10px">
      <h2 style="color: rgb(20, 117, 212)">&lt;Faculty Name&gt;</h2>
      <div style="display: grid; grid-template-columns: 70% auto">
      <p style="width: 90%; height: auto">${state.input2}</p>
      <div
          class="a"
          style="overflow-wrap: break-word; width: 90%; border: 1px solid"
        >
          This div contains a very long word:
          thisisaveryveryveryveryveryverylongword. The long word will not break
          and wrap to the next line.
        </div>
      </div>
    </div>
  </div>
</div>
`;
  return data;
};

export default facultyBiographiesComp;
