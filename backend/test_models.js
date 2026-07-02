require('dotenv').config({ path: 'g:\\PLANET_LIFE\\planet_life\\backend\\.env' });
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function run() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const modelsToTest = ['gemini-2.5-flash-lite', 'gemini-flash-latest', 'gemini-2.0-flash-lite-001'];
  
  for (const modelName of modelsToTest) {
    try {
      console.log('Testing', modelName);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent('Say hello in JSON format {"message": "hello"}');
      console.log(modelName, 'SUCCESS:', result.response.text());
      return; // Stop on first success
    } catch (err) {
      console.error(modelName, 'FAILED:', err.message);
    }
  }
}
run();
