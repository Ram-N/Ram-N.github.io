---
layout: default
title: Projects
---

# Projects

This page highlights some of my current projects. Each one reflects a different area I’m exploring: games, AI education, and word puzzles.

## LitMap

## Games of History


## Pivot Master

**Description:**  
Pivot Master is a simple canvas-based game designed to showcase the evolution of a game idea through multiple development stages.  
Rather than just showing the final version, this project focuses on how a game grows over time.

**Key Themes:**  
- Iterative game design  
- HTML5 Canvas experiments  
- Different playable versions to illustrate progress  

**Current State:**  
I’m currently building and hosting multiple stages of the game, each showing a new feature or design change.

---

## AI Demystified

**Description:**  
AI Demystified is a web-based learning course for students aged 12 to 18.  
It flips the traditional learning approach: students first take quizzes to discover their weak areas, and then explore targeted lessons and glossary terms to build understanding.

**Key Features:**  
- Quiz-first learning model  
- Detailed glossary with AI concepts explained simply  
- Lesson modules focused on beginner-to-intermediate GenAI topics  
- Aimed at making AI literacy accessible for schools and educators  

---

## Clue Chain

**Description:**  
Clue Chain is a word puzzle game where players try to guess 10 hidden words.  
Each word is revealed progressively based on player attempts and available clues.

**Gameplay Mechanics:**  
- Three clue types per word: cryptic, indirect, and straight clues  
- Dynamic scoring system based on clue difficulty  
- Progressive reveal: More clues unlock as the player makes more guesses  
- Theme-based puzzle sets planned for the future  

---

## Other Projects

Here’s a selection of my earlier projects across art, tools, and experiments:

<ul>
  {% for project in site.projects %}
    <li>
      <strong><a href="{{ project.link }}">{{ project.title }}</a></strong><br/>
      {{ project.description }}
    </li>
  {% endfor %}
</ul>

## Project Dashboard

| Project     | Category     | Mobile | Last Worked On | Status      | Priority | Tech Stack           | Next Steps                                | Repo/Link | Notes/Blockers                  |
|-------------|--------------|--------|----------------|-------------|----------|----------------------|-------------------------------------------|-----------|---------------------------------|
| NOVA        | AI Tool      | Y      | Aug 29, 2025   | Active      | High     | React, FastAPI, HF   | Color-code releases, UI polish, favicon   | [Repo]()  | Needs consistent trigger logic  |
| Lifelines   | Game         | Y      | Sep 1, 2025    | Planning    | Medium   | React, Vite, Vercel  | Build first playable version              | [Repo]()  | Requires deep focus             |
| GitHub Pg   | Productivity | N      | Sep 1, 2025    | In Progress | Medium   | Jekyll, GH Pages     | Redesign projects dashboard, tone cleanup | [Repo]()  | Current layout looks boastful   |
| Globetrek   | Game         | Y      | Mar 15, 2025   | On Hold     | Low      | React, Firebase      | Finalize wireframes, basic MVP            | [Repo]()  | Data prep for neighbors needed  |
| DistilBERT  | Educational  | N      | Aug 31, 2025   | Active      | Medium   | Python, HuggingFace  | Continue knowledge distillation video     | [Repo]()  | Align video script + code       |
| Gemini CLI  | AI Tool      | ?      | —              | Backlog     | Low      | Google AI Studio     | Download & test CLI                       | [Repo]()  | Push until lighter coding day   |

# Earlier Projects
Here's a selection of my projects that I dabbled in:

<ul>
  {% for project in site.projects %}
    <li>
      <strong><a href="{{ project.link }}">{{ project.title }}</a></strong><br/>
      {{ project.description }}
    </li>
  {% endfor %}
</ul>
