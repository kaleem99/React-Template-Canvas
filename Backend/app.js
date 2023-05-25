const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const port = 1000;
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// Define a route for the GET request
// app.get("/", async (req, res) => {
const testing = async () => {
  try {
    const response = await axios.get(
      "https://digitalcampus.beta.instructure.com/api/v1/courses/214/pages/Express%20API%20Template%20Version100",
      {
        headers: {
          Authorization:
            "Bearer 20171~jYdCiwFisd1kJkLd8LuVui5iplxYE0pcHPw1H1JneIZ0cMLvYKzdUrLDmlHqNYcp",
        },
      }
    );

    // Respond with the response data
    // res.send(response.data);
    console.log(response);
  } catch (error) {
    console.error("Error:", error);
    // res.status(500).send("An error occurred");
  }
};
// testing();
// });
// curl -X PUT -H 'Authorization: Bearer 20171~jYdCiwFisd1kJkLd8LuVui5iplxYE0pcHPw1H1JneIZ0cMLvYKzdUrLDmlHqNYcp' https://digitalcampus.beta.instructure.com/api/v1/courses/214/pages/New%20Page%20API%20Template -d wiki_page[body]=%3Cdiv%3E%0A%3Ch1%3ENew%20Course%20Heading%3C/h1%3E%0A%3Cbr%3E%3C/br%3E%0A%3Cbody%3E%0A%20%20Lorem%20Ipsum%20is%20simply%20dummy%20text%20of%20the%20printing%20and%20typesetting%20industry.%0A%3C/body%3E%0A%3C/div%3E
app.post("/templates", async (req, res) => {
  // console.log(JSON.stringify(req.body.data));
  console.log(encodeURI(req.body.data));
  const testingPost = async () => {
    try {
      const newData = encodeURI(req.body.data);
      const response = await axios.put(
        `https://digitalcampus.beta.instructure.com/api/v1/courses/214/pages/${req.body.templateName}`,
        `wiki_page[body]=${newData}`,
        {
          headers: {
            Authorization:
              "Bearer 20171~jYdCiwFisd1kJkLd8LuVui5iplxYE0pcHPw1H1JneIZ0cMLvYKzdUrLDmlHqNYcp",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      // Respond with the response data
      // res.send(response.data);
      res.send("Data has been posted successfully");
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("An error occurred");
    }
  };
  testingPost();
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
