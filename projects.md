---
layout: default
title: Projects
---
---
layout: default
title: Projects
---

# Projects

This page highlights some of my current projects. Each one reflects a different area I’m exploring: games, AI education, and word puzzles.

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

# Earlier Projects
Here’s a selection of my projects that I dabbled in:

<ul>
  {% for project in site.projects %}
    <li>
      <strong><a href="{{ project.link }}">{{ project.title }}</a></strong><br/>
      {{ project.description }}
    </li>
  {% endfor %}
</ul>
