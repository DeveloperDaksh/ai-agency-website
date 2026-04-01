import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function testGroq() {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.error("No API key found in .env.local");
    return;
  }

  console.log("Testing Groq API with key starting with:", apiKey.substring(0, 10));

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: "Hello" }],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("API Error:", JSON.stringify(error, null, 2));
    } else {
      const data = await response.json();
      console.log("Success! Response:", data.choices[0].message.content);
    }
  } catch (error) {
    console.error("Fetch Error:", error);
  }
}

testGroq();
