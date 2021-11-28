const express = require('express');
const quote = require('inspirational-quotes');
const textToImage = require('text-to-image');
const ImageDataURI = require('image-data-uri');



const app = express();

app.get('/', async (req, res) => {
	try {
		res.setHeader("content-type", "image/png");
		res.setHeader("Cache-Control", "No-Store")
		const img = await textToImage.generate(quote.getRandomQuote(), {
			maxWidth: 800,
			fontSize: 28,
			fontWeight: 'bold',
			textAlign: 'center',
			textColor: '#11324D',
			margin: 40
		});

		return res.send(ImageDataURI.decode(img).dataBuffer);
	} catch (error) {
		return res.send(error);
	}
})


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
