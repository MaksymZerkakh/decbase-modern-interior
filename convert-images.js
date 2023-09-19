const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

async function convertImagesToWebP(folderPath) {
    const files = fs.readdirSync(folderPath);

    for (const file of files) {
        if (file.endsWith('.png') || file.endsWith('.jpg')) {
            const inputFilePath = path.join(folderPath, file);
            const outputFilePath = path.join(folderPath, `${path.parse(file).name}.webp`);

            await convertToWebP(inputFilePath, outputFilePath);

            console.log(`${file} converted to WebP successfully`);

            // Remove the original PNG or JPEG file
            fs.unlinkSync(inputFilePath);
            console.log(`${file} removed`);
        }
    }
}

async function convertToWebP(inputFilePath, outputFilePath) {
    await sharp(inputFilePath)
        .toFormat('webp')
        .toFile(outputFilePath);
}

// Example usage
const folderPath = path.join(__dirname, 'public');
convertImagesToWebP(folderPath)
    .then(() => {
        console.log('All images converted to WebP successfully');
    })
    .catch((error) => {
        console.error('Error converting images to WebP:', error);
    });