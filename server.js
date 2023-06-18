require("dotenv").config();
const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const { getHomePage } = require("./src/utils");

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_SECRET_KEY,
});
const openAi = new OpenAIApi(configuration);
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const search = req.query.search?.trim() || "";
  let images = [];
  let error = "";
  if (search) {
    try {
      const response = await openAi.createImage({
        prompt: req.query.search,
        n: 1,
        size: "512x512",
      });
      images = response.data.data;
      console.log(images, "chk");
    } catch (err) {
      if (err?.response?.data?.error?.message) {
        error = err?.response?.data?.error?.message;
      }
      console.log(err, "chr err");
    }
  }
  res.send(getHomePage(search, images, error));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
