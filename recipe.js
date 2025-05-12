import express from 'express';
import OpenAI from 'openai';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// ⚠️ SECURITY WARNING: This exposes your API key in the source code
const openai = new OpenAI({
  apiKey: "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" // ← Replace with your actual key
});

app.post('/generate-recipe', async (req, res) => {
  try {
    const { dishName, servings } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{
        role: "system",
        content: `You are an expert Indian chef. Generate detailed recipes in JSON format.`
      }, {
        role: "user",
        content: `Create a recipe for ${dishName} that serves ${servings} people. 
        Respond with this exact JSON structure:
        {
          "name": string,
          "servings": number,
          "ingredients": [{
            "name": string,
            "quantity": number,
            "unit": string,
            "price": number (estimate in INR)
          }],
          "steps": string[],
          "cookingTime": string,
          "difficulty": "Easy/Medium/Hard"
        }`
      }],
      temperature: 0.7,
      response_format: { type: "json_object" }
    });

    const recipe = JSON.parse(response.choices[0].message.content);
    res.json(recipe);
    
  } catch (error) {
    console.error("Error generating recipe:", error);
    res.status(500).json({ error: "Failed to generate recipe" });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Recipe API running on port ${PORT}`));