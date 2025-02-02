import sharp from 'sharp';

export async function preprocessImage(imagePath) {
    try {
        let processedImagePath = './bin/temp_processed_image.jpg';

        // Preprocess the image with Sharp
        await sharp(imagePath)
            .greyscale() // Convert to grayscale
            .linear(1.2, -0.5) // Adjust contrast (1.2 = increase contrast, -0.5 = adjust brightness)
            .normalize() // Normalize brightness and contrast
            .sharpen() // Apply sharpening
            .toFile(processedImagePath); // Save the processed image

        console.log(`Preprocessing finished...`);
        return processedImagePath;
    } catch (error) {
        console.error("Error during image preprocessing:", error);
        throw new Error("Failed to preprocess the image.");
    }
}
