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

## Tabletalk

**Description:**  
Tabletalk is a powerful tool that enables users to query CSV files using natural language (English).  
Instead of writing SQL or pandas code, users can simply ask questions like "Show me sales from last quarter" or "What's the average price by category?"

**Key Features:**  
- Natural language to SQL/pandas translation  
- HTML frontend with FastAPI backend  
- Interactive CSV file analysis  
- No coding required for data exploration  

**GitHub:** [tabletalk](https://github.com/Ram-N/tabletalk)

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

<div id="project-dashboard-container"></div>
<script src="/assets/js/project-dashboard.js"></script>

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
