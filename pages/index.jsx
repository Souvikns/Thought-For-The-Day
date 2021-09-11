export default ({quoteImg}) => {
	return <center>
		<img src={quoteImg} />
	</center>
}

export async function getStaticProps(context) {
	console.log(context.params)
  const quote = require("inspirational-quotes");
  const textToImage = require("text-to-image");
  const ImageDataURI = require("image-data-uri");

  const img = await textToImage.generate(quote.getRandomQuote(), {
			maxWidth: 800,
			fontSize: 28,
			fontWeight: 'bold',
			textAlign: 'center',
			textColor: '#11324D',
			margin: 40
		})

  return {
    props: {
		quoteImg: img
	},
  };
}
