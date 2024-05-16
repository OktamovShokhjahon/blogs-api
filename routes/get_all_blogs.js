const { Router } = require("express");

const get_data = require("../helpers/get_data");

const route = Router();

route.get("/get-blogs", (req, res) => {
	const query = req.query;
	const { q, from, to, sortBy } = query;
	if (q) {
		const url = `https://newsapi.org/v2/everything?q=${q}${from ? "&from=" + from : ""}${to ? "&to=" + to : ""}${sortBy ? "&sortBy=" + sortBy : ""}&apiKey=${process.env.API_KEY}`;
		if (q.length < 500) {
			get_data(url, res);
		} else {
			res.send({
				ok: false,
				error: {
					err_uz: "Maqola nomining uzunligi 500 dan katta yoki teng.",
					err_eng: "Length of title is 500 or bigger.",
					err_ru: "Длина названия статьи больше или равна 500.",
				},
				developer: "https://t.me/OktamovShohjahon",
			});
		}
	} else {
		res.send({
			ok: false,
			error: {
				err_uz: "Siz maqola nomisiz maqola qidira olmaysiz.",
				err_eng: "Sorry, you can't search without blog name.",
				err_ru: "Вы не можете найти статью без названия статьи.",
			},
			developer: "https://t.me/OktamovShohjahon",
		});
	}
});

module.exports = route;
