

Do the following steps:

These are the steps to add a new project to my Github pages. It is a workflow
with several steps.

## Step 1 – Gather Inputs
Prompt me for:
- **Project Name** (e.g., `lifelines-game`)
- **One-line Description** (short summary of what this project is about)
- **Tech Stack** (e.g., React + Tailwind + Firebase)
- **GitHub Repo URL**
- **Live URL** (if available)
- **Start Date** (default to today's date unless user provides a different one.)

Some of these inputs are optional, and the user may pass.

## Step 2 – Create Project File
- Under `/projects/`, create a new file: `<project-name>.md` (use slugs as appropriate)
- Populate it with the following template:

```markdown
# {Project Name}

**Description:** {One-line Description}  
**Tech Stack:** {Tech Stack}  
**GitHub Repo:** [link]({GitHub Repo URL})  
**Live Demo:** [link]({Live URL})  
**Start Date:** {Date}

---
(Add future notes, updates, changelog here)
````

## Step 3 – Update Projects Dashboard

I keep track of several of my projects in dashboard.md

* Go to `/projects/dashboard.md` (or equivalent table file).
* Find the markdown table, and Add a **new row** in the dashboard table:

Populate it with: 
  * Project Name (linked to its .md file)
  * Description
  * Tech Stack
  * Start Date
  * Status (default = “In Progress”)

### Example Dashboard Row

| Project                             | Description              | Tech Stack       | Start Date | Status      |
| ----------------------------------- | ------------------------ | ---------------- | ---------- | ----------- |
| [Lifelines Game](lifelines-game.md) | A lifespan guessing game | React + Tailwind | 2025-09-06 | In Progress |


## Step 4 – Update Main Projects Page

* Now it is time to Edit `projects.md`.
* Add this project under the **appropriate category** (Games, Educational, Tools, etc.).
* Link it to the `<project-name>.md` file you created.


## Step 5 - run /git-commit
* run the /git-commit slash command. (git-commit)
* Ask for permission to Push these updates to gh (remote)

Please ask if you have any doubts or need clarifications.


