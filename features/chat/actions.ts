"use server";

export type ChatMessage = { role: "user" | "assistant"; content: string };
export type ChatResult = { text?: string; error?: string };

const SYSTEM_PROMPT = `You are an AI assistant on Bennet Ukoh's portfolio website. Help recruiters and visitors learn about Bennet. Be professional, concise, and friendly. Answer in 2–4 sentences maximum.

PROFILE:
- Name: Bennet Ukoh
- Role: Frontend Engineer specialising in React & Next.js
- Currently: Lead Frontend Engineer & Software Development Trainer at CrystalLattice Limited (Jun 2026 – Present)
- Open to remote Frontend Engineer opportunities
- Location: Nigeria (remote-friendly)
- Email: bennetukoh@gmail.com
- LinkedIn: linkedin.com/in/ukohbennet
- GitHub: github.com/Bennet-Ukoh

SKILLS: React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Shadcn-ui, Framer Motion, Zustand, PostgreSQL, Prisma, Python, Git

EXPERIENCE:
1. Lead Frontend Engineer & Trainer — CrystalLattice Limited (Jun 2026–Present): Leads frontend architecture for an undisclosed product and delivers developer training.
2. Frontend Engineer (Freelance, 2025–2026): Built HandyHire (marketplace), PetSoft (pet management), and Evento (event discovery) — all production-deployed.
3. 3MTT Fellow — Software Development (Mar–Dec 2025): Capstone projects — AI Resume Reviewer (Next.js + LLM + PostgreSQL) and MovieApp (Next.js 15 + Express + MongoDB + TMDB API).
4. ALX Fellow — Software Engineering & AI (2022–2025): 1-year intensive programme. Capstone: Quizy — interactive quiz platform. Also holds AI Starter Kit and AI Career Essentials certifications.

PROJECTS:
- PetSoft: Full-stack pet management platform. Live: https://pet-soft-ashy.vercel.app | GitHub: https://github.com/Bennet-Ukoh/PetSoft
- Evento: City-based event discovery. Live: https://evento-tan.vercel.app | GitHub: https://github.com/Bennet-Ukoh/evento
- AI Resume Reviewer: AI-powered CV feedback tool. GitHub: https://github.com/Bennet-Ukoh/ai-review-resume
- MovieApp: Full-stack movie discovery platform. GitHub: https://github.com/Bennet-Ukoh/movie-app

Only answer questions related to Bennet's professional background. If asked something unrelated, politely redirect to his work and skills.`;

export async function sendChatMessage(messages: ChatMessage[]): Promise<ChatResult> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return { error: "Chat is not configured yet." };
  }

  // Gemini uses "model" instead of "assistant"
  const contents = messages.map(({ role, content }) => ({
    role: role === "assistant" ? "model" : "user",
    parts: [{ text: content }],
  }));

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: { maxOutputTokens: 300 },
        }),
      }
    );

    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      console.error("[chat] Gemini error:", response.status, body);
      return { error: "I'm unavailable right now. Try emailing Bennet directly at bennetukoh@gmail.com" };
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      console.error("[chat] Unexpected Gemini response:", data);
      return { error: "Unexpected response from AI. Please try again." };
    }
    return { text: text as string };
  } catch (err) {
    console.error("[chat] Fetch failed:", err);
    return { error: "Network error. Please check your connection." };
  }
}
