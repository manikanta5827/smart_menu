import { preprocessImage } from "./helper/preprocessing.js";
import { generateContent } from "./helper/genAi.js";
import { postprocessing } from "./helper/postprocessing.js";
import { jsonParser } from "./helper/jsonParser.js";

(async () => {
  console.time("Processing completed");

  try {

    let processedImagePath = await preprocessImage("./bin/images/sam2.jpg");
    let result = await generateContent(processedImagePath, false);
    let jsonData = jsonParser(result);
    await postprocessing(jsonData);
    console.log("✅ All processing steps completed successfully");
    console.log("📊 JSON data processed:", jsonData);
    console.log("🎉 Final results have been saved");


  } catch (error) {
    console.error("Error processing:", error);
  }

  console.timeEnd("Processing completed");
})();
 