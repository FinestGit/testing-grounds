import axios from "axios";
import cors from "cors";
import express from "express";

const app = express();

const port = process.env.PORT || 4000;

const GITHUB_CLIENT_ID = "f3cea039fd2e82ab18be";
const GITHUB_CLIENT_SECRET = "947f001470705ba46e37cc7fa7a555fd0623d740";
const GITHUB_OAUTH_BASE_URL = "https://github.com/login/oauth";
const GITHUB_ACCESS_TOKEN_URL = "/access_token";

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/oauth/callback", async (request, res) => {
  const code = request.query.code;

  try {
    const response = await axios.post(
      `${GITHUB_OAUTH_BASE_URL}${GITHUB_ACCESS_TOKEN_URL}`,
      {
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const data = response.data;

    res.json({ data });
  } catch (error) {
    console.error("Failed to get GitHub access token", error);
    res.status(500).json({ error: "Failed to authenticate" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
