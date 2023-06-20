const EditTemplate = ({
  fileContent,
  setUpdated,
  updated,
  updateGithubFile,
}) => {
  return (
    <>
      <div
        id="EditGithubContent"
        style={{
          width: "90%",
          height: "auto",
          margin: "auto",
          border: "1px solid",
        }}
        dangerouslySetInnerHTML={{ __html: atob(fileContent.content) }}
        contentEditable={true}
        onKeyDown={(e) => setUpdated(e.currentTarget.innerHTML)}
      ></div>
      <button
        onClick={() => updateGithubFile()}
        style={{
          width: "auto",
          paddingLeft: "15px",
          paddingRight: "15px",
          height: "40px",
          marginTop: "auto",
          marginBottom: "auto",
          marginLeft: "100px",
          borderRadius: "5px",
          border: "1px solid",
        }}
        className="btn"
      >
        Update Template
      </button>
    </>
  );
};

export default EditTemplate;
