const quote = require("inspirational-quotes");
const textToImage = require("text-to-image");
const ImageDataURI = require("image-data-uri");

export default async (req, res) => {
  try {
    res.setHeader("content-type", "image/png");
    const img = await textToImage.generate(quote.getRandomQuote(), {
      maxWidth: 800,
      fontSize: 28,
      fontWeight: "bold",
      textAlign: "center",
      textColor: "#11324D",
      margin: 40,
    });

    return res.send(ImageDataURI.decode(img).dataBuffer);
  } catch (error) {
    return res.send(error);
  }
};
