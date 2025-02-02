import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from 'node:fs';
import { prompt } from './aiPrompt.js'
import dotenv from 'dotenv'
dotenv.config()
// Convert a file to a GenerativeAI compatible part.
export function fileToGenerativePart(path, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType,
        },
    };
}

export async function generateContent(path, includeDetails) {
    const imagePart = fileToGenerativePart(path, 'image/jpg');
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

    const result = await model.generateContent([prompt(includeDetails), imagePart]);
    console.log('Content generation finished...');
    return result.response.text()
}