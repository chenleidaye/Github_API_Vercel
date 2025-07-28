// api/github.js
export default async function handler(req, res) {
  const { path } = req.query;
  const response = await fetch(`https://api.github.com/${path.join("/")}`, {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `token ${process.env.GITHUB_TOKEN}`  // 如果需要，添加 GitHub 认证 token
    }
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
