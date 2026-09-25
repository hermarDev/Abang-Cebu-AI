import { generateAiCompletion } from "./client";
import { LISTING_ANALYZER_PROMPT } from "./prompts";

export interface ListingAnalysisResult {
  safetyScore: number;
  isSuspicious: boolean;
  redFlags: string[];
  suggestions: string[];
  summary: string;
}

export async function analyzeListingContent(data: {
  title: string;
  description: string;
  priceMonthly: number;
  propertyType: string;
  city: string;
  barangay: string;
}): Promise<ListingAnalysisResult> {
  const prompt = `
Analyze this rental property listing:
- Title: ${data.title}
- Property Type: ${data.propertyType}
- Monthly Rent: PHP ${data.priceMonthly}
- Location: Barangay ${data.barangay}, ${data.city}, Cebu
- Description: ${data.description}
`;

  try {
    const rawResponse = await generateAiCompletion(prompt, LISTING_ANALYZER_PROMPT);
    // Parse JSON from response
    const jsonMatch = rawResponse.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]) as ListingAnalysisResult;
    }
  } catch (err) {
    console.warn("Failed to parse AI listing analysis JSON, falling back to heuristic analysis:", err);
  }

  // Fallback heuristic scoring
  return {
    safetyScore: data.priceMonthly < 1500 ? 40 : 85,
    isSuspicious: data.priceMonthly < 1500,
    redFlags: data.priceMonthly < 1500 ? ["Price is unusually low for Cebu urban centers"] : [],
    suggestions: ["Ensure photos show all rooms and verification documents are uploaded."],
    summary: `${data.propertyType} in ${data.barangay}, ${data.city}.`,
  };
}
