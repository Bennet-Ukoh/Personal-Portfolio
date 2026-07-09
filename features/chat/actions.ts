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
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return { error: "Chat is not configured yet — API key missing." };
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 300,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      const message = body?.error?.message ?? `HTTP ${response.status}`;
      console.error("[chat] Anthropic error:", response.status, body);
      return { error: `API error: ${message}` };
    }

    const data = await response.json();
    const text = data?.content?.[0]?.text;
    if (!text) {
      console.error("[chat] Unexpected response shape:", data);
      return { error: "Unexpected response from AI. Please try again." };
    }
    return { text: text as string };
  } catch (err) {
    console.error("[chat] Fetch failed:", err);
    return { error: "Network error. Please check your connection." };
  }
}
