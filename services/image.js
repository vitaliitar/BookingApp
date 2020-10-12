module.exports = {
	formatPath: (protocol, host, images) => {
		const url = protocol + '://' + host;
		const result = []

		for (let i = 0; i < images.length; i++)
			result.push(url + '/uploads/' + images[i].filename);

		return result;
	}
};
