// packages
const express = require("express");
require("dotenv").config();

// routes
const get_all_blogs = require("./routes/get_all_blogs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(get_all_blogs);

const dev = () => {
	try {
		const PORT = process.env.PORT || 4100;
		app.listen(PORT, () =>
			console.log(`App started in http://localhost:${PORT}`),
		);
	} catch (err) {
		console.log("Sorry, something went wrong.", err);
	}
};

dev();
