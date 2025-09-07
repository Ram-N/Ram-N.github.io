# /til-update — Create individual TIL entry file, commit and push to Github

**Goal:** Take the user's short paragraph(s) about something technical they learned today, format it as a TIL entry in its own file in the `TIL/` directory with filename `YYYY-MM-DD_TIL.md`, then commit and push to `main`.

**Inputs you will receive at runtime**

* `USER_TEXT`: 1–3 short paragraphs from the user (free text).
* Optional overrides:

  * `REPO_PATH` (default: current working directory)
  * `TIL_DIR` (default: `TIL/`)
  * `BRANCH` (default: `main`)
  * `TIMEZONE` (default: America/New\_York)

**Input validation and prompting**

If the user doesn't provide sufficient information when running `/til-update`, prompt them for missing details:

1. **If no USER_TEXT provided**: Ask "What did you learn today? Please provide 1-3 paragraphs describing your learning."

2. **If title derivation fails**: Ask "What would you like to call this TIL entry? Please provide a concise title (max ~70 characters)."

3. **If date override needed**: Ask "What date should this TIL entry use? (Format: YYYY-MM-DD, or press Enter for today)"

Always prompt for missing information before proceeding with file creation.

**Formatting rules**

1. Derive a concise title (max \~70 chars) from `USER_TEXT`. Use Title Case. No trailing period.
2. Date = today in `TIMEZONE`, formatted `YYYY-MM-DD`. Add the 3-letter abbr. for the day of the week.
3. Extract 2–4 relevant keywords and render as hashtags (lowercase, kebab-case; e.g., `#vim`, `#git-aliases`). Do not repeat words from the title unless they add value.
4. Filename = `YYYY-MM-DD_TIL.md` in the `TIL/` directory.
5. The file must be exactly this structure:

```
---
layout: default
title: "{TITLE}"
date: {DATE}
tags: [tag1, tag2, tag3]
---

# {TITLE}

*{DATE, Day of week (3-letter abbreviation)}*

{USER_TEXT}

{HASHTAGS_LINE}
```

* If there are no good keywords, omit both the tags in front matter and hashtags line.

**File creation rules**

* Create a new file `YYYY-MM-DD_TIL.md` in the `TIL/` directory.
* If the TIL directory doesn't exist, create it.
* Each TIL entry is its own standalone file with complete YAML front matter.
* Use the exact structure shown above with proper Jekyll front matter.

**Git workflow**

1. `cd` to `REPO_PATH`. (default /home/ram/projects/Ram-N.github.io)
2. Create the new TIL file `TIL/YYYY-MM-DD_TIL.md` as specified above.
3. `git add TIL/YYYY-MM-DD_TIL.md`
4. Use the /git-commit slash command to commit the changes.
5. `git push origin {BRANCH}`

**Conflict/edge handling**

* If the working tree is dirty with unrelated changes, run `git stash -u` before step 4, then after pushing successfully, try `git stash pop`. If conflicts on pop, keep the stash and report that manual resolution is needed.
* If rebase/push fails due to remote updates, retry once: `git pull --rebase`, re-add if needed, then push again. If still failing, report the exact Git error.
* If the `TIL/` directory doesn't exist, create it.
* Always preserve Unix newlines (`\n`).

**Output (what you report back to the user)**

* First line: `TIL entry added and pushed.`
* Then show:

  * Title
  * Date
  * Filename created: `TIL/YYYY-MM-DD_TIL.md`
  * Commit message
  * The hashtags used (or `none`)
* Do **not** echo the full file; only confirm the file creation.

**Example**
Input `USER_TEXT`:

```
Learned how to create a global git alias for amending the last commit without opening an editor.
Alias: git config --global alias.fix "commit --amend --no-edit"
```

Possible formatted file (`TIL/2025-08-30_TIL.md`):

```
---
layout: default
title: "Git Alias for Instant Amend"
date: 2025-08-30
tags: [git, git-aliases]
---

# Git Alias for Instant Amend

*2025-08-30, Fri*

Learned how to create a global git alias for amending the last commit without opening an editor.
Alias: git config --global alias.fix "commit --amend --no-edit"

#git #git-aliases
```

Commit message:

```
TIL: Git Alias for Instant Amend (2025-08-30)
```

**Success criteria**

* New TIL file created in `TIL/` directory with proper YAML front matter.
* File follows the exact structure specified above.
* Commit exists on `origin/{BRANCH}` with the new file.
