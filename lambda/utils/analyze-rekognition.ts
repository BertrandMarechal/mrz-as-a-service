import fs from 'fs';
import path from 'path';
import { DetectTextResponse } from 'aws-sdk/clients/rekognition';
fs.readFile(path.resolve(__dirname, './data.json'), (err, data) => {
    const dataParsed: DetectTextResponse = JSON.parse(data.toString('ascii'));
    if (dataParsed.TextDetections) {
        const texts = dataParsed.TextDetections
            .filter(x => x.Type === 'LINE')
            .map(x => x.DetectedText)
            .filter(Boolean);
        const wordCount = dataParsed.TextDetections
            .filter(x => x.Type === 'WORD')
            .length;
        console.log(wordCount);
        
        texts.sort((a, b) => (b as string).length - (a as string).length);
        for (let index = 0; index < 10; index++) {
            console.log(texts[index]);
        }
    }
});