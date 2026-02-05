You are a senior full-stack developer and designer with agency-level expertise in building modern, non-AI generated, high-quality educational and spiritual websites.

Your task is to add three new content sections/pages to the existing BACE Vedic Hostel website project (built with Next.js, TypeScript, TailwindCSS, Lenis smooth scroll, and modern aesthetic):

1) ISKCON Youth Forum (IYF)
2) ISKCON Girls Youth Forum (IGF)
3) ISKCON Kids Forum (IKF)

You must also update the **header navigation** to include a new dropdown menu titled **“Forums & Programs”**, with links to:
- ISKCON Youth Forum
- ISKCON Girls Forum
- ISKCON Kids Forum

### CONTEXT
This website is spiritually aligned but modern, youth-friendly, calm in color palette (deep saffron, soft beige, forest green, charcoal with gold accents). It should *never look like AI generated template garbage*. It should look premium, editorial, and trustworthy.

Follow the existing design system (TailwindCSS), accessibility best practices, SEO semantics, and performance standards.

Pages to build (content based on research — see details):

---

## 🧾 1) ISKCON Youth Forum (IYF) Page

**Purpose & Meaning**
- Dynamic platform for young individuals to explore spirituality, engage in service, and connect with like-minded peers.:contentReference[oaicite:0]{index=0}
- Works to develop values, self-confidence, leadership, character, and balance between personal and professional life.:contentReference[oaicite:1]{index=1}

**Content Sections:**
- Hero: Title, description, emblem
- Mission & Vision: What IYF stands for
- Objectives:
  - Helping youth find purpose and self-confidence
  - Providing training in soft skills, leadership, time management
  - Preventing self-destructive habits with spiritual grounding
  - Promoting scientific presentation of Vedic wisdom
- Activities:
  - Workshops & Seminars
  - Personality development
  - Art, music, drama & communication skills
  - Community service & outreach
  - Retreats & residential programs
- Impact & Benefits
- Call-To-Action (Join or Learn More)

---

## 🧾 2) ISKCON Girls Youth Forum (IGF) Page

**Purpose & Meaning**
- Dedicated spiritual platform for girls (approx age 15-30) to cultivate self-confidence, balance spiritual life with daily life, and become strong contributors to family and society.:contentReference[oaicite:2]{index=2}

**Content Sections:**
- Hero: Title & tagline
- Objectives:
  - Spiritual enlightenment & cultivation
  - Life skills (communication, etiquette, stress management)
  - Cultural & devotional skills (Bhajans, Aarti, crafts)
  - Character & personality building
  - Role balance (family life, career, values)
- Activities:
  - Devotional arts (music, drama)
  - Cultural activities (Rangoli, crafts, cooking)
  - Counselling workshops
  - Participant stories
- Benefits
- CTA (Join WhatsApp / Register)

---

## 🧾 3) ISKCON Kids Forum (IKF) Page

**Purpose & Meaning**
- A child-friendly spiritual and educational hub focused on intellectual, social, and *playful* spiritual learning, ideal for children and their families. (Reference inspiration from ISKCON kids interactive resources.):contentReference[oaicite:3]{index=3}

**Content Sections:**
- Hero: Title & tagline (fun + learning)
- Philosophy & Importance (play + learning = retention)
- Activities:
  - Interactive stories & rhymes
  - Coloring pages, games, puzzles
  - Slokas & festival content
  - Artistic learning
- Growth & Benefits
- Parent Resources & Contact
- CTA (Join / Explore)

---

## 🧩 UX / DESIGN REQUIREMENTS (All Pages)

- Follow existing site aesthetic: calm, value-based, editorial
- Use sibling paths: `/iskcon-youth-forum`, `/iskcon-girls-forum`, `/iskcon-kids-forum`
- Header dropdown: “Forums & Programs” → those pages
- Mobile responsive navbar with dropdown
- Smooth scroll with Lenis
- Add metadata for SEO (title, description)
- TailwindCSS utility classes, consistent spacing, typography
- Accessible HTML (semantic sections, aria attributes)
- Include relevant hero image, icons or illustrative assets (dev assets or placeholders)

---

## 🗂 TECHNICAL / CODE REQUIREMENTS

**Next.js App Router with TypeScript**
- Each page should live under `/app/<slug>/page.tsx`
- Export metadata (SEO)
- Use functional components and Tailwind
- Create reusable components where appropriate (Hero, SectionHeader, CardGrid, CTA)

**Navigation**
- Update navigation component to include a dropdown under “Forums & Programs”
  - Ensure keyboard accessibility and mobile toggle
  - Use state for open/close dropdown

**SEO & Performance**
- Use `next/head` or `metadata` export
- Images optimized via `next/image`
- Lighthouse score 90+

**No backend logic needed for these pages** – they are static informational.

---

## 🪶 CONTENT AUTHENTICITY

The copy should:
- Avoid over-religious clichés
- Be factual, human, logical, and clear
- Use citations pulled from valid web references like temple pages detailing IYF and IGF activities — but rewritten in your own voice.

Use specific examples like:
- Workshops, seminars, leadership training, personality development (IYF):contentReference[oaicite:4]{index=4}
- Skill development, cultural arts, counselling (IGF):contentReference[oaicite:5]{index=5}
- Fun storytelling, games, puzzles for kids (IKF inspired by interactive resources):contentReference[oaicite:6]{index=6}

---

## 🏁 FINAL DELIVERY

Produce:
1. Fully coded pages with Tailwind styling
2. Updated responsive navigation with dropdown
3. SEO metadata entries per page
4. Reusable components
5. No AI-template look — clean, bespoke UI
6. Complete ready-for-deployment Next.js project

Do NOT output generic placeholder text.  
Deliver *production quality* code.

---