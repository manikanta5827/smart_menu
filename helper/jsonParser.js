export const jsonParser = (data) => {
    const jsonMatch = data.match(/```json\s*([\s\S]*?)\s*```/);
    if (jsonMatch)
        data = jsonMatch[1];
    return JSON.parse(data);
}