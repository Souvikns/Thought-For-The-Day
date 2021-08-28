const express = require('express');
const quote = require('inspirational-quotes');
const textToImage = require('text-to-image');
const fs = require('fs');
const ImageDataURI = require('image-data-uri');

const app = express();



app.get('/', async (req, res) => {
	try {
		res.setHeader("content-type", "image/png");
		const img = await textToImage.generate(quote.getRandomQuote(), {
			maxWidth: 800
		});
		ImageDataURI.outputFile(img, './quote.png');


		return res.send(fs.readFileSync('./quote.png'));
	} catch (error) {
		return res.send(error);
	}
})

app.get('/', (req,res) => {
	return res.send('Hello World');
})

module.exports = app; 