export function prompt(includeDetails) {
  return `
The input is an image of a hotel menu card. Your task is to:

Extract text from the image and then identify and group all food items strictly under the categories explicitly mentioned in the menu.
Do not create or include any new categories that are not present in the input image text, even if they seem relevant.
Ensure all food names and categories are grammatically correct and formatted consistently, preserving the exact names from the menu text wherever possible.
Assign each food item to the most relevant category explicitly mentioned in the menu. If a food item does not have a clear category, omit it from the output rather than assigning it to a new or undefined category.
Include the correct price for each item, retaining the original currency format (e.g., '$', '₹', 'rupees').
Exclude any irrelevant or non-food-related text, ensuring the data is specific to the hotel menu card.
Include a 'diet' field for each food item with values 'veg' or 'Non-veg' based on the item's type.
Provide a detailed and engaging description (3-5 sentences) for each food item in the 'description' field, highlighting its ingredients, taste, and appeal.

Additional details:

If 'includeDetails' is true,include 'nutrition', and 'spiceLevel' for each item.
If 'includeDetails' is false, exclude the 'ingredients', 'nutrition', and 'spiceLevel' fields.

Structure the output strictly as:
{
  "categories": ["category1", "category2"],
  "items": [
    {
      "name": "food_name",
      "category": "category_name",
      "description": "Detailed and engaging description",
      "price": "price",
      "diet": "veg/Non-veg",
      "nutrition": {
        "fats": 0.5gm,
        "proteins": 10gm,
        "carbs": 15gm,
        "calories": "100c"
      },
      "spiceLevel": spiceLevel_value
    }
  ]
}

includeDetails: [${includeDetails}],

Important Notes:

Extract text from the image and return only the JSON response in the specified structure, without any additional text, commentary, or formatting.
Ensure the food names, prices, and categories match exactly as they appear in the menu card.
Do not include any external or unrelated food item names or category names.
Do not exclude any food items that are clearly mentioned in the menu and have a corresponding category.
Ensure grammatical and capitalization accuracy throughout.
Avoid using any formatting annotations such as \`\`\` or markdown code blocks.
`;
}
