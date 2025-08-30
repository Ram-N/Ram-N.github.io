# /til-update — Append a TIL entry, commit and push to Github

**Goal:** Take the user’s short paragraph(s) about something technical they learned today, format it as a TIL entry, insert it at the top of `TIL.md` (reverse-chronological, after the YAML front matter), then commit and push to `main`.

**Inputs you will receive at runtime**

* `USER_TEXT`: 1–3 short paragraphs from the user (free text).
* Optional overrides:

  * `REPO_PATH` (default: current working directory)
  * `TIL_PATH` (default: `TIL.md`)
  * `BRANCH` (default: `main`)
  * `TIMEZONE` (default: America/New\_York)

**Formatting rules**

1. Derive a concise title (max \~70 chars) from `USER_TEXT`. Use Title Case. No trailing period.
2. Date = today in `TIMEZONE`, formatted `YYYY-MM-DD`.
3. Extract 1–2 relevant keywords and render as hashtags (lowercase, kebab-case; e.g., `#vim`, `#git-aliases`). Do not repeat words from the title unless they add value.
4. The entry must be exactly this Markdown block (blank line between sections):

```
### {TITLE}
{DATE}
{USER_TEXT}

{HASHTAGS_LINE}
```

* If there are no good keywords, omit the hashtags line entirely (don’t add an empty line).

**File update rules**

* The file is reverse-chronological by entry, immediately after YAML front matter if present.
* YAML front matter is delimited by lines containing only `---` at the start of the file. If present, insert the new entry **after** the closing `---`.
* If there is no front matter, insert at the top of the file.
* Ensure a single blank line between entries (no double-spacing).

**Git workflow**

1. `cd` to `REPO_PATH`. (default /home/ram/projects/Ram-N.github.io)
2. Modify `TIL_PATH` as specified above (create if missing).
3. `git add TIL.md`
4. Commit message format:
   `TIL: {TITLE} ({DATE})`
5. `git push origin {BRANCH}`

**Conflict/edge handling**

* If the working tree is dirty with unrelated changes, run `git stash -u` before step 4, then after pushing successfully, try `git stash pop`. If conflicts on pop, keep the stash and report that manual resolution is needed.
* If rebase/push fails due to remote updates, retry once: `git pull --rebase`, re-add if needed, then push again. If still failing, report the exact Git error.
* If `TIL.md` doesn’t exist, create it. If it contains only front matter, preserve it.
* Always preserve Unix newlines (`\n`).

**Output (what you report back to the user)**

* First line: `TIL entry added and pushed.`
* Then show:

  * Title
  * Date
  * Insert position detected: `after front matter` or `top of file`
  * Commit message
  * The hashtags used (or `none`)
* Do **not** echo the full file; only the entry block you inserted.

**Example**
Input `USER_TEXT`:

```
Learned how to create a global git alias for amending the last commit without opening an editor.
Alias: git config --global alias.fix "commit --amend --no-edit"
```

Possible formatted entry:

```
### Git Alias for Instant Amend
2025-08-30
Learned how to create a global git alias for amending the last commit without opening an editor.
Alias: git config --global alias.fix "commit --amend --no-edit"

#git #git-aliases
```

Commit message:

```
TIL: Git Alias for Instant Amend (2025-08-30)
```

**Success criteria**

* Entry appears as the first post below any YAML front matter, otherwise at top.
* Exactly one blank line between entries.
* Commit exists on `origin/{BRANCH}`.
