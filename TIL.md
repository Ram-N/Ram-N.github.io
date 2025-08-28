---
layout: default
title: Today I Learned (TIL)
---

# Today I Learned
Just an assortment of (mostly) Tech-related things I learn, figure out or try for the first time. Sometimes, it is just to admire something!


### Connecting Claude SDK to my Github Repo
(2025-08-27, Wed)

Today I learned how to integrate the Claude AI assistant directly into a GitHub repository. By running the `/install-github-app` command in Claude, a repository admin can connect their account and set up the necessary secrets. This allows for a seamless workflow where you can summon Claude's help on issues and pull requests simply by mentioning @claude directly within GitHub. It's a powerful way to bring AI assistance right into your development process.
[https://docs.anthropic.com/en/docs/claude-code/github-actions]

---

### When an LLM corrects your Understanding or misconception

Today, Gemini Pro told me:

    You don't need to push the image to Docker Hub for your co-developer to work on the code. 
     Hub is typically used for distributing a finished version of your application 
     (e.g., for deployment), not for collaborative development.

The format... You don't need to do `xyz` ... because `xyz` is only for `XYZ` tasks, but what you want is `ABC`.
I find these types of nudges very enlightening. It corrects my misconceptions.


### Installed playwright mcp
(2025-07-28)
- After hearing about it in several YT videos, I finally installed `playwright` for CC today. Now, it will take photos of my apps in progress and improve itself!
- Simow has some really neat `playwright mcp` commands here: https://til.simonwillison.net/claude-code/playwright-mcp-claude-code
  
### LLM with Open Weights
- For the first time ever, I managed to install an LLM with "open weights" (DistilBERT) and take a look at its parameters! I am hoping to make a video on what I'm finding.

#### Claude Code's ability to test Python
2025-07-09 Claude Code
- I am in awe of how quickly CC tests its code changes on the CLI. Bash is its strong suit.
It will often ">> run python; import abc from def" to see if the exports are working fine. So much faster than opening and IDE!

