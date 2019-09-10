import Jimp from 'jimp';
import fs from 'fs';
import path from 'path';

Jimp.read(path.resolve(__dirname, '../../data/uk.png')).then((image: Jimp) => {

    const cropPercent = 0.47;
    image.crop(0, Math.floor(cropPercent * image.bitmap.height), image.bitmap.width, Math.floor((1 - cropPercent) * image.bitmap.height));
    image.write(path.resolve(__dirname, '../../data/uk3.png'), () => {

    });
})