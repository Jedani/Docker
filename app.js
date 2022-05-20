const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const PORT = "3000";

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
	console.log(req.body);
});

app.listen(PORT, () => {
	console.log(`listening on PORT: ${PORT}`);
});
