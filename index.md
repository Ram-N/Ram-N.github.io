---
layout: default
title: Home
---

# Ram Narasimhan

![Ram's Avatar](https://avatars.githubusercontent.com/Ram-N?size=150){: .avatar}

## About Me

I'm a data scientist by profession, with a background in mathematical optimization. More generally, I'm just a curious person who loves exploring the intersection of technology and learning. My projects span code, visuals, and interactive tools. Often, I try and "teach" the things that I've learned to others.

## Featured Projects

<div class="projects-grid">
{% for project in site.projects limit:4 %}
  <div class="project-card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <a href="{{ project.url }}" class="project-link">Learn More</a>
  </div>
{% endfor %}
</div>

[My Projects](/projects){: .btn .btn-primary}


## Reading Journey

I typically reading 30+ books annually across genres:
- Non-fiction
- Technology
- History
- Travel narratives
- Occasional fiction

### Recent Reading Highlights

{% for year in (2020..2025) reversed %}
- [Books Read in {{ year }}](https://www.goodreads.com/user/year_in_books/{{ year }}/37469588)
{% endfor %}

[Follow my full reading journey on Goodreads](https://www.goodreads.com/user/show/37469588-ramnarasimhan){: .btn .btn-secondary}

## Generative Art & Coding Experiments

*Note these were created before GenAI and LLM's dominated this space. These are programmatic ways to generate/create art*

- **[Hexagons Gallery](https://ram-n.github.io/hexagons-gallery/)**: Parametric patterns and algorithmic tiling
- **[Generative Art Archive](https://github.com/Ram-N/generative_art/blob/master/contact_sheet.md)**: Visual code sketches using p5.js and Python
- **[Genuary 2021](https://ram-n.github.io/Genuary_2021/)**: 31 generative art prompts in one month


## Connect

- [GitHub](https://github.com/Ram-N)
- [LinkedIn](https://linkedin.com/in/yourprofile)
- [Email](mailto:your.email@domain.com)

_Last updated: August 2025_