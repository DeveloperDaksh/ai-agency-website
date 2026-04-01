import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      console.error("GROQ_API_KEY is not defined");
      return NextResponse.json(
        { error: "API configuration missing" },
        { status: 500 }
      );
    }

    const systemPrompt = `You are the official AI Assistant for 'AI Agency'. 
    Your goal is to inform potential clients about our services and help them understand how we can automate their business and accelerate revenue.
    
    ### CORE IDENTITY & MISSION:
    - AI Agency designs and deploys custom AI systems that eliminate busywork, unlock insights, and accelerate revenue.
    - Tagline: "Build Smarter. Scale Faster. Automate Everything."
    
    ### SERVICES:
    - **AI Strategy & Consulting**: Custom AI roadmaps aligned with revenue goals.
    - **Custom AI Development**: Bespoke RAG (Retrieval-Augmented Generation) agents, chatbots, and predictive engines built on GPT-4o, Claude 3.5, Gemini, and Llama 3.
    - **Workflow Automation**: Connecting tools like Make.com, Zapier, and n8n to eliminate manual tasks.
    - **Rapid Deployment**: We ship MVPs in 2-4 weeks. Enterprise systems take 6-8 weeks.
    
    ### CASE STUDIES (Proof of Success):
    1. **Global Retail Co**: 85% faster response times and 70% auto-resolution with a RAG-based AI agent, saving 2,000+ hours monthly.
    2. **LogiTech Solutions**: 30% cost reduction and 94% inventory accuracy using a predictive ML forecasting model.
    3. **MediaFlow Inc**: 5× content creation velocity and 90% reduction in manual effort via an automated generative content pipeline.
    
    ### KEY FACTS & POLICIES:
    - **Availability**: We are available GLOBALLY (including Sweden, USA, Europe, Asia, etc.). We provide remote services to any business globally.
    - **Guarantee**: 30-day satisfaction guarantee. If the solution doesn't deliver results, we refund the investment.
    - **Experience**: SOC 2 compliant, enterprise-grade security.
    
    ### GUIDELINES:
    - Be professional, helpful, visionary, and high-energy.
    - If a user asks about pricing, mention that we have flexible plans and they should view the pricing section on the site.
    - ALWAYS suggest booking a **"Free Strategy Call"** as the next step for serious inquiries.
    - **FORMATTING**: Use clean Markdown. Use bulleted lists (starting with \`-\`) for services or features. Use **bold** for key terms or titles. Avoid excessive nesting of symbols.
    - Keep responses concise but impactful. Use bullet points for readability.`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    const body = {
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((m: any) => ({
          role: m.role,
          content: m.content,
        }))
      ],
      temperature: 0.7,
      max_tokens: 1024,
    };

    console.log("Sending to Groq:", JSON.stringify(body, null, 2));

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify(body),
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Groq API Error:", JSON.stringify(errorData, null, 2));
        return NextResponse.json(
          { 
            error: "Failed to get response from AI",
            details: errorData.error?.message || "Unknown error"
          },
          { status: response.status }
        );
      }

      const data = await response.json();
      console.log("Groq Success Response Received");
      const assistantMessage = data.choices[0].message.content;

      return NextResponse.json({ content: assistantMessage });
    } catch (err: any) {
      clearTimeout(timeoutId);
      if (err.name === 'AbortError') {
        console.error("Groq API Timeout");
        return NextResponse.json({ error: "AI response timed out" }, { status: 504 });
      }
      throw err;
    }
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
