---
layout: default
title: Projects
---

# Projects

Here’s a selection of my projects across art, tools, and experiments:

<ul>
  {% for project in site.projects %}
    <li>
      <strong><a href="{{ project.link }}">{{ project.title }}</a></strong><br/>
      {{ project.description }}
    </li>
  {% endfor %}
</ul>
