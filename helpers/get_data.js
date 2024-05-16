const get_data = async (url, res) => {
	try {
		const req = await fetch(url);
		const response = await req.json();
		res.send({
			ok: true,
			response,
			developer: "https://t.me/OktamovShohjahon",
		});
	} catch (err) {
		res.send({
			ok: false,
			error: err,
		});
	}
};

module.exports = get_data;
