const quote = require('inspirational-quotes');
const textToImage = require('text-to-image');
const fs = require('fs');
const ImageDataURI = require('image-data-uri');


module.exports = async (req, res) => {
	try {
		res.setHeader("content-type", "image/png");
		const img = await textToImage.generate(quote.getRandomQuote(), {
			maxWidth: 800
		});

		return res.send(ImageDataURI.decode(img).dataBuffer);
	} catch (error) {
		return res.send(error);
	}
}