---
layout: default
title: Game Development
---

# The Development of PivotMaster (Reverse Chronological)
This page is my attempt at documenting my progress, experiments, and learnings about rapid game development using "Vibe Coding"


### PivotMaster Development Timeline (Reverse Chronological)

| Day                | Highlights / Comments                                                                      | Link to Detailed Notes | Link to Game State |
| ------------------ | ------------------------------------------------------------------------------------------ | ---------------------- | ------------------ |
| Day 5             | (2025-7-01) <br> Added a Distance Metric <br>  Gray and Monochrome Theme.| [Day 5 Notes](2025-07-01.html)        | [Game State](https://ram-n.github.io/PivotMaster/v5/index.html)    |
| Day 4              | (2025-06-30) <br> Layout centering, added sidebar, <br>difficulty levels (3 modes), target square, win condition | [Day 4 Notes](2025-06-30.html)        | [Game State](https://ram-n.github.io/PivotMaster/v4/index.html)  |
| Day 3              | Added ghost preview, move counter <br>logic fix, history trail effect for all moves                   | [Day 3 Notes](2025-06-29.html)       | [Game State](https://ram-n.github.io/PivotMaster/v3/index.html)   |
| Day 2              | Initial square/grid background, <br> click-to-select pivot corner<br>   introduced rotation animation, fixed pivot selection         | [Day 2 Notes](2025-06-27.html)       | [Game State](https://ram-n.github.io/PivotMaster/v1/index.html)   |
| Day 1              | Project kickoff, initial brainstorming, <br> verbal description of gameplay, MVG concept  <br> 20 minutes with ChatGPT (audio+STT, text replies)      | [Day 1 Notes](2025-06-26.html)       | No coding   |

---
### PivotMaster V5 - Coding Summary (July 1, 2025)

* Created and worked on `V5` Git branch for versioned development.
* Restyled side panel: stretched height, bold fonts, improved radio button alignment.
* Modernized Start Level button: larger, uppercase, black/white theme.
* Added live "Distance to Target" display to analytics panel.
* Changed target square: dotted black outline, gray corner dots (replacing red and yellow).
* Merged `V5` into `main` for GitHub Pages deployment and tagged as `V5`.

---
### Day 4 - 21 minutes - June 30, 2025

* Centered the entire game layout (title, sidebar, main canvas, and analytics panel).
* Moved the game title to the top and styled it prominently.
* Added a left sidebar for game controls.
* Introduced three difficulty levels: Left to Right, Top to Bottom, and Diagonal.
* Implemented target square rendering for each difficulty level.
* Moved the move counter into the bottom analytics panel.
* Added a basic win condition based on center-to-center proximity (10-pixel tolerance) with a win alert.

[Detailed Notes](2025-06-30.html)

---

### Day 3 - 21 minutes - Sunday June 29, 2025

[Detailed Notes](2025-06-29.html)

- Click-based **pivot point selection**.
- **Visual pivot circles** for guidance.
- **Live ghost preview** following mouse hover.
- **Animated chair rotation** to new position.
- **Accurate move counter**.
- **Persistent history trail** showing all past chair positions.

---


## Day 2 - 20 minutes + 5 for notes June 27, 2025

[Detailed Notes](2025-06-27.html)

---

### Day 2 - Created some prompts with Gemini

[Gemini Suggested Prompts](llm_prompts.html)

---

## June 26, 2025

[Detailed Notes](2025-06-26.html)

---

<!-- {% comment %}
Add new entries above in reverse chronological order (newest first)
Format: 
## Month Day, Year
{% include_relative YYYY-MM-DD.md %}
---
{% endcomment %} -->