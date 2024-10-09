const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config()

const api = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(api);

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: 'https://headlines-ai.netlify.app/',
    credentials: true
}));

app.post("/ai", async (req, res) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const { prompt, contentType, platform, length } = req.body;

    const mainPrompt = `You need to make a ${contentType} for ${platform} in ${length} words, the description of the Idea is ${prompt}`

    const result = await model.generateContent(mainPrompt)
    const response = await result.response;
    const text = response.text();
    res.send(text);
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})
