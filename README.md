# My Life As A Movie

_A timeline-style life journaling app with tags, moods, and media._

---

## Overview

**My Life As A Movie** helps users record their life as a sequence of entries—like scenes in a film. Each entry can include notes, moods, tags, and attachments, helping users reflect and visualize their personal journey over time.

---

## Features

### 🎬 Timeline Journal
Capture life events as chronological entries with timestamp, mood, and notes.

### 🏷️ Tags & Mood Tracking
Organize your entries with custom tags and mood icons to reveal patterns over time.

### 📎 Media Attachments
Attach files or images to your entries—like photos, audio clips, or documents.

### 🧹 Demo Data Auto-Cleanup (Cron Job)
Demo users' data is cleared daily with a scheduled job to keep the app clean and light.

---

## Demo

- **Live Demo**: [Insert Live URL]
- **Screenshots**: [Insert images or links]

---

## Tech Stack

### 🧠 Language
- TypeScript

### 💻 Frontend
- Framework: Next.js (App Router)
- UI: Tailwind CSS, Shadcn
- State Management: Zustand
- API Client: React Query

### 🛠 Backend
- Framework: Nest.js
- Database: PostgreSQL (via Prisma ORM)
- Background Jobs: cron + node-cron

### ☁ Services
- File Storage: AWS S3

---

## What I learned

---

## Challenges & Solutions

---

## How to Run Locally

```bash
git clone https://github.com/yourusername/my-life-as-a-movie.git
cd my-life-as-a-movie
npm install
npm run dev
