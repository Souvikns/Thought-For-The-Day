import quote from 'inspirational-quotes';
import {generate} from 'text-to-image';
import ImageDataURI from 'image-data-uri';

export default async (req, res) => {
    res.setHeader('content-type', "image/png");
    res.setHeader('Cace-Control', 'No-Store');
    // const img = await generate(quote.getRandomQuote(), {
    //     maxWidth: 800,
    //     fontSize: 28,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     textColor: '#11324D',
    //     margin: 40
    // });
    // res.send(ImageDataURI.decode(img).dataBuffer);
    // return res.end();
    return res.send("Hello World")
}