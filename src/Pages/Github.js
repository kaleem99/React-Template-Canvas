import EditTemplate from "Components/EditTemplate";
import { useEffect, useState } from "react";

function ViewGithubContent({ apiKey }) {
  const [githubData, setGithubData] = useState([]);
  const [search, setSearch] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [updated, setUpdated] = useState("");
  // const [shaKey, setShaKey]
  useEffect(() => {
    const fetchGithubData = async () => {
      const data = await fetch(
        "https://api.github.com/repos/kaleem99/React-Template-Canvas-Content/contents/",
        {
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${apiKey}`,
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      );
      const res = await data.json();
      console.log(res);
      setGithubData(res);
    };
    fetchGithubData();
  }, []);
  const fetchFileContent = async (e) => {
    const newData = await fetch(
      `https://api.github.com/repos/kaleem99/React-Template-Canvas-Content/contents/${e.target.value}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${apiKey}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    let result = await newData.json();
    setFileContent(result);
  };
  const updateGithubFile = async () => {
    console.log(fileContent.sha);
    try {
      const result = await fetch(
        `https://api.github.com/repos/kaleem99/React-Template-Canvas-Content/contents/${fileContent.name}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${apiKey}`,
            "X-GitHub-Api-Version": "2022-11-28",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({
            message: `updated file ${fileContent.name}`,
            content: btoa(updated),
            sha: fileContent.sha,
          }),
        }
      );
      console.log(result);
    } catch (err) {
      alert(err);
    }
  };
  return fileContent === "" ? (
    <div className="GithubPage">
      <h1 style={{ textAlign: "center" }}>Github HTML Content</h1>
      <div style={{ margin: "1px auto", width: "260px" }}>
        <label>Search file Name</label>{" "}
        <input
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          style={{ width: "240px", height: "30px" }}
        />
      </div>
      <div className="GithubContent">
        {githubData.length > 0 &&
          githubData
            .filter((data) => data.name.toLowerCase().includes(search) && data)
            .map((data) => {
              return (
                <div className="GithubItem">
                  <p>File Name: {data.name}</p>
                  <p> Hosted Link:</p>
                  <p className="githubLink">
                    <a
                      href={`https://kaleem99.github.io/React-Template-Canvas-Content/${data.name}`}
                    >
                      https://kaleem99.github.io/React-Template-Canvas-Content/
                      {data.name}
                    </a>
                  </p>
                  <button
                    value={data.name}
                    onClick={(e) => fetchFileContent(e)}
                  >
                    Edit HTML
                  </button>
                </div>
              );
            })}
      </div>
    </div>
  ) : (
    <EditTemplate
      updated={updated}
      fileContent={fileContent}
      setUpdated={setUpdated}
      updateGithubFile={updateGithubFile}
    />
  );
}

export default ViewGithubContent;
