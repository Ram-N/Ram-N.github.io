---
layout: default
title: Today I Learned (TIL)
---

# Today I Learned
Just an assortment of (mostly) Tech-related things I learn, figure out or try for the first time. Sometimes, it is just to admire something!


### When an LLM corrects your Understanding or misconception

Today, Gemini Pro told me:

    You don't need to push the image to Docker Hub for your co-developer to work on the code. Docker Hub is typically used for distributing a finished version of your application (e.g., for deployment), not for collaborative development.

The format... You don't need to do `xyz` ... because `xyz` is only for `XYZ` tasks, but what you want is `ABC`.
I find enlightening. It corrects my misconceptions.


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

