import axios from 'axios';

export async function askAI(prompt: string) {
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'qwen/qwen-2.5-coder-32b-instruct',
        messages: [
          {
            role: 'user',
            content: `Generate 3 appropriate sections of frontend code with html and css styles for: ${prompt} , \n Do not use images your UI must rely on text, colors and color backgrounds. Implement the best UI and UX principles in order to achieve a visually appealing and user-friendly interface. Your response must only include the frontend code, no explanations or additional text or opening or closing text or markdown.`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost', 
          'X-Title': 'aibuilder-task',
        },
      },
    );

    return response.data.choices[0].message.content;
  } catch (error: any) {
    console.error('askAI Error:', error?.response?.data || error.message);
    throw new Error('AI code generation failed');
  }
}
