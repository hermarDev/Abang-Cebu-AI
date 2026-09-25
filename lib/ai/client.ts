export interface AiChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export async function generateAiCompletion(prompt: string, systemPrompt?: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY || process.env.AI_API_KEY;

  if (!apiKey) {
    return "AI analysis currently unavailable: API key not configured.";
  }

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          ...(systemPrompt ? [{ role: "user", parts: [{ text: systemPrompt }] }] : []),
          { role: "user", parts: [{ text: prompt }] },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Gemini API error:", err);
      return "Unable to process AI analysis at this time.";
    }

    const data = await response.json();
    return (
      data.candidates?.[0]?.content?.parts?.[0]?.text || "No response received."
    );
  } catch (error) {
    console.error("Failed to generate AI completion:", error);
    return "AI service encountered an unexpected error.";
  }
}
